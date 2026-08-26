#!/usr/bin/env python3
"""
Export an entire Confluence page tree to PDFs, preserving hierarchy.

Usage:
  python export_confluence_tree.py \\
    "https://kb.finviet.com.vn/display/DMSNEW/Core+DMS90" \\
    "Confluencepdf/Core_DMS90"

Auth (same as export_confluence_pdf.py):
  CONFLUENCE_COOKIE in .env, or --cookie, or storage state.
"""

from __future__ import annotations

import argparse
import asyncio
import json
import os
import re
import sys
import time
from dataclasses import dataclass, field, asdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.parse import quote, unquote, urlparse, parse_qs

import requests
from dotenv import load_dotenv
from playwright.async_api import async_playwright, TimeoutError as PlaywrightTimeout
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
SCRIPT_DIR = Path(__file__).resolve().parent
load_dotenv(ROOT / ".env", override=True)

BASE = "https://kb.finviet.com.vn"
WIN_INVALID = re.compile(r'[<>:"/\\\\|?*]')
MIN_GOOD_PDF_BYTES = 8_000

PRINT_CSS = """
@media print {
  #header, #footer, #navigation, #sidebar, #rw_sidebar,
  #personal-info-sidebar, .ia-fixed-sidebar, .acs-side-bar,
  #main-header, #space-tools-web-item, #page-metadata-banner,
  .page-metadata, .page-metadata-modification-info,
  #comments-section, #comments, .comment-container,
  .aui-toolbar2, .aui-page-header-actions, .page-tools,
  #editPageLink, .editPageLink, a.editPageLink,
  .aui-button.aui-dropdown2-trigger, #action-menu-link,
  .ajs-menu-bar, .global-nav, .aui-header, #header-precursor,
  .aui-sidebar, .ia-splitter-left, #splitter-sidebar, .tipsy,
  #likes-and-labels-container, .like-button-container,
  .content-navigation, #content-nav, .page-popup-trigger,
  .webui-banner, .aui-message.closeable.banner,
  #breadcrumb-section, .ajs-content-hover, #inline-dialog,
  button[aria-label="Edit"], a[href*="editpage.action"],
  #nav-sidebar, .space-tools-section, #space-menu-dropdown {
    display: none !important;
  }
  #main, #content, .wiki-content, #main-content, .page-source,
  .aui-page-panel, .aui-page-panel-inner, .aui-page-panel-content {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    float: none !important;
  }
  body, #page { background: #fff !important; }
  img, .confluence-embedded-image, .image-wrap img {
    max-width: 100% !important;
    height: auto !important;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  table, .confluenceTable, .tablesorter {
    max-width: 100% !important;
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
  .expand-content { display: block !important; }
  a[href]:after { content: "" !important; }
}
"""


@dataclass
class PageNode:
    page_id: str
    title: str
    level: int
    parent_id: str | None
    parent_title: str | None
    children: list[PageNode] = field(default_factory=list)
    url: str = ""
    rel_dir: str = ""          # relative dir under output ("" for root)
    pdf_relpath: str = ""      # relative PDF path under output
    has_children: bool = False
    status: str = "pending"    # pending|success|skipped|failed
    error: str = ""
    attempts: int = 0
    pdf_bytes: int = 0
    pdf_pages: int = 0


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


def sanitize_name(name: str) -> str:
    name = name.strip().rstrip(".")
    name = WIN_INVALID.sub(" - ", name)
    name = re.sub(r"\s+", " ", name).strip()
    return name or "untitled"


def page_url(page_id: str, title: str, space_key: str = "DMSNEW") -> str:
    # Prefer stable pageId URL
    return f"{BASE}/pages/viewpage.action?pageId={page_id}"


def api_headers(cookie: str) -> dict:
    return {"Cookie": cookie, "Accept": "application/json"}


def parse_root_from_url(url: str) -> tuple[str | None, str | None, str | None]:
    """Return (space_key, title, page_id) from display/viewpage URL."""
    parsed = urlparse(url)
    qs = parse_qs(parsed.query)
    if "pageId" in qs:
        return None, None, qs["pageId"][0]
    # /display/SPACE/Title
    m = re.match(r"^/display/([^/]+)/(.+)$", parsed.path)
    if m:
        space = m.group(1)
        title = unquote(m.group(2).replace("+", " "))
        return space, title, None
    # /spaces/SPACE/pages/ID/Title
    m = re.match(r"^/spaces/([^/]+)/pages/(\d+)(?:/.*)?$", parsed.path)
    if m:
        return m.group(1), None, m.group(2)
    return None, None, None


