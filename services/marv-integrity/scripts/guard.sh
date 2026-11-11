#!/bin/bash
# Guardián Térmico para Termux
TEMP=$(cat /sys/class/thermal/thermal_zone*/temp | sort -nr | head -n1)
TEMP_C=$((TEMP / 1000))

echo "🌡️ Temperatura actual: $TEMP_C °C"

if [ "$TEMP_C" -gt 42 ]; then
  echo "🚨 PELIGRO: Teléfono muy caliente. Pausando procesos."
  pkill -f node
  pkill -f sd-cli
  echo "Espera 5 minutos a que se enfríe."
  exit 1
fi

echo "✅ Temperatura óptima. Puedes ejecutar la IA o Next.js."
