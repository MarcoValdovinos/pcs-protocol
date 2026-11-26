import hashlib, json, os, datetime
MANIFIESTO = "sentinel-51-49/MANIFIESTO-51-49.json"
LOG = "sentinel-51-49/alertas-51-49.log"
def hash_archivo(path):
    h = hashlib.sha256()
    with open(path, "rb") as f: h.update(f.read())
    return h.hexdigest()
with open(MANIFIESTO, encoding="utf-8") as f: data = json.load(f)
alertas = 0; ok = 0
for item in data["archivos"]:
    ruta = item["ruta"]
    if "sentinel-51-49/MANIFIESTO" in ruta: continue
    if not os.path.exists(ruta):
        print(f"ALERTA: {ruta} DESAPARECIO!"); alertas += 1; continue
    actual = hash_archivo(ruta)
    if actual != item["sha256"]:
        print(f"ALERTA 51-49: {ruta} MODIFICADO!"); alertas += 1
    else: ok += 1
    with open(ruta, encoding="utf-8", errors="ignore") as fh:
        if "CANARIO-KRONOS-51-49-39-65" not in fh.read():
            print(f"ALERTA: {ruta} SIN SELLO 51-49!"); alertas += 1
print(f"GUARDIAN 51-49: OK={ok} ALERTAS={alertas} - {datetime.datetime.now().isoformat()}")
