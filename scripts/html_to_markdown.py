from pathlib import Path
from markdownify import markdownify

HTML_DIR = Path("Docs/HTML")
MD_DIR = Path("Docs/Markdown")

MD_DIR.mkdir(exist_ok=True)

files = list(HTML_DIR.glob("*.html"))

print(f"{len(files)} html files")

for index, file in enumerate(files, start=1):

    html = file.read_text(encoding="utf-8")

    md = markdownify(
        html,
        heading_style="ATX"
    )

    out = MD_DIR / f"{file.stem}.md"

    out.write_text(md, encoding="utf-8")

    print(f"[{index}/{len(files)}] {out.name}")

print("DONE")