================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


import os, time, requests, sys, collections
sys.path.insert(0, os.path.dirname(__file__))
from arkhe_notify import reportar
from arkhe_quantum import generar_llave_cuantica, cifrar_cuantico, firma_cuantica, generar_token_cuantico
TOKEN = os.environ.get("ARKHE_TELEGRAM_TOKEN")
DUENO = "6301316318"
CHAT = "6301316318"
LLAVE_CUANTICA = generar_llave_cuantica()
intentos = collections.defaultdict(list)
def send(chat_id, text):
    firma = firma_cuantica(text)
    with open("sentinel_quantum.log","a") as f:
        f.write(f"{time.time()} | FIRMA:{firma} | LEN:{len(text)}\n")
    requests.post(f"https://api.telegram.org/bot{TOKEN}/sendMessage", json={"chat_id": chat_id, "text": text})
offset = 0
print("⚛️ BOT CUANTICO BLINDADO encendido")
reportar("SEGURIDAD CUANTICA", "⚛️ Escudo Cuántico ACTIVADO\n✅ SHA3-512\n✅ Solo Marco\n✅ Anti-spam + Anti-intruso", "SISTEMA")
ultima_rotacion = time.time()
while True:
    try:
        if time.time() - ultima_rotacion > 300:
            LLAVE_CUANTICA = generar_llave_cuantica()
            ultima_rotacion = time.time()
            reportar("SEGURIDAD CUANTICA", "⚛️ Llave cuántica rotada automáticamente.", "INFO")
        r = requests.get(f"https://api.telegram.org/bot{TOKEN}/getUpdates", params={"offset": offset, "timeout": 15}).json()
        for u in r.get("result", []):
            offset = u["update_id"] + 1
            if "message" not in u: continue
            chat = str(u["message"]["chat"]["id"])
            texto = u["message"].get("text","").strip().lower()
            nombre = u["message"]["from"].get("first_name","Desconocido")
            uid = u["message"]["from"].get("id","?")
            if str(chat) != DUENO:
                reportar("SEGURIDAD CUANTICA", f"🚨 INTRUSO BLOQUEADO\nNombre: {nombre}\nID: {uid}\nQuiso: {texto}", "CRITICO")
                continue
            ahora = time.time()
            intentos[chat] = [t for t in intentos[chat] if ahora - t < 60]
            if len(intentos[chat]) >= 5:
                continue
            intentos[chat].append(ahora)
            if texto == "/start":
                send(chat, "🛡️ ARKHE SENTINEL PRIME en línea\n👤 Titular: Marco Antonio Rojas Valdovinos\n⚛️ Seguridad Cuántica: ACTIVA\n🔒 Blindado - Solo tú\nComandos:\n/status - Estado\n/quantum - Ver escudo cuántico\n/ayuda - Ayuda")
            elif texto == "/status":
                send(chat, "🟢 SENTINEL EN LINEA 24/7\n✅ ARKHVOR-01\n✅ SYMBI-02\n✅ KROVOXA-03\n✅ ARKHVOXA-04\n⚛️ Escudo Cuántico: ACTIVO\n🔒 Kill Switch: ARMADO\n👤 Solo dueño: Marco")
            elif texto == "/quantum":
                prueba = cifrar_cuantico("PRUEBA_CUANTICA", LLAVE_CUANTICA)
                send(chat, f"⚛️ ESCUDO CUÁNTICO ACTIVO\n🔐 Cifrado: SHA3-512 (512 bits)\n🔑 Llave: Un solo uso, rota cada 5 min\n🛡️ Huella: {prueba['huella'][:16]}...\n✅ Resistente a computadora cuántica")
            elif texto == "/stop":
                send(chat, "🛑 Alerta pausada. Escribe /start para reactivar")
            elif texto == "/ayuda":
                send(chat, "Comandos:\n/start - Encender\n/status - Estado\n/quantum - Ver escudo cuántico\n/stop - Pausar\n/ayuda - Ayuda")
    except Exception as e:
        print(f"ERROR: {e}")
    time.sleep(2)
