# REPORTER - Te reporta por WhatsApp / Telegram / Webhook
# IP: Marco Antonio Rojas Valdovinos
import requests, time, os, json

WEBHOOK_URL = os.getenv("ARKHE_WEBHOOK", "")  # Pon tu webhook de WhatsApp / Telegram / Discord aquí
def reportar(mensaje: str):
    print(f"[REPORTE ARKHE] {mensaje}")
    # Guarda en archivo para que el dashboard lo muestre
    with open("os/guardianes/reportes/ultimo_reporte.json","w") as f:
        json.dump({"ts": time.time(), "mensaje": mensaje}, f, indent=2)
    # Si tienes webhook, lo manda a tu celular
    if WEBHOOK_URL:
        try:
            requests.post(WEBHOOK_URL, json={"text": f"🛡️ ARKHE SENTINEL: {mensaje}"}, timeout=5)
            print("[REPORTE] Enviado a tu celular")
        except Exception as e:
            print(f"[REPORTE] No se pudo enviar a celular: {e}")
    return True

if __name__ == "__main__":
    reportar("SENTINEL PRIME encendido - Vigilando 24/7 - Marco, todo en orden")
