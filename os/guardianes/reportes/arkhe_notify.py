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
