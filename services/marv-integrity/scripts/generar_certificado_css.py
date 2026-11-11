import os
import re

def generar_certificado_con_css():
    print("🎨 1. Generando arte generativo con CSS puro (0% RAM, 0% red)...")

    # Definimos el arte: un gradiente cónico con colores neón y un patrón de cuadrícula
    arte_css = """
    <style>
        /* Arte generativo: Fondo ciberpunk con gradientes y rejilla */
        body {
            background-color: #05040a;
            background-image: 
                radial-gradient(circle at 20% 30%, rgba(0, 242, 254, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 80% 70%, rgba(255, 0, 128, 0.15) 0%, transparent 40%),
                linear-gradient(135deg, rgba(255, 159, 28, 0.1) 0%, transparent 50%),
                repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0, 242, 254, 0.03) 40px),
                repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0, 242, 254, 0.03) 40px);
            background-size: 100% 100%, 100% 100%, 100% 100%, 40px 40px, 40px 40px;
            animation: neonPulse 8s ease-in-out infinite alternate;
        }

        @keyframes neonPulse {
            0% { opacity: 0.8; }
            100% { opacity: 1; }
        }

        /* Aviso legal */
        .aviso-legal {
            font-size: 10px; color: #58536e; text-align: center;
            margin-top: 30px; font-family: monospace;
            padding: 10px; border-top: 1px solid #333;
        }
    </style>
    </head>
    <body>
    """

    aviso_legal = """
    <div class="aviso-legal">
        <p><strong>Aviso Legal:</strong> Este documento es una prueba técnica de integridad generada localmente mediante criptografía SHA-256.</p>
        <p>No constituye un documento notarial ni sustituye la validez legal de una firma electrónica avanzada (FIEL).</p>
        <p>Para validez legal, registre el hash en Safe Creative o en la red Blockchain Polygon.</p>
    </div>
    </body>
    """

    # Leer el certificado base
    html_path = "apps/html-standalone/verifier-v14.html"
    if not os.path.exists(html_path):
        print(f"❌ No se encontró {html_path}")
        return

    with open(html_path, "r", encoding="utf-8") as f:
        html_content = f.read()

    # Inyectar el arte CSS y el aviso legal
    nuevo_html = html_content.replace("</head>", arte_css)
    nuevo_html = nuevo_html.replace("</body>", aviso_legal)

    # Guardar el resultado
    output_path = "apps/html-standalone/certificado_ia_css.html"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(nuevo_html)

    print(f"✨ ¡Certificado con Arte CSS creado exitosamente!")
    print(f"👉 Archivo listo: {output_path}")
    print("💡 Ábrelo en: http://localhost:8080/apps/html-standalone/certificado_ia_css.html")

if __name__ == "__main__":
    generar_certificado_con_css()
