================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


import os, time, hashlib, sys
sys.path.insert(0, os.path.dirname(__file__))
from arkhe_notify import reportar
BASE = os.path.expanduser("~/pcs-protocol/os")
def snapshot():
    h = {}
    for root, dirs, files in os.walk(BASE):
        if ".git" in root: continue
        for f in files:
            if f.endswith((".py",".md",".json",".sh")):
                p = os.path.join(root,f)
                try: h[p] = hashlib.sha256(open(p,'rb').read()).hexdigest()[:12]
                except: pass
    return h
print("👁️ Guardian con reporte total")
antes = snapshot()
reportar("GUARDIAN", f"Empecé a vigilarte. Estoy cuidando {len(antes)} archivos importantes. Si alguien toca, borra o crea algo, te aviso aquí mismo.", "SISTEMA")
while True:
    time.sleep(30)
    try:
        ahora = snapshot()
        for p in ahora:
            if p in antes and ahora[p] != antes[p]:
                reportar("GUARDIAN", f"🚨 Archivo MODIFICADO:\n{p}\n¿Fuiste tú, Marco?", "ALERTA")
                antes[p] = ahora[p]
            if p not in antes:
                reportar("GUARDIAN", f"🆕 Archivo NUEVO creado:\n{p}", "INFO")
                antes[p] = ahora[p]
        for p in list(antes.keys()):
            if p not in ahora:
                reportar("GUARDIAN", f"🗑️ Archivo BORRADO:\n{p}", "ALERTA")
                del antes[p]
    except Exception as e:
        reportar("GUARDIAN", f"Error vigilando: {e}", "CRITICO")
