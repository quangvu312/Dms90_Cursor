#!/usr/bin/env python3
"""
Export a Confluence page to PDF via Chromium print-to-PDF.

Usage:
  python export_confluence_pdf.py <url> <output.pdf>
  python export_confluence_pdf.py \\
    "https://kb.finviet.com.vn/display/DMSNEW/%5BHO%5D+Dashboard" \\
    "Confluencepdf/[HO] Dashboard.pdf"

Auth (first match wins):
  1) --cookie "JSESSIONID=..."
  2) CONFLUENCE_COOKIE env / .env at repo root
  3) Confluencepdf/.session_cookie.tmp (local temp, not for git)
  4) Playwright storage state: Confluencepdf/confluence_storage_state.json
"""

from __future__ import annotations

import argparse
import asyncio
import os
import re
import sys
from pathlib import Path

from dotenv import load_dotenv
from playwright.async_api import async_playwright, TimeoutError as PlaywrightTimeout

ROOT = Path(__file__).resolve().parents[1]
SCRIPT_DIR = Path(__file__).resolve().parent
load_dotenv(ROOT / ".env")

PRINT_CSS = """
@media print {
  /* Hide Confluence chrome — do not alter main article content */
  #header, #footer, #navigation, #sidebar, #rw_sidebar,
  #personal-info-sidebar, .ia-fixed-sidebar, .acs-side-bar,
  #main-header, #space-tools-web-item, #page-metadata-banner,
  .page-metadata, .page-metadata-modification-info,
  #comments-section, #comments, .comment-container,
  .aui-toolbar2, .aui-page-header-actions, .page-tools,
  #editPageLink, .editPageLink, a.editPageLink,
  .aui-button.aui-dropdown2-trigger, #action-menu-link,
  .ajs-menu-bar, #navigation, .global-nav,
  .aui-header, #header-precursor, .aui-sidebar,
  .ia-splitter-left, #splitter-sidebar, .tipsy,
  .confluence-information-macro-icon /* keep panels, only trim chrome */,
  #likes-and-labels-container, .like-button-container,
  .content-navigation, #content-nav, .page-popup-trigger,
  .webui-banner, .aui-message.closeable.banner,
  #breadcrumb-section /* optional; uncomment if needed */,
  .ajs-content-hover, #inline-dialog,
  button[aria-label="Edit"], a[href*="editpage.action"] {
    display: none !important;
  }

  #main, #content, .wiki-content, #main-content, .page-source {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    float: none !important;
  }

  body, #page, .aui-page-panel, .aui-page-panel-inner,
  .aui-page-panel-content {
    background: #fff !important;
  }

  img, .confluence-embedded-image, .image-wrap img {
    max-width: 100% !important;
    height: auto !important;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  table, .confluenceTable, .tablesorter {
    max-width: 100% !important;
    width: auto !important;
    table-layout: auto !important;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  pre, code, .code, .syntaxhighlighter, .panel {
    page-break-inside: avoid;
    break-inside: avoid;
    white-space: pre-wrap !important;
    word-wrap: break-word !important;
  }

  .expand-content, .expand-control {
    display: block !important;
  }

  a[href]:after { content: "" !important; }
}
"""


def resolve_cookie(cli_cookie: str | None) -> str | None:
    if cli_cookie and cli_cookie.strip():
        return cli_cookie.strip()
    env = os.getenv("CONFLUENCE_COOKIE")
    if env and env.strip():
        return env.strip()
    tmp = SCRIPT_DIR / ".session_cookie.tmp"
    if tmp.exists():
        val = tmp.read_text(encoding="utf-8").strip()
        if val:
            return val
    return None


def parse_cookie_header(cookie_header: str) -> list[dict]:
    cookies = []
    for part in cookie_header.split(";"):
        part = part.strip()
        if not part or "=" not in part:
            continue
        name, value = part.split("=", 1)
        cookies.append(
            {
                "name": name.strip(),
                "value": value.strip(),
                "domain": "kb.finviet.com.vn",
                "path": "/",
            }
        )
    return cookies


async def wait_for_content(page) -> None:
    await page.wait_for_load_state("domcontentloaded")
    try:
        await page.wait_for_load_state("networkidle", timeout=60000)
    except PlaywrightTimeout:
        pass
    # Wait for main content / title
    for sel in ["#main-content", ".wiki-content", "#title-text", "h1#title-text"]:
        try:
            await page.wait_for_selector(sel, timeout=15000)
            break
        except PlaywrightTimeout:
            continue
    # Images
    await page.evaluate(
        """
        async () => {
          const imgs = Array.from(document.images || []);
          await Promise.all(imgs.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
              img.addEventListener('load', resolve, { once: true });
              img.addEventListener('error', resolve, { once: true });
              setTimeout(resolve, 8000);
            });
          }));
        }
        """
    )
    await page.wait_for_timeout(1000)


