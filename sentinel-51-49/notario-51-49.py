import hashlib, json, os, datetime

MANIFIESTO = "sentinel-51-49/MANIFIESTO-51-49.json"
archivos = []

for root, dirs, files in os.walk("cores/kronos-protocol/experiments_and_lore/web"):
    dirs[:] = [d for d in dirs if d not in [".git", "node_modules", "__pycache__"]]
    for f in files:
        if not f.endswith((".md", ".txt", ".html", ".json", ".py", ".js", ".css")):
            continue
        path = os.path.join(root, f)
        try:
            h = hashlib.sha256()
            with open(path, "rb") as fh:
                h.update(fh.read())
            with open(path, encoding="utf-8", errors="ignore") as fh:
                contenido = fh.read()
            tiene_sello = "CANARIO-KRONOS-51-49-39-65" in contenido
            archivos.append({
                "ruta": path,
                "sha256": h.hexdigest(),
                "tiene_sello_51_49": tiene_sello,
                "fecha": datetime.datetime.now().isoformat()
            })
        except Exception as e:
            print(f"Error {path}: {e}")

data = {
    "sistema": "KRONOS SENTINEL 51-49",
    "autor": "Marco Antonio Rojas Valdovinos",
    "correo_autor": "marco.a.rojas.v@hotmail.com",
    "correo_contacto": "contacto@kronos3hash.online",
    "folios_maestros": "...39 / ...65",
    "sello": "CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA",
    "total_archivos": len(archivos),
    "fecha_creacion": datetime.datetime.now().isoformat(),
    "archivos": archivos
}

with open(MANIFIESTO, "w", encoding="utf-8") as out:
    json.dump(data, out, indent=2, ensure_ascii=False)

print(f"NOTARIO 51-49: Manifiesto creado con {len(archivos)} archivos")
print(f"Archivo: {MANIFIESTO}")
