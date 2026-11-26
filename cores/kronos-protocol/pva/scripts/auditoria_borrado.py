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

import pathlib, sys
FOLIO="KRONOS-MT01JAAF"
MAESTRO="5204160405358537"
SHA="a4ff808e"
obligatorios=[
"index.html","web/index.html","app.py","requirements.txt",
"render.yaml","cadena_sha256.txt","scripts/generar_links.py",
"web/verification.html","legal/CONTRATO_ADHESION_MP_15-10.md"
]
print(f"KRONOS AUDITORIA 100/10 - FOLIO {FOLIO} - SHA {SHA}\n")
fail=False
for f in obligatorios:
    p=pathlib.Path(f)
    if p.exists(): print(f"✓ {f}")
    else: print(f"❌ FALTA {f}"); fail=True

# render.yaml debe decir requirements.txt no requisitos.txt
try:
    ry=pathlib.Path("render.yaml").read_text()
    if "requisitos.txt" in ry:
        print("❌ render.yaml dice requisitos.txt -> debe ser requirements.txt")
        fail=True
    else: print("✓ render.yaml build OK")
except: pass

# app.py debe validar firma
try:
    ap=pathlib.Path("app.py").read_text()
    if "x-signature" in ap and "validar_firma" in ap:
        print("✓ app.py webhook firma HMAC OK")
    else:
        print("❌ app.py sin validación HMAC")
        fail=True
except: pass

# MP links con external_reference nivelado
try:
    import json
    lj=pathlib.Path("web/links_pago.json").read_text()
    data=json.loads(lj)
    for n in [1,2,3]:
        if str(n) in data or n in data:
            print(f"✓ MP Nivel {n} generado")
        else: print(f"⚠ MP Nivel {n} falta - ejecuta python scripts/generar_links.py")
except:
    print("⚠ web/links_pago.json no generado aún")

if fail:
    print(f"\n❌ AUDITORIA FALLIDA - corrige antes de push")
    sys.exit(1)
else:
    print(f"\n✅ AUDITORIA 100/10 APROBADA - LUZ PRENDIDA OFFLINE")
    print(f"FOLIO: {FOLIO} - MAESTRO: {MAESTRO} - SHA: {SHA}")
