================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

import hashlib, json, datetime, pathlib

p = pathlib.Path("city/manifest.city.json")
data = p.read_bytes()
sha = hashlib.sha256(data).hexdigest()
cert = {
    "ciudad": "VALDOVINOS-ARKHE",
    "archivo": str(p),
    "sha256": sha,
    "fecha": datetime.datetime.now().isoformat(),
    "loc": "TOLUCA",
    "agente_genesis": "VALDOVINOS-01",
    "consenso": "51/49",
    "piel": "Pillow-offline-fallback",
    "estado": "CERTIFICADO-OK",
}
print(json.dumps(cert, indent=2))
pathlib.Path("city/CERTIFICADO-CIUDAD.json").write_text(json.dumps(cert, indent=2))
print("\n✓ Guardado en city/CERTIFICADO-CIUDAD.json")
