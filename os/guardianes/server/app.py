================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# ARKHE ZERO - SERVIDOR 24/7 - V3 CORREGIDO PARA TERMUX
import time, json, os, sys
sys.path.insert(0, os.path.abspath("../containment"))
sys.path.insert(0, os.path.abspath(".."))
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from kill_switch import KillSwitch
from containment import Containment
app = FastAPI(title="ARKHE SENTINEL PRIME - 24/7")
kill = KillSwitch()
jaula = Containment()
eventos = []
inicio = time.time()
@app.get("/")
def dashboard():
    return HTMLResponse(f"""<html><head><title>ARKHE SENTINEL PRIME</title><meta http-equiv="refresh" content="5"><style>body{{background:#000;color:#0f0;font-family:monospace;padding:20px}}</style></head><body><h1>🛡️ ARKHE SENTINEL PRIME - EN VIVO</h1><p>Estado: ● EN LINEA 24/7<br>Titular: Marco Antonio Rojas Valdovinos<br>Uptime: {int(time.time()-inicio)}s<br>Kill Switch: {kill.estado}<br>En jaula: {jaula.agentes_en_jaula}</p><p>✅ ARKHVOR-01 ✅ SYMBI-02 ✅ KROVOXA-03 ✅ ARKHVOXA-04</p></body></html>""")
@app.get("/health")
def health():
    return {"status": "OK", "sentinel": "EN LINEA", "kill_switch": kill.estado, "uptime": int(time.time()-inicio)}
