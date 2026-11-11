import os
import base64
import urllib.parse
import urllib.request

def generar_certificado_con_arte():
    print("🌐 1. Conectando a la IA en la nube (Cero consumo de RAM)...")
    
    # Prompt para el arte holográfico
    prompt = "abstract neon cyberpunk texture, glowing circuits, dark background, gold and cyan colors, 8k resolution"
    prompt_encoded = urllib.parse.quote(prompt)
    
    # API gratuita de generación de imágenes
    url = f"https://image.pollinations.ai/prompt/{prompt_encoded}?width=512&height=512&nologo=true"
    imagen_path = "/data/data/com.termux/files/home/arte_ia.png"

    try:
        print("⏳ Descargando arte generado...")
        urllib.request.urlretrieve(url, imagen_path)
        print(f"✅ Arte descargado exitosamente en: {imagen_path}")
    except Exception as e:
        print(f"❌ Error descargando la imagen: {e}")
        return

    print("🔐 2. Convirtiendo imagen a Base64 e inyectando en el HTML...")
    with open(imagen_path, "rb") as img_file:
        img_base64 = base64.b64encode(img_file.read()).decode('utf-8')

    html_path = "apps/html-standalone/verifier-v14.html"
    if not os.path.exists(html_path):
         print("❌ No se encontró el certificado original en apps/html-standalone/")
         return

    with open(html_path, "r", encoding="utf-8") as f:
        html_content = f.read()

    # Inyección de fondo CSS
    inyeccion_css = f"""
    <style>
        body {{
            background-image: url('data:image/png;base64,{img_base64}');
            background-size: cover;
            background-position: center;
            background-blend-mode: overlay;
            background-color: #05040a;
        }}
    </style>
    </head>
    <body style="background-color: rgba(5,4,10,0.85);">
    """
    
    # Inyección del Aviso Legal antes de cerrar el body
    aviso_legal = """
    <div style="font-size: 10px; color: #58536e; text-align: center; margin-top: 30px; font-family: monospace; padding: 10px; border-top: 1px solid #333;">
        <p><strong>Aviso Legal:</strong> Este documento es una prueba técnica de integridad generada localmente mediante criptografía SHA-256.</p>
        <p>No constituye un documento notarial ni sustituye la validez legal de una firma electrónica avanzada (FIEL).</p>
        <p>Para validez legal, registre el hash en Safe Creative o en la red Blockchain Polygon.</p>
    </div>
    </body>
    """
    
    nuevo_html = html_content.replace("</head>\n<body>", inyeccion_css)
    nuevo_html = nuevo_html.replace("</body>", aviso_legal)

    output_path = "apps/html-standalone/certificado_ia.html"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(nuevo_html)

    print(f"✨ ¡Certificado con Arte IA y Aviso Legal creado exitosamente!")
    print(f"👉 Archivo listo: {output_path}")

if __name__ == "__main__":
    generar_certificado_con_arte()
