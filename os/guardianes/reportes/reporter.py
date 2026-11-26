================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


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
