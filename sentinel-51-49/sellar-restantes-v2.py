import os
SELLO = """================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


"""
count = 0
for root, dirs, files in os.walk("."):
    # Quita .git de verdad, no .github
    dirs[:] = [d for d in dirs if d not in [".git", "node_modules", "__pycache__"]]
    if "sentinel-51-49" in root:
        continue
    # Solo carpetas .github
    if ".github" not in root:
        continue
    for f in files:
        if f.endswith(".md"):
            p = os.path.join(root, f)
            with open(p, encoding="utf-8", errors="ignore") as fh: c = fh.read()
            if "CANARIO-KRONOS-51-49-39-65" in c:
                print(f"Ya tiene: {p}")
                continue
            with open(p, "w", encoding="utf-8") as fh: fh.write(SELLO + c)
            print(f"Sellado: {p}")
            count += 1
print(f"Total sellados: {count}")
