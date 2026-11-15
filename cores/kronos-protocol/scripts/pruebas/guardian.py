"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

import time, socket, datetime
DOMAINS = ["arkhe.agent", "kronos.agent", "arkhe.gpt", "arkhe.superintelligence", "mx-origin.agent", "ecatepec.agent", "guardian.agent"]

print(f"o_ Guardian activo - Ecatepec - {datetime.datetime.now()}")
def check(d):
    try:
        socket.gethostbyname(d)
        return "REGISTRABLE!"
    except:
        return "aun no delegado"

while True:
    now = datetime.datetime.now().strftime("%H:%M:%S")
    for d in DOMAINS:
        s = check(d)
        print(f"[{now}] {d} -> {s}")
    time.sleep(3600)
