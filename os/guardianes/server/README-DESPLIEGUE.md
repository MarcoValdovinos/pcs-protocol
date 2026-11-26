================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# DESPLIEGUE ARKHE SENTINEL PRIME - SIN TERMINAL, EN LA RED

## Opción 1: En la nube gratis (Render / Railway / Fly.io) - RECOMENDADO
1. Sube pcs-protocol a GitHub
2. En Render.com -> New Web Service -> Conecta tu repo
3. Build: pip install fastapi uvicorn requests
4. Start: uvicorn os.guardianes.server.app:app --host 0.0.0.0 --port $PORT
5. Listo. Te da una URL: https://arkhe-sentinel.onrender.com
6. Entra y ves tu dashboard en vivo

## Opción 2: En tu VPS / Servidor
```bash
sudo cp os/guardianes/server/arkhe-sentinel.service /etc/systemd/system/
sudo systemctl enable arkhe-sentinel
sudo systemctl start arkhe-sentinel
sudo systemctl status arkhe-sentinel
# Ya corre sin terminal, aunque cierres la terminal sigue vivo
Opción 3: Docker
docker-compose -f os/guardianes/server/docker-compose.yml up -d
# -d = detached, sin terminal
docker ps  # Ves que sigue corriendo
Reportes a tu celular
Pon tu webhook en la variable ARKHE_WEBHOOK:
Telegram: Crea un bot en @BotFather, pon el webhook
WhatsApp: Usa CallMeBot o Twilio
Discord: Webhook de tu canal privado

Cuando algo pase, Sentinel te manda:
"🛡️ ARKHE SENTINEL: Agente X encerrado - Intentó tocar infraestructura"
"🛡️ ARKHE SENTINEL: Kill Switch disparado por Marco"
