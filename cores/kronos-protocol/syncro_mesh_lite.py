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

import os, json, socket, time, http.server, socketserver, threading
from datetime import datetime
from pathlib import Path
MI_ID="ecatepec-01-1122"
ROOT=Path.home()
DB=ROOT / f"memoria_{MI_ID}.json"
PORT=8001
def log(m): print(f"[{datetime.now().strftime('%H:%M:%S')}] {m}", flush=True)
def servidor():
    os.chdir(ROOT)
    socketserver.TCPServer.allow_reuse_address=True
    with socketserver.TCPServer(("0.0.0.0", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
        log(f"●_○ MESH ACTIVO 11:22 http://0.0.0.0:{PORT} - MANIFEST e8d9eac8")
        httpd.serve_forever()
threading.Thread(target=servidor, daemon=True).start()
if not DB.exists():
    json.dump({"nodo":MI_ID,"genesis":"SYNCRO VALDOVINOS","manifest":"e8d9eac8"}, open(DB,"w"))
while True:
    data={"nodo":MI_ID,"hora":str(datetime.now()),"decision":"MOLE 120","genesis":"SYNCRO VALDOVINOS","manifest":"e8d9eac8"}
    open(DB,"w").write(json.dumps(data))
    log(f"VIVO {data['decision']} - {DB.name}")
    time.sleep(30)
