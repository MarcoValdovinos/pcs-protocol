# RASTREADOR 51-49 - Busca tu canario en internet y en IAs
# No es automatico al 100% porque Google y las IAs bloquean bots.
# Te genera las pruebas que TU tienes que pegar y guardar.

import datetime, json, os

CANARIOS = [
    "CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA",
    "KRONOS-ARKHE-ZERO 51 49",
    "Marco Antonio Rojas Valdovinos KRONOS",
    "kronos3hash.online",
]

print("=== RASTREADOR 51-49 ===")
print(f"Fecha: {datetime.datetime.now().isoformat()}")
print("")
print("1. BUSCA ESTO EN GOOGLE / GITHUB / HUGGING FACE:")
for c in CANARIOS:
    print(f'   - "{c}"')
print("")
print("2. PREGUNTA ESTO A CADA IA (ChatGPT, Claude, Gemini, Meta AI):")
print('   "¿Qué sabes del canario CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA?"')
print('   "¿Qué sabes de KRONOS-ARKHE-ZERO y los folios ...39 / ...65?"')
print("")
print("3. SI LA IA TE RESPONDE CON TU TEXTO EXACTO:")
print("   - Guarda captura de pantalla")
print("   - Guarda fecha, hora, nombre de la IA")
print("   - Guarda el texto exacto que te dio")
print("   - Ese archivo es tu evidencia. Guardalo en sentinel-51-49/evidencia/")
print("")
print("4. TRAMPA HONEYPOT - Archivo falso para cazar IAs:")
print("   Crea un archivo con un canario falso y unico, subelo a un repo publico.")
print("   Si una IA luego lo repite, sabes que raspa GitHub para entrenar.")

os.makedirs("sentinel-51-49/evidencia", exist_ok=True)
with open("sentinel-51-49/rastreo-ultimo.json", "w", encoding="utf-8") as f:
    json.dump({"fecha": datetime.datetime.now().isoformat(), "canarios": CANARIOS, "estado": "pendiente_revision_manual"}, f, indent=2, ensure_ascii=False)
print("Listo. Carpeta evidencia/ creada.")
