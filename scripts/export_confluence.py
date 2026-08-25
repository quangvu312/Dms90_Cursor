import json
import os
import time

from config import BASE_URL
from config import SPACE_KEY
from config import HEADERS
from utils import get

CACHE_DIR = "cache"
os.makedirs(CACHE_DIR, exist_ok=True)

PAGES_CACHE = os.path.join(CACHE_DIR, "pages.json")
VERSIONS_CACHE = os.path.join(CACHE_DIR, "versions.json")

BASE_API = f"{BASE_URL}/rest/api/content"

LIMIT = 100


# ==========================
# Load version cache
# ==========================

if os.path.exists(VERSIONS_CACHE):
    with open(VERSIONS_CACHE, "r", encoding="utf-8") as f:
        version_cache = json.load(f)
else:
    version_cache = {}


# ==========================
# STEP 1 - Load page list
# ==========================

print("=" * 60)
print("STEP 1 - Load page list")
print("=" * 60)

all_pages = []

start = 0

while True:

    params = {
        "spaceKey": SPACE_KEY,
        "limit": LIMIT,
        "start": start,
    }

    data = get(BASE_API, HEADERS, params)

    results = data.get("results", [])

    if not results:
        break

    all_pages.extend(results)

    print(f"Loaded {len(all_pages)} pages")

    if len(results) < LIMIT:
        break

    start += LIMIT


print()
print("Total pages:", len(all_pages))


# ==========================
# STEP 2 - Check version
# ==========================

print()
print("=" * 60)
print("STEP 2 - Compare version")
print("=" * 60)

changed_pages = []

new_version_cache = {}

for page in all_pages:

    page_id = page["id"]

    url = f"{BASE_API}/{page_id}"

    params = {
        "expand": "version,ancestors"
    }

    data = get(url, HEADERS, params)

    version = data["version"]["number"]

    new_version_cache[page_id] = version

    old_version = version_cache.get(page_id)

    if old_version != version:

        changed_pages.append(data)

        print(
            f"UPDATE : {page_id} "
            f"(v{old_version} -> v{version})"
        )

    else:

        print(
            f"SKIP   : {page_id}"
        )

    time.sleep(0.1)

print()
print(f"Changed pages : {len(changed_pages)}")


# ==========================
# Save caches
# ==========================

with open(PAGES_CACHE, "w", encoding="utf-8") as f:
    json.dump(all_pages, f, ensure_ascii=False, indent=2)

with open(VERSIONS_CACHE, "w", encoding="utf-8") as f:
    json.dump(new_version_cache, f, ensure_ascii=False, indent=2)

print()
print("=" * 60)
print("DONE")
print("=" * 60)

print("Pages cache    :", PAGES_CACHE)
print("Version cache  :", VERSIONS_CACHE)