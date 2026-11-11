import os
from pathlib import Path
from google import genai
from dotenv import load_dotenv
load_dotenv(Path.home()/"arkhe-auth"/".env")
api_key=os.getenv("GEMINI_API_KEY")
client=genai.Client(api_key=api_key)
print(f"Key: {api_key[:15]}... OK")

prompt="""Cinematic trailer poster for ARKHÉ ZERO, golden Kintsugi seal logo glowing inside Toluca night bus, rain window, Termux coding, Blade Runner style, 51% Human 49% AI, 1330 files, TOLUCA-GLOBAL"""

logo_path=Path.home()/ "arkhe-auth"/"assets"/"logo-seal.png"
if logo_path.exists():
  from google.genai import types
  resp=client.models.generate_content(model="gemini-2.0-flash", contents=[prompt, types.Part.from_bytes(data=logo_path.read_bytes(), mime_type="image/png")])
else:
  resp=client.models.generate_content(model="gemini-2.0-flash", contents=[prompt])

print(resp.text)