async def expand_all_sections(page) -> int:
    return await page.evaluate(
        """
        () => {
          let opened = 0;
          const controls = document.querySelectorAll(
            'button.expand-control, .expand-control, .aui-button.expand-control, [data-macro-name="expand"] .expand-control'
          );
          controls.forEach(el => {
            const expanded = el.getAttribute('aria-expanded');
            const content = el.closest('.expand-container')?.querySelector('.expand-content');
            const hidden = content && (content.style.display === 'none' || content.hidden);
            if (expanded === 'false' || hidden || el.classList.contains('collapsed')) {
              try { el.click(); opened++; } catch (e) {}
            }
          });
          // Some themes use details/summary
          document.querySelectorAll('details:not([open])').forEach(d => {
            d.open = true; opened++;
          });
          return opened;
        }
        """
    )


async def is_login_page(page) -> bool:
    url = page.url.lower()
    if any(x in url for x in ("login", "saml", "accounts.google", "os_destination")):
        return True
    return await page.evaluate(
        """
        () => {
          const t = (document.body && document.body.innerText || '').toLowerCase();
          return !!(document.querySelector('#login-form, form[name="loginform"], input[name="os_username"], .aui-page-login')
            || t.includes('log in') && t.includes('password'));
        }
        """
    )


async def page_diagnostics(page) -> dict:
    return await page.evaluate(
        """
        () => {
          const title = document.querySelector('#title-text, h1#title-text, h1')?.innerText?.trim() || document.title;
          const main = document.querySelector('#main-content, .wiki-content, #content');
          const text = (main?.innerText || document.body?.innerText || '').trim();
          const imgs = Array.from(document.images || []);
          const failedImgs = imgs.filter(i => !i.complete || i.naturalWidth === 0).length;
          return {
            title,
            textLen: text.length,
            textStart: text.slice(0, 200),
            textEnd: text.slice(-200),
            tables: document.querySelectorAll('table').length,
            images: imgs.length,
            failedImages: failedImgs,
            hasFailedLoadText: text.includes('Image failed to load'),
          };
        }
        """
    )


async def export_pdf(
    url: str,
    output: Path,
    cookie_header: str | None,
    storage_state: Path | None,
    landscape: bool,
    scale: float,
    margin_mm: float,
) -> dict:
    output.parent.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context_kwargs = {
            "viewport": {"width": 1400, "height": 900},
            "device_scale_factor": 1,
        }
        if storage_state and storage_state.exists():
            context_kwargs["storage_state"] = str(storage_state)
        context = await browser.new_context(**context_kwargs)
        if cookie_header:
            await context.add_cookies(parse_cookie_header(cookie_header))

        page = await context.new_page()
        await page.goto(url, wait_until="domcontentloaded", timeout=90000)
        await wait_for_content(page)

        if await is_login_page(page):
            await browser.close()
            raise SystemExit(
                "AUTH_EXPIRED: Confluence session is not valid "
                "(redirected to login/SAML). Update CONFLUENCE_COOKIE in .env "
                "or provide --cookie / storage state."
            )

        opened = await expand_all_sections(page)
        await page.wait_for_timeout(800)
        await page.add_style_tag(content=PRINT_CSS)

        diag = await page_diagnostics(page)

        await page.pdf(
            path=str(output),
            format="A4",
            landscape=landscape,
            print_background=True,
            prefer_css_page_size=False,
            scale=scale,
            margin={
                "top": f"{margin_mm}mm",
                "bottom": f"{margin_mm}mm",
                "left": f"{margin_mm}mm",
                "right": f"{margin_mm}mm",
            },
            display_header_footer=False,
        )
        # Persist storage for reuse (cookies refreshed by server)
        state_path = SCRIPT_DIR / "confluence_storage_state.json"
        try:
            await context.storage_state(path=str(state_path))
        except Exception:
            pass
        await browser.close()
        diag["openedExpands"] = opened
        diag["output"] = str(output)
        diag["landscape"] = landscape
        diag["scale"] = scale
        return diag


def verify_pdf(path: Path, expected_title_parts: list[str]) -> dict:
    from pypdf import PdfReader

    result = {
        "exists": path.exists(),
        "size": path.stat().st_size if path.exists() else 0,
        "pages": 0,
        "text_len": 0,
        "has_title": False,
        "has_login_junk": False,
        "blank": True,
        "sample_start": "",
        "sample_end": "",
    }
    if not path.exists() or path.stat().st_size < 1000:
        return result
    reader = PdfReader(str(path))
    result["pages"] = len(reader.pages)
    texts = []
    for page in reader.pages:
        try:
            texts.append(page.extract_text() or "")
        except Exception:
            texts.append("")
    full = "\n".join(texts)
    result["text_len"] = len(full.strip())
    result["blank"] = result["text_len"] < 40
    result["sample_start"] = full.strip()[:250]
    result["sample_end"] = full.strip()[-250:]
    low = full.lower()
    result["has_login_junk"] = any(
        x in low for x in ("sign in", "os_username", "accounts.google", "password")
    ) and "dashboard" not in low
    result["has_title"] = any(p.lower() in low for p in expected_title_parts)
    return result


