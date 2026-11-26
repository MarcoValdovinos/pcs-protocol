================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# ARKHE SENTINEL - REPORTER TELEGRAM
# IP: Marco Antonio Rojas Valdovinos
import os, requests, sys
TOKEN = os.environ.get("ARKHE_TELEGRAM_TOKEN")
CHAT_ID = os.environ.get("ARKHE_TELEGRAM_CHAT_ID")
if not TOKEN or not CHAT_ID:
    print("❌ Falta TOKEN o CHAT_ID. Haz:")
    print('export ARKHE_TELEGRAM_TOKEN="TU_TOKEN"')
    print('export ARKHE_TELEGRAM_CHAT_ID="TU_CHAT_ID"')
    sys.exit(1)
msg = "🛡️ ARKHE SENTINEL PRIME\n✅ SENTINEL PRIME encendido - Vigilando 24/7\n👤 Titular: Marco Antonio Rojas Valdovinos\n🟢 ARKHVOR-01 | SYMBI-02 | KROVOXA-03 | ARKHVOXA-04\nTodo en orden, Marco."
url = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
r = requests.post(url, json={"chat_id": CHAT_ID, "text": msg})
print(r.json())
if r.json().get("ok"):
    print("✅ Mensaje enviado a Telegram")
else:
    print("❌ Telegram no lo aceptó, revisa TOKEN y CHAT_ID")
