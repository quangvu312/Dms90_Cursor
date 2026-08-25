import json
import re
from pathlib import Path

from config import BASE_URL, HEADERS
from utils import get

CACHE = Path("cache/pages.json")

HTML_DIR = Path("Docs/HTML")
HTML_DIR.mkdir(parents=True, exist_ok=True)

pages = json.loads(CACHE.read_text(encoding="utf-8"))

print(f"Total pages: {len(pages)}")

for index, page in enumerate(pages, start=1):

    page_id = page["id"]
    title = page["title"]

    print(f"[{index}/{len(pages)}] {title}")

    url = f"{BASE_URL}/rest/api/content/{page_id}"

    params = {
        "expand": "body.storage"
    }

    data = get(url, HEADERS, params)

    html = data["body"]["storage"]["value"]

    filename = re.sub(r'[\\/:*?"<>|]', "_", title)

    output = HTML_DIR / f"{filename}.html"

    output.write_text(html, encoding="utf-8")

print("DONE")