import os
import time
from google import genai
from google.genai import types

# 1. Configurar API Key
API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    print("❌ Error: Falta la variable GEMINI_API_KEY")
    print("   Ejecuta: export GEMINI_API_KEY='tu_api_key'")
    exit(1)

client = genai.Client(api_key=API_KEY)

# 2. Definir el prompt y el modelo
prompt = "A cybernetic shield blocking a red laser beam in a dark server room, cinematic lighting, 4k"
modelo = "gemini-omni-1.1-flash"

print(f"🎬 Generando video con el modelo: {modelo}")
print(f"   Prompt: {prompt}")
print("   (Esto puede tardar unos minutos...)\n")

# 3. Llamar a la API de interacciones para generar video
try:
    # La API de video de Gemini usa el método interactions.create
    response = client.interactions.create(
        model=modelo,
        prompt=prompt,
        video_config=types.VideoConfig(
            resolution="720p",
            aspect_ratio="16:9",
            duration=5 # segundos
        )
    )
    
    # 4. Esperar a que el video esté listo (polling)
    print("⏳ Esperando a que el video se procese...")
    while True:
        status = client.interactions.get(response.id)
        if status.state == "COMPLETED":
            print("✅ ¡Video generado!")
            # Guardar el archivo
            video_bytes = client.interactions.download(status.output.video.uri)
            with open("arkhe_shield.mp4", "wb") as f:
                f.write(video_bytes)
            print("💾 Guardado en: arkhe_shield.mp4")
            break
        elif status.state == "FAILED":
            print(f"❌ Error en la generación: {status.error}")
            break
        else:
            print("   ... aún procesando ...")
            time.sleep(10)

except Exception as e:
    print(f"❌ Error al llamar a la API: {e}")
    print("\nPosibles causas:")
    print("- Cuota diaria agotada (Rate Limit).")
    print("- Modelo no disponible en tu región.")
    print("- API Key inválida.")
