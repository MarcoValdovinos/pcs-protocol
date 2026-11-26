================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

#!/usr/bin/env python3
"""
Actualiza los botones del marketplace con los enlaces de Mercado Pago.
"""
import re

# Rutas
ruta_html = "web/marketplace.html"

# Enlaces de pago (generados con test_pago.py)
enlaces = {
    1: "https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=705092747-94058be9-a5fc-4d97-94ba-b46935f23cf4",
    2: "https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=705092747-6325193d-f1d4-48fc-a833-0648bc73f2ec",
    3: "https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=705092747-1176f68c-df21-49a2-85c9-6e64da7c2b86"
}

# Leer el HTML
with open(ruta_html, "r", encoding="utf-8") as f:
    html = f.read()

# Reemplazar botones por enlaces
for nivel, url in enlaces.items():
    # Patrón para encontrar el botón del nivel
    patron = rf'(<button class="action-btn" onclick="alert\(\'Solicitud de nivel {nivel}\.[^\"]*\)"><span>COMPRAR NIVEL {nivel}</span></button>)'
    reemplazo = f'<a href="{url}" target="_blank" class="action-btn" style="text-decoration:none; display:block; text-align:center;"><span>COMPRAR NIVEL {nivel}</span></a>'
    html = re.sub(patron, reemplazo, html)

# Guardar el HTML actualizado
with open(ruta_html, "w", encoding="utf-8") as f:
    f.write(html)

print("✅ Marketplace actualizado con enlaces de pago.")
