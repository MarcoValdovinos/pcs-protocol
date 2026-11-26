import time, requests, sys, os
sys.path.insert(0, os.path.dirname(__file__))
from arkhe_notify import reportar
print("🖥️ Vigilante de servidor encendido")
reportar("SERVIDOR", "Empecé a vigilar el servidor. Si se cae, te aviso en menos de 1 minuto.", "SISTEMA")
fallos = 0
while True:
    time.sleep(60)
    try:
        r = requests.get("http://127.0.0.1:8000/", timeout=5)
        if r.status_code == 200 and fallos > 0:
            reportar("SERVIDOR", "✅ Servidor volvió a estar en línea. Ya está todo bien.", "OK")
            fallos = 0
        elif r.status_code == 200:
            fallos = 0
        else:
            fallos += 1
            reportar("SERVIDOR", f"⚠️ Servidor respondió con error {r.status_code}", "ALERTA")
    except:
        fallos += 1
        if fallos == 1:
            reportar("SERVIDOR", "🔴 ¡SERVIDOR CAÍDO! No responde. Revisa Termux.", "CRITICO")
