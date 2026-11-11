#!/data/data/com.termux/files/usr/bin/bash
# city_watchdog.sh · Guardia de la Ciudad ARKHÉ
cd ~/arkhe-city

# 1. El Watchtower vigila la red
python3 districts/watchtower/agent_net.py https://example.com https://www.iana.org https://www.ietf.org >> city_log.txt 2>&1

# 2. El Alcalde actualiza la memoria y firma el Acta
python3 mayor.py >> city_log.txt 2>&1

# 3. Se ancla en Bitcoin
ots stamp city_acta.json >> city_log.txt 2>&1

# 4. Se registra en Git (opcional, pero recomendado para histórico)
git add . >> city_log.txt 2>&1
git commit -m "◯_● Actualización automática de la Ciudad: $(date -u +%Y-%m-%dT%H:%M:%SZ)" >> city_log.txt 2>&1
