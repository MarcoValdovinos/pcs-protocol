"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

from pathlib import Path
from PIL import Image
import shutil, glob

BASE = Path.home() / "arkhe-auth" / "assets"
BASE.mkdir(exist_ok=True)

for p in glob.glob("/mnt/data/*.webp"):
    try:
        dst = BASE / Path(p).name
        shutil.copy(p, dst)
        print(f"Copiado {p}")
    except Exception as e:
        print(e)

for webp in BASE.glob("*.webp"):
    jpg = webp.with_suffix(".jpg")
    try:
        Image.open(webp).convert("RGB").save(jpg, "JPEG", quality=95)
        print(f"OK {jpg.name}")
    except Exception as e:
        print(f"Fail {webp}: {e}")

print("Listo:", BASE)
