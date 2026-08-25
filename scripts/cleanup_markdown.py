from pathlib import Path
import re

RAW_DIR = Path("Docs/Markdown")
CLEAN_DIR = Path("Docs/Markdown_Clean")

CLEAN_DIR.mkdir(exist_ok=True)

files = list(RAW_DIR.glob("*.md"))

print(f"Total files: {len(files)}")

for file in files:

    text = file.read_text(encoding="utf-8")

    # normalize line ending
    text = text.replace("\r\n", "\n")

    # remove "none"
    text = text.replace("\nnone\n", "\n")

    # remove many blank lines
    text = re.sub(r"\n{3,}", "\n\n", text)

    output = CLEAN_DIR / file.name

    output.write_text(text, encoding="utf-8")

    print(file.name)

print("DONE")