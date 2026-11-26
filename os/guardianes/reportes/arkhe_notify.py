================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


import os, requests, datetime
TOKEN = os.environ.get("ARKHE_TELEGRAM_TOKEN")
CHAT = os.environ.get("ARKHE_TELEGRAM_CHAT_ID", "6301316318")
def reportar(quien, mensaje, nivel="INFO"):
    emoji = {"INFO":"ℹ️","OK":"✅","ALERTA":"🚨","CRITICO":"🔴","SISTEMA":"🛡️"}.get(nivel,"ℹ️")
    hora = datetime.datetime.now().strftime("%H:%M:%S")
    texto = f"{emoji} {quien}\n🕐 {hora}\n{mensaje}"
    try:
        requests.post(f"https://api.telegram.org/bot{TOKEN}/sendMessage", json={"chat_id": CHAT, "text": texto}, timeout=10)
        print(f"Reportado: {quien}")
    except Exception as e:
        print(f"Error reportando: {e}")
    return texto
