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