def resolve_root_page(cookie: str, url: str) -> dict:
    space, title, page_id = parse_root_from_url(url)
    h = api_headers(cookie)
    if page_id:
        r = requests.get(
            f"{BASE}/rest/api/content/{page_id}",
            headers=h,
            params={"expand": "version,space,ancestors"},
            timeout=60,
        )
        r.raise_for_status()
        return r.json()
    if space and title:
        r = requests.get(
            f"{BASE}/rest/api/content",
            headers=h,
            params={"spaceKey": space, "title": title, "expand": "version,space,ancestors"},
            timeout=60,
        )
        r.raise_for_status()
        results = r.json().get("results", [])
        if not results:
            raise RuntimeError(f"Root page not found: space={space} title={title}")
        return results[0]
    raise RuntimeError(f"Cannot parse Confluence URL: {url}")


def fetch_children(cookie: str, page_id: str) -> list[dict]:
    h = api_headers(cookie)
    items: list[dict] = []
    start = 0
    while True:
        r = requests.get(
            f"{BASE}/rest/api/content/{page_id}/child/page",
            headers=h,
            params={"limit": 100, "start": start, "expand": "version"},
            timeout=60,
        )
        r.raise_for_status()
        batch = r.json().get("results", [])
        items.extend(batch)
        if len(batch) < 100:
            break
        start += 100
    return items


def build_tree(cookie: str, root: dict) -> PageNode:
    def walk(page: dict, level: int, parent: PageNode | None) -> PageNode:
        node = PageNode(
            page_id=str(page["id"]),
            title=page["title"],
            level=level,
            parent_id=parent.page_id if parent else None,
            parent_title=parent.title if parent else None,
            url=page_url(str(page["id"]), page["title"]),
        )
        kids = fetch_children(cookie, node.page_id)
        node.has_children = len(kids) > 0
        for k in kids:
            child = walk(k, level + 1, node)
            node.children.append(child)
        return node

    return walk(root, 0, None)


def assign_paths(root: PageNode) -> None:
    """
    Assign rel_dir / pdf_relpath under output root.

    - Root PDF sits at output/<RootTitle>.pdf (output dir is the container).
    - Nodes with children get a folder named after themselves; PDF inside that folder.
    - Leaf pages sit as PDF files inside their parent's folder.
    """

    def walk(node: PageNode, parent_folder: str) -> None:
        safe = sanitize_name(node.title)
        if node.has_children:
            if node.level == 0:
                node.rel_dir = ""
                node.pdf_relpath = f"{safe}.pdf"
                # Children of root live directly under output dir
                child_folder = ""
            else:
                node.rel_dir = f"{parent_folder}/{safe}" if parent_folder else safe
                node.pdf_relpath = f"{node.rel_dir}/{safe}.pdf"
                child_folder = node.rel_dir
        else:
            node.rel_dir = parent_folder
            node.pdf_relpath = (
                f"{parent_folder}/{safe}.pdf" if parent_folder else f"{safe}.pdf"
            )
            child_folder = parent_folder

        for child in node.children:
            walk(child, child_folder)

    walk(root, "")


def flatten(root: PageNode) -> list[PageNode]:
    out: list[PageNode] = []

    def walk(n: PageNode) -> None:
        out.append(n)
        for c in n.children:
            walk(c)

    walk(root)
    return out


def dedupe_pdf_paths(nodes: list[PageNode]) -> None:
    used: dict[str, int] = {}
    for n in nodes:
        key = n.pdf_relpath.lower()
        if key not in used:
            used[key] = 1
            continue
        used[key] += 1
        p = Path(n.pdf_relpath)
        stem = p.stem
        # Prefer page id suffix for uniqueness
        n.pdf_relpath = str(p.with_name(f"{stem} [{n.page_id}].pdf"))


def is_pdf_good(
    path: Path,
    title_hint: str = "",
    allow_empty_page: bool = False,
) -> tuple[bool, str, int, int]:
    if not path.exists():
        return False, "missing", 0, 0
    size = path.stat().st_size
    if size < 500:
        return False, f"too_small:{size}", size, 0
    try:
        reader = PdfReader(str(path))
        pages = len(reader.pages)
        if pages < 1:
            return False, "no_pages", size, 0
        texts = []
        for page in reader.pages[:3]:
            try:
                texts.append(page.extract_text() or "")
            except Exception:
                texts.append("")
        if pages > 3:
            try:
                texts.append(reader.pages[-1].extract_text() or "")
            except Exception:
                pass
        full = "\n".join(texts)
        low = full.lower()
        if ("os_username" in low or "accounts.google" in low or "sign in - google" in low) and "dashboard" not in low:
            return False, "looks_like_login", size, pages
        if "image failed to load" in low:
            return False, "image_failed_text", size, pages

        if size >= MIN_GOOD_PDF_BYTES and len(full.strip()) >= 30:
            return True, "ok", size, pages

        # Parent/index pages often have empty storage body — accept title-only PDFs
        if allow_empty_page and size >= 800 and pages >= 1:
            hint = (title_hint or "").strip().lower()
            if hint and hint in low:
                return True, "ok_empty_parent", size, pages
            if "login" not in low:
                return True, "ok_empty_parent", size, pages

        if size < MIN_GOOD_PDF_BYTES:
            return False, f"too_small:{size}", size, pages
        if len(full.strip()) < 30:
            return False, "blank_text", size, pages
        return True, "ok", size, pages
    except Exception as e:
        return False, f"unreadable:{type(e).__name__}", size, 0


async def prepare_page(page) -> dict:
    await page.wait_for_load_state("domcontentloaded")
    try:
        await page.wait_for_load_state("networkidle", timeout=45000)
    except PlaywrightTimeout:
        pass

    for sel in ["#main-content", ".wiki-content", "#title-text", "h1#title-text"]:
        try:
            await page.wait_for_selector(sel, timeout=20000)
            break
        except PlaywrightTimeout:
            continue

    # Scroll to trigger lazy content
    await page.evaluate(
        """
        async () => {
          const step = Math.max(300, Math.floor(window.innerHeight * 0.8));
          const maxY = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
          for (let y = 0; y < maxY; y += step) {
            window.scrollTo(0, y);
            await new Promise(r => setTimeout(r, 120));
          }
          window.scrollTo(0, 0);
        }
        """
    )

    await page.evaluate(
        """
        async () => {
          const imgs = Array.from(document.images || []);
          await Promise.all(imgs.map(img => {
            if (img.complete && img.naturalWidth > 0) return Promise.resolve();
            return new Promise(resolve => {
              img.addEventListener('load', resolve, { once: true });
              img.addEventListener('error', resolve, { once: true });
              setTimeout(resolve, 10000);
            });
          }));
        }
        """
    )

    opened = await page.evaluate(
        """
        () => {
          let n = 0;
          document.querySelectorAll(
            'button.expand-control, .expand-control, [data-macro-name="expand"] .expand-control'
          ).forEach(el => {
            try {
              const expanded = el.getAttribute('aria-expanded');
              if (expanded === 'false' || el.classList.contains('collapsed')) {
                el.click(); n++;
              } else {
                el.click(); n++;
              }
            } catch (e) {}
          });
          document.querySelectorAll('details:not([open])').forEach(d => { d.open = true; n++; });
          return n;
        }
        """
    )
    await page.wait_for_timeout(600)

    return await page.evaluate(
        """
        (opened) => {
          const title = document.querySelector('#title-text, h1#title-text, h1')?.innerText?.trim() || document.title;
          const main = document.querySelector('#main-content, .wiki-content, #content');
          const text = (main?.innerText || document.body?.innerText || '').trim();
          const imgs = Array.from(document.images || []);
          const failed = imgs.filter(i => !i.complete || i.naturalWidth === 0).length;
          const login = !!(document.querySelector('#login-form, input[name="os_username"], .aui-page-login'));
          return {
            title, textLen: text.length, tables: document.querySelectorAll('table').length,
            images: imgs.length, failedImages: failed, login, opened, url: location.href
          };
        }
        """,
        opened,
    )


async def export_one_pdf(page, url: str, output: Path, landscape: bool, scale: float, margin_mm: float) -> dict:
    await page.goto(url, wait_until="domcontentloaded", timeout=120000)
    diag = await prepare_page(page)
    if diag.get("login") or "accounts.google" in (diag.get("url") or "").lower() or "login.action" in (diag.get("url") or "").lower():
        raise RuntimeError("AUTH_EXPIRED_OR_LOGIN_PAGE")
    # Empty body is OK for parent/index pages (title-only); still export PDF
    if diag.get("textLen", 0) < 5 and not (diag.get("title") or "").strip():
        raise RuntimeError("EMPTY_CONTENT")

    await page.add_style_tag(content=PRINT_CSS)
    output.parent.mkdir(parents=True, exist_ok=True)
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
    return diag


async def export_node(page, node: PageNode, out_dir: Path, max_retries: int = 3) -> None:
    pdf_path = out_dir / node.pdf_relpath
    # Parent nodes may be intentionally empty (folder pages)
    allow_empty = bool(node.has_children)
    good, reason, size, pages = is_pdf_good(pdf_path, node.title, allow_empty_page=allow_empty)
    if good:
        node.status = "skipped"
        node.error = ""
        node.pdf_bytes = size
        node.pdf_pages = pages
        print(f"[SKIP] {node.title} -> {node.pdf_relpath}", flush=True)
        return

    attempts_cfg = [
        {"landscape": False, "scale": 0.85, "margin_mm": 8},
        {"landscape": False, "scale": 0.72, "margin_mm": 6},
        {"landscape": True, "scale": 0.78, "margin_mm": 6},
    ]

    last_err = reason if not good and pdf_path.exists() else ""
    last_diag: dict = {}
    for attempt in range(1, max_retries + 1):
        node.attempts = attempt
        cfg = attempts_cfg[min(attempt - 1, len(attempts_cfg) - 1)]
        try:
            if attempt > 1:
                print(f"[RETRY {attempt}/{max_retries}] {node.title}", flush=True)
            last_diag = await export_one_pdf(page, node.url, pdf_path, **cfg)
            # Empty body parent page: accept if title rendered and not login
            if last_diag.get("textLen", 0) < 80 and (node.has_children or last_diag.get("textLen", 0) >= 0):
                allow_empty = True
            good, reason, size, pages = is_pdf_good(
                pdf_path, node.title, allow_empty_page=allow_empty
            )
            if good:
                node.status = "success"
                node.error = "" if reason == "ok" else reason
                node.pdf_bytes = size
                node.pdf_pages = pages
                print(f"[OK] {node.title} ({pages}p, {size}b) {reason}", flush=True)
                return
            last_err = reason
            try:
                pdf_path.unlink(missing_ok=True)
            except Exception:
                pass
        except Exception as e:
            last_err = str(e)
            print(
                f"[RETRY {attempt}/{max_retries}] {node.title} err={type(e).__name__}: {e}",
                flush=True,
            )
            try:
                pdf_path.unlink(missing_ok=True)
            except Exception:
                pass
            await asyncio.sleep(1.5 * attempt)

    node.status = "failed"
    node.error = last_err or "unknown"
    print(f"[FAILED] {node.title} | {node.url} | {node.error}", flush=True)


def write_manifest(out_dir: Path, root: PageNode, source_url: str, nodes: list[PageNode]) -> Path:
    data = {
        "root": root.title,
        "source": source_url,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "total": len(nodes),
        "pages": [
            {
                "title": n.title,
                "url": n.url,
                "pageId": n.page_id,
                "parent": n.parent_title,
                "parentId": n.parent_id,
                "level": n.level,
                "hasChildren": n.has_children,
                "pdf": n.pdf_relpath.replace("\\", "/"),
                "status": n.status,
                "error": n.error,
                "attempts": n.attempts,
                "pdfBytes": n.pdf_bytes,
                "pdfPages": n.pdf_pages,
            }
            for n in nodes
        ],
    }
    path = out_dir / "_manifest.json"
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    return path


def write_report(out_dir: Path, root: PageNode, nodes: list[PageNode]) -> Path:
    ok = [n for n in nodes if n.status == "success"]
    skip = [n for n in nodes if n.status == "skipped"]
    fail = [n for n in nodes if n.status == "failed"]
    lines = [
        f"Root: {root.title}",
        f"Generated: {datetime.now().isoformat(timespec='seconds')}",
        "",
        f"Total pages found: {len(nodes)}",
        f"Successfully exported: {len(ok)}",
        f"Skipped (already ok): {len(skip)}",
        f"Failed: {len(fail)}",
        f"Covered (success+skipped): {len(ok)+len(skip)}",
        "",
    ]
    if fail:
        lines.append("FAILED PAGES:")
        for n in fail:
            lines.append(f"- {n.title} | {n.url} | {n.error}")
        lines.append("")
    else:
        lines.append("FAILED PAGES:")
        lines.append("(none)")
        lines.append("")
    path = out_dir / "_export_report.txt"
    path.write_text("\n".join(lines), encoding="utf-8")
    return path


