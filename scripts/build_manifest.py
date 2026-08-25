import json
import re
import shutil
import unicodedata
from pathlib import Path

# =========================
# PATH
# =========================

ROOT = Path(__file__).resolve().parent.parent

PAGES_JSON = ROOT / "cache" / "pages.json"

SOURCE_DIR = ROOT / "Docs" / "Markdown_clean"

TARGET_DIR = ROOT / "Docs" / "Confluence"

MANIFEST_FILE = ROOT / "Docs" / "manifest.json"

LOOKUP_FILE = ROOT / "Docs" / "_confluence-pages-lookup.md"

TARGET_DIR.mkdir(parents=True, exist_ok=True)

# =========================
# LOAD PAGES
# =========================

pages = json.loads(
    PAGES_JSON.read_text(encoding="utf-8")
)

# =========================
# HELPERS
# =========================


def slugify(text: str) -> str:
    """
    Convert title -> file name
    """

    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode()

    text = text.lower()

    text = re.sub(r"[^a-z0-9]+", "-", text)

    text = re.sub(r"-+", "-", text)

    return text.strip("-")


# =========================
# BUILD
# =========================

manifest = []

lookup_lines = [
    "# Confluence Pages",
    "",
    "| STT | Title | File |",
    "|----:|-------|------|",
]

count = 0

for index, page in enumerate(pages, start=1):

    page_id = str(page["id"])

    title = page["title"]

    slug = slugify(title)

    source_file = SOURCE_DIR / f"{page_id}.md"

    if not source_file.exists():
        print(f"SKIP {page_id}")
        continue

    filename = f"{index:03d}-{slug}.md"

    target_file = TARGET_DIR / filename

    shutil.copy2(source_file, target_file)

    record = {
        "index": index,
        "id": page_id,
        "title": title,
        "file": filename,
    }

    manifest.append(record)

    lookup_lines.append(
        f"| {index} | {title} | {filename} |"
    )

    count += 1

    print(f"[{count}] {filename}")

# =========================
# SAVE
# =========================

MANIFEST_FILE.write_text(
    json.dumps(
        manifest,
        ensure_ascii=False,
        indent=2,
    ),
    encoding="utf-8",
)

LOOKUP_FILE.write_text(
    "\n".join(lookup_lines),
    encoding="utf-8",
)

print()
print("=" * 40)
print("DONE")
print(f"Total pages : {count}")
print(f"Manifest    : {MANIFEST_FILE}")
print(f"Lookup      : {LOOKUP_FILE}")
print(f"Output      : {TARGET_DIR}")
print("=" * 40)