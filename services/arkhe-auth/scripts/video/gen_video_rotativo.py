import os
from google import genai
from pathlib import Path
from dotenv import load_dotenv

load_dotenv(Path.home() / "arkhe-auth" / ".env")

keys_str = os.getenv("GEMINI_API_KEYS") or os.getenv("GEMINI_API_KEY") or ""
keys = [k.strip() for k in keys_str.split(",") if k.strip()]

prompt = "Cinematic trailer ARKHE ZERO: Toluca bus at night, developer building 1330 files on Android Termux, Kintsugi gold cracks, post-quantum symbols"

for i, key in enumerate(keys):
    print(f"\n--- Probando key {i+1}/{len(keys)}: {key[:10]}... ---")
    os.environ["GEMINI_API_KEY"] = key
    try:
        client = genai.Client()
        # Lista para verificar que sirve
        models = list(client.models.list())
        print(f"OK Lista {len(models)} modelos")

        resp = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[f"Di 'ARKHE OK con key {i+1}'"]
        )
        print(f"Respuesta: {resp.text}")
        
        # Si llega aquí, genera imagen
        print("Generando imagen trailer...")
        img_resp = client.models.generate_content(
            model="gemini-2.5-flash-image",
            contents=[prompt]
        )
        # Guarda lo que venga
        print("¡Generado con key", i+1, "!")
        break

    except Exception as e:
        print(f"Falla key {i+1}: {e}")
        continue
else:
    print("Todas las keys fallaron")
