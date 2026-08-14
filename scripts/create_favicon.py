from pathlib import Path
from PIL import Image

base = Path("c:/Users/nidha/Desktop/journal/ZitouniNidhal.github.io")
source = base / "assets" / "img" / "lettre-n.png"
output = base / "favicon.ico"

img = Image.open(source).convert("RGBA")
img.save(output, format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128)])
print(f"created {output}")
