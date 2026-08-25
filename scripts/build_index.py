import json
from pathlib import Path
from collections import defaultdict
from datetime import datetime

# ==========================================================
# PATH
# ==========================================================

ROOT = Path(__file__).resolve().parent.parent

DOCS = ROOT / "Docs"

MANIFEST = DOCS / "manifest.json"

OUTPUT = DOCS / "_confluence-index.md"

# ==========================================================
# LOAD MANIFEST
# ==========================================================


def load_manifest():

    if not MANIFEST.exists():
        raise FileNotFoundError(f"Cannot find {MANIFEST}")

    with open(MANIFEST, "r", encoding="utf-8") as f:
        return json.load(f)


# ==========================================================
# GROUP
# ==========================================================


def group_pages(manifest):

    groups = defaultdict(list)

    for page in manifest:

        parent = page.get("parent") or "Root"

        groups[parent].append(page)

    # sort parent

    groups = dict(sorted(groups.items()))

    # sort page in parent

    for parent in groups:

        groups[parent] = sorted(
            groups[parent],
            key=lambda x: x.get("title", "").lower()
        )

    return groups


# ==========================================================
# HEADER
# ==========================================================


def write_header(lines, manifest, groups):

    lines.append("# Confluence Knowledge Index")
    lines.append("")

    lines.append(f"Generated : {datetime.now():%Y-%m-%d %H:%M:%S}")
    lines.append(f"Total Pages : {len(manifest)}")
    lines.append(f"Groups : {len(groups)}")

    lines.append("")
    lines.append("---")
    lines.append("")


# ==========================================================
# TREE
# ==========================================================


def write_tree(lines, groups):

    lines.append("# Knowledge Tree")
    lines.append("")

    for parent, pages in groups.items():

        lines.append(f"## {parent} ({len(pages)})")
        lines.append("")

        for page in pages:

            title = page.get("title", "Untitled")
            filename = page.get("filename", "")
            breadcrumb = page.get("breadcrumb", "")
            page_id = page.get("id", "")

            lines.append(f"### {title}")

            if breadcrumb:
                lines.append(f"- Breadcrumb : `{breadcrumb}`")

            lines.append(f"- File : `{filename}`")
            lines.append(f"- Page ID : `{page_id}`")

            lines.append("")

        lines.append("")


# ==========================================================
# QUICK LOOKUP
# ==========================================================


def write_lookup(lines, manifest):

    lines.append("---")
    lines.append("")
    lines.append("# Quick Lookup (A-Z)")
    lines.append("")

    pages = sorted(
        manifest,
        key=lambda x: x.get("title", "").lower()
    )

    current_letter = ""

    for page in pages:

        title = page.get("title", "Untitled")
        filename = page.get("filename", "")

        letter = title[0].upper()

        if letter != current_letter:

            current_letter = letter

            lines.append("")
            lines.append(f"## {letter}")

        lines.append(
            f"- {title} → `{filename}`"
        )


# ==========================================================
# FOOTER
# ==========================================================


def write_footer(lines):

    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append(
        "_This file is generated automatically. Do not edit manually._"
    )


# ==========================================================
# MAIN
# ==========================================================


def main():

    manifest = load_manifest()

    print(f"Loaded {len(manifest)} pages")

    groups = group_pages(manifest)

    lines = []

    write_header(lines, manifest, groups)

    write_tree(lines, groups)

    write_lookup(lines, manifest)

    write_footer(lines)

    OUTPUT.write_text(
        "\n".join(lines),
        encoding="utf-8"
    )

    print("")
    print("=" * 60)
    print("BUILD INDEX SUCCESS")
    print("=" * 60)
    print(f"Output : {OUTPUT}")


if __name__ == "__main__":
    main()