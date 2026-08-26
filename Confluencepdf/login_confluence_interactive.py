#!/usr/bin/env python3
"""
One-time interactive Confluence login (Google SAML).
Opens a visible browser, waits until you finish SSO, then saves
Playwright storage state for reuse by export_confluence_pdf.py.

Usage:
  python login_confluence_interactive.py
  python login_confluence_interactive.py --timeout 300
"""

from __future__ import annotations

import argparse
import asyncio
from pathlib import Path

from playwright.async_api import async_playwright

SCRIPT_DIR = Path(__file__).resolve().parent
STATE = SCRIPT_DIR / "confluence_storage_state.json"
START_URL = "https://kb.finviet.com.vn/display/DMSNEW/%5BHO%5D+Dashboard"


async def main(timeout_sec: int) -> int:
    print("Opening browser for Confluence SSO...")
    print("Complete Google/SAML login in the window.")
    print(f"Waiting up to {timeout_sec}s for authenticated page...")

    async with async_playwright() as p:
        context = await p.chromium.launch_persistent_context(
            user_data_dir=str(SCRIPT_DIR / ".pw_profile"),
            headless=False,
            viewport={"width": 1400, "height": 900},
            channel="chrome",
        )
        page = context.pages[0] if context.pages else await context.new_page()
        await page.goto(START_URL, wait_until="domcontentloaded", timeout=90000)

        deadline = asyncio.get_event_loop().time() + timeout_sec
        ok = False
        while asyncio.get_event_loop().time() < deadline:
            url = page.url.lower()
            title = await page.title()
            has_main = await page.evaluate(
                "() => !!document.querySelector('#main-content, .wiki-content, #title-text')"
            )
            if (
                has_main
                and "accounts.google" not in url
                and "samlsso" not in url
                and ("login.action" not in url or "display" in url)
                and ("Dashboard" in title or "[HO]" in title or has_main)
            ):
                # Extra: ensure not login form
                is_login = await page.evaluate(
                    "() => !!document.querySelector('#login-form, input[name=\"os_username\"]')"
                )
                if not is_login:
                    ok = True
                    break
            await asyncio.sleep(2)

        if not ok:
            print("TIMEOUT: login not completed.")
            await context.close()
            return 1

        await context.storage_state(path=str(STATE))
        print(f"Saved storage state: {STATE}")
        print("You can now run export_confluence_pdf.py")
        await context.close()
        return 0


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--timeout", type=int, default=300)
    args = parser.parse_args()
    raise SystemExit(asyncio.run(main(args.timeout)))