async def run(args: argparse.Namespace) -> int:
    url = args.url
    output = Path(args.output)
    if not output.is_absolute():
        output = (Path.cwd() / output).resolve()

    cookie = resolve_cookie(args.cookie)
    storage = Path(args.storage_state) if args.storage_state else SCRIPT_DIR / "confluence_storage_state.json"

    if not cookie and not storage.exists():
        print(
            "ERROR: No Confluence auth found.\n"
            "  Set CONFLUENCE_COOKIE in .env, or pass --cookie, or provide storage state.",
            file=sys.stderr,
        )
        return 2

    print(f"URL: {url}")
    print(f"OUT: {output}")
    print(f"Auth: cookie={'yes' if cookie else 'no'} storage={'yes' if storage.exists() else 'no'}")

    attempts = [
        {"landscape": False, "scale": 0.85, "margin_mm": 8},
        {"landscape": False, "scale": 0.72, "margin_mm": 6},
        {"landscape": True, "scale": 0.80, "margin_mm": 6},
        {"landscape": True, "scale": 0.68, "margin_mm": 5},
    ]
    if args.landscape:
        attempts = [a for a in attempts if a["landscape"]] + [a for a in attempts if not a["landscape"]]
    if args.scale:
        attempts = [{"landscape": args.landscape, "scale": args.scale, "margin_mm": args.margin}] + attempts

    last_err = None
    best = None
    for i, cfg in enumerate(attempts, 1):
        print(f"Attempt {i}: landscape={cfg['landscape']} scale={cfg['scale']} margin={cfg['margin_mm']}mm")
        try:
            diag = await export_pdf(
                url=url,
                output=output,
                cookie_header=cookie,
                storage_state=storage if storage.exists() else None,
                landscape=cfg["landscape"],
                scale=cfg["scale"],
                margin_mm=cfg["margin_mm"],
            )
        except SystemExit as e:
            print(str(e), file=sys.stderr)
            return 3
        except Exception as e:
            last_err = e
            print(f"  export error: {e}")
            continue

        verify = verify_pdf(output, ["[HO] Dashboard", "Dashboard"])
        print(
            f"  page_diag title={diag.get('title')!r} tables={diag.get('tables')} "
            f"images={diag.get('images')} failed_imgs={diag.get('failedImages')} "
            f"text_len={diag.get('textLen')} expands={diag.get('openedExpands')}"
        )
        print(
            f"  pdf pages={verify['pages']} size={verify['size']} "
            f"text_len={verify['text_len']} title={verify['has_title']} "
            f"blank={verify['blank']} login_junk={verify['has_login_junk']}"
        )

        ok = (
            verify["exists"]
            and not verify["blank"]
            and not verify["has_login_junk"]
            and verify["has_title"]
            and verify["pages"] >= 1
            and diag.get("textLen", 0) > 100
        )
        best = (diag, verify, cfg)
        if ok and diag.get("failedImages", 0) == 0 and not diag.get("hasFailedLoadText"):
            print("SUCCESS")
            print(f"PDF: {output}")
            return 0
        if ok:
            # Acceptable even if some images failed — keep trying landscape once more then accept
            if cfg["landscape"] or i == len(attempts):
                print("SUCCESS (with warnings)")
                print(f"PDF: {output}")
                return 0

    if best:
        print("DONE with best attempt (may need manual review)")
        print(f"PDF: {output}")
        return 0
    print(f"FAILED: {last_err}", file=sys.stderr)
    return 1


def main() -> None:
    parser = argparse.ArgumentParser(description="Export Confluence page to PDF")
    parser.add_argument("url", help="Confluence page URL")
    parser.add_argument("output", help="Output PDF path")
    parser.add_argument("--cookie", default=None, help="Cookie header, e.g. JSESSIONID=...")
    parser.add_argument(
        "--storage-state",
        default=None,
        help="Playwright storage state JSON path",
    )
    parser.add_argument("--landscape", action="store_true", help="Prefer landscape")
    parser.add_argument("--scale", type=float, default=None, help="Print scale 0.1-2.0")
    parser.add_argument("--margin", type=float, default=8.0, help="Margin mm")
    args = parser.parse_args()
    raise SystemExit(asyncio.run(run(args)))


if __name__ == "__main__":
    main()