async def run_export(
    source_url: str,
    out_dir: Path,
    cookie: str,
    storage_state: Path | None,
    max_retries: int,
    limit: int | None,
) -> int:
    print("=" * 60)
    print("STEP 1 - Resolve root & fetch page tree")
    print("=" * 60)
    root_raw = resolve_root_page(cookie, source_url)
    print(f"Root: {root_raw['title']} (id={root_raw['id']})")
    root = build_tree(cookie, root_raw)
    assign_paths(root)
    nodes = flatten(root)
    dedupe_pdf_paths(nodes)
    print(f"Total pages: {len(nodes)}")
    by_level: dict[int, int] = {}
    for n in nodes:
        by_level[n.level] = by_level.get(n.level, 0) + 1
    print(f"By level: {dict(sorted(by_level.items()))}")

    out_dir.mkdir(parents=True, exist_ok=True)
    # Pre-create folders for nodes with children
    for n in nodes:
        if n.has_children and n.rel_dir:
            (out_dir / n.rel_dir).mkdir(parents=True, exist_ok=True)

    # Write initial manifest (pending)
    write_manifest(out_dir, root, source_url, nodes)

    if limit is not None:
        nodes_to_export = nodes[:limit]
        print(f"LIMIT active: exporting first {limit} pages only")
    else:
        nodes_to_export = nodes

    print()
    print("=" * 60)
    print("STEP 2 - Export PDFs")
    print("=" * 60)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        ctx_kwargs: dict[str, Any] = {"viewport": {"width": 1440, "height": 900}}
        if storage_state and storage_state.exists():
            ctx_kwargs["storage_state"] = str(storage_state)
        context = await browser.new_context(**ctx_kwargs)
        await context.add_cookies(parse_cookie_header(cookie))
        page = await context.new_page()

        for i, node in enumerate(nodes_to_export, 1):
            print(f"\n[{i}/{len(nodes_to_export)}] level={node.level} {node.title}")
            await export_node(page, node, out_dir, max_retries=max_retries)
            # Persist progress periodically
            if i % 5 == 0 or i == len(nodes_to_export):
                write_manifest(out_dir, root, source_url, nodes)
                write_report(out_dir, root, nodes)

        # Save storage for reuse
        try:
            await context.storage_state(path=str(SCRIPT_DIR / "confluence_storage_state.json"))
        except Exception:
            pass
        await browser.close()

    # Final retry pass for failures (one more wave, hard timeout per page)
    failed = [n for n in nodes_to_export if n.status == "failed"]
    if failed:
        print()
        print("=" * 60)
        print(f"STEP 3 - Final retry for {len(failed)} failed pages")
        print("=" * 60, flush=True)
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            context = await browser.new_context(viewport={"width": 1440, "height": 900})
            await context.add_cookies(parse_cookie_header(cookie))
            page = await context.new_page()
            page.set_default_timeout(90000)
            for node in failed:
                print(f"\n[FINAL RETRY] {node.title}", flush=True)
                node.status = "pending"
                try:
                    await asyncio.wait_for(
                        export_node(page, node, out_dir, max_retries=max_retries),
                        timeout=180,
                    )
                except asyncio.TimeoutError:
                    node.status = "failed"
                    node.error = "timeout_final_retry"
                    print(f"[FAILED] {node.title} | timeout_final_retry", flush=True)
            await browser.close()

    write_manifest(out_dir, root, source_url, nodes)
    report = write_report(out_dir, root, nodes)
    ok = sum(1 for n in nodes if n.status in ("success", "skipped"))
    fail = sum(1 for n in nodes if n.status == "failed")
    print()
    print("=" * 60)
    print("DONE")
    print("=" * 60)
    print(f"Total: {len(nodes)} | Covered: {ok} | Failed: {fail}")
    print(f"Manifest: {out_dir / '_manifest.json'}")
    print(f"Report:   {report}")
    return 0 if fail == 0 else 1


def main() -> None:
    parser = argparse.ArgumentParser(description="Export Confluence page tree to PDFs")
    parser.add_argument("url", help="Root Confluence page URL")
    parser.add_argument("output", help="Output directory")
    parser.add_argument("--cookie", default=None, help="Cookie header override")
    parser.add_argument("--storage-state", default=None, help="Playwright storage state JSON")
    parser.add_argument("--retries", type=int, default=3, help="Max retries per page")
    parser.add_argument("--limit", type=int, default=None, help="Export only first N pages (debug)")
    args = parser.parse_args()

    cookie = resolve_cookie(args.cookie)
    if not cookie:
        print("ERROR: No CONFLUENCE_COOKIE / --cookie found", file=sys.stderr)
        raise SystemExit(2)

    out_dir = Path(args.output)
    if not out_dir.is_absolute():
        out_dir = (Path.cwd() / out_dir).resolve()

    storage = Path(args.storage_state) if args.storage_state else SCRIPT_DIR / "confluence_storage_state.json"

    code = asyncio.run(
        run_export(
            source_url=args.url,
            out_dir=out_dir,
            cookie=cookie,
            storage_state=storage if storage.exists() else None,
            max_retries=args.retries,
            limit=args.limit,
        )
    )
    raise SystemExit(code)


if __name__ == "__main__":
    main()
