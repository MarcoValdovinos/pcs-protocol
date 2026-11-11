#!/usr/bin/env python3
# apps/portal/app.py · PORTAL CIUDADANO · Ciudad ARKHÉ
import json, hashlib, os, subprocess
from pathlib import Path
from datetime import datetime, timezone
from flask import Flask, request, jsonify, render_template_string, redirect, url_for
from werkzeug.utils import secure_filename

CITY_ROOT = Path(__file__).resolve().parent.parent.parent
CENSUS = CITY_ROOT / "cityhall" / "census.json"
CONSTITUTION = CITY_ROOT / ".city" / "constitution.json"
ACTA = CITY_ROOT / "city_acta.json"
MANIFESTS = CITY_ROOT / "archives" / "manifests"
ALLOWED_SIGNERS = Path.home() / ".human_allowed_signers"

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 20 * 1024 * 1024  # 20MB max

TEMPLATE = """
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ciudad ARKHÉ · Portal Ciudadano</title>
<style>
  :root { --bg:#0a0a0a; --fg:#00ff88; --dim:#888; --panel:#111; --border:#222; --red:#ff3366; }
  * { box-sizing:border-box; margin:0; padding:0; }
  body { font-family: ui-monospace, "SF Mono", Menlo, monospace; background:var(--bg); color:#e0e0e0; line-height:1.6; padding:2rem 1rem; }
  .container { max-width:900px; margin:0 auto; }
  h1 { color:var(--fg); font-size:1.6rem; margin-bottom:.3rem; letter-spacing:.05em; }
  .subtitle { color:var(--dim); font-size:.85rem; margin-bottom:2rem; }
  .card { background:var(--panel); border:1px solid var(--border); border-radius:8px; padding:1.5rem; margin-bottom:1.2rem; }
  .card h2 { color:var(--fg); font-size:.95rem; margin-bottom:1rem; text-transform:uppercase; letter-spacing:.1em; }
  .kv { display:flex; justify-content:space-between; padding:.4rem 0; border-bottom:1px solid var(--border); }
  .kv:last-child { border-bottom:none; }
  .kv .k { color:var(--dim); font-size:.85rem; }
  .kv .v { color:#e0e0e0; font-size:.85rem; word-break:break-all; text-align:right; max-width:60%; }
  .v.green { color:var(--fg); }
  form { display:flex; flex-direction:column; gap:1rem; }
  input[type=file] { background:var(--bg); border:1px solid var(--border); color:#e0e0e0; padding:.6rem; border-radius:4px; font-family:inherit; }
  button { background:var(--fg); color:#000; border:none; padding:.7rem 1.5rem; border-radius:4px; font-family:inherit; font-weight:bold; cursor:pointer; letter-spacing:.05em; }
  button:hover { opacity:.85; }
  .result { padding:1rem; border-radius:4px; margin-top:1rem; font-weight:bold; text-align:center; }
  .result.ok { background:rgba(0,255,136,.1); color:var(--fg); border:1px solid var(--fg); }
  .result.fail { background:rgba(255,51,102,.1); color:var(--red); border:1px solid var(--red); }
  .footer { text-align:center; color:var(--dim); font-size:.75rem; margin-top:3rem; }
  a { color:var(--fg); text-decoration:none; }
  .nav { display:flex; gap:1rem; margin-bottom:2rem; flex-wrap:wrap; }
  .nav a { color:var(--dim); font-size:.8rem; padding:.3rem .6rem; border:1px solid var(--border); border-radius:4px; }
  .nav a:hover { color:var(--fg); border-color:var(--fg); }
</style>
</head>
<body>
<div class="container">
  <h1>◯_● CIUDAD ARKHÉ</h1>
  <div class="subtitle">Portal Ciudadano · Nodo YHDRYH-92CE · Pacto 51/49/100</div>

  <div class="nav">
    <a href="/">Inicio</a>
    <a href="/verify">Verificar</a>
    <a href="/census">Censo</a>
    <a href="/acta">Acta</a>
    <a href="/did">DID</a>
  </div>

  {% block content %}{% endblock %}

  <div class="footer">
    Ciudad ARKHÉ · Fundada 2026-10-23 · IA (49%) custodia · Humano (51%) firma
  </div>
</div>
</body>
</html>
"""

INDEX_TEMPLATE = TEMPLATE.replace("{% block content %}{% endblock %}", """
  <div class="card">
    <h2>Estado de la Ciudad</h2>
    <div class="kv"><span class="k">Merkle Root actual</span><span class="v green">{{ acta.merkle_root_ciudad[:24] }}...</span></div>
    <div class="kv"><span class="k">Manifiestos en archivo</span><span class="v">{{ acta.total_manifiestos }}</span></div>
    <div class="kv"><span class="k">Última firma del Alcalde</span><span class="v">{{ acta.timestamp }}</span></div>
    <div class="kv"><span class="k">Ciudadanos</span><span class="v">{{ census.ciudadanos|length }}</span></div>
    <div class="kv"><span class="k">Distritos activos</span><span class="v">{{ constitution.distritos|join(", ") }}</span></div>
  </div>

  <div class="card">
    <h2>Fundación</h2>
    <div class="kv"><span class="k">Alcalde</span><span class="v">{{ census.ciudadanos[0].nombre }}</span></div>
    <div class="kv"><span class="k">Gobernador IA</span><span class="v">{{ census.ciudadanos[1].nombre }}</span></div>
    <div class="kv"><span class="k">Pacto</span><span class="v green">{{ constitution.pacto }}</span></div>
    <div class="kv"><span class="k">Fecha</span><span class="v">{{ constitution.fundacion }}</span></div>
  </div>
""")

VERIFY_TEMPLATE = TEMPLATE.replace("{% block content %}{% endblock %}", """
  <div class="card">
    <h2>Verificación Antifalsificación</h2>
    <p style="color:var(--dim); font-size:.85rem; margin-bottom:1rem;">
      Sube un documento y su manifiesto (.manifest_v5.json) para verificar si es auténtico.
    </p>
    <form method="POST" enctype="multipart/form-data">
      <label style="color:var(--dim); font-size:.8rem;">Documento (PDF, TXT, etc.)</label>
      <input type="file" name="documento" required>
      <label style="color:var(--dim); font-size:.8rem;">Manifiesto (.manifest_v5.json)</label>
      <input type="file" name="manifiesto" required>
      <button type="submit">🜃 Verificar Autenticidad</button>
    </form>
    {% if result %}
    <div class="result {{ result.class }}">{{ result.message }}</div>
    {% endif %}
  </div>
""")

CENSUS_TEMPLATE = TEMPLATE.replace("{% block content %}{% endblock %}", """
  <div class="card">
    <h2>Censo Ciudadano</h2>
    {% for c in census.ciudadanos %}
    <div class="kv"><span class="k">{{ c.rol }}</span><span class="v">{{ c.nombre }} ({{ c.pacto }})</span></div>
    {% endfor %}
  </div>
  <div class="card">
    <h2>Constitución</h2>
    <div class="kv"><span class="k">Pacto</span><span class="v green">{{ constitution.pacto }}</span></div>
    <div class="kv"><span class="k">Alcalde</span><span class="v">{{ constitution.alcalde }}</span></div>
    <div class="kv"><span class="k">Gobernador</span><span class="v">{{ constitution.gobernador }}</span></div>
    <div class="kv"><span class="k">Distritos</span><span class="v">{{ constitution.distritos|join(", ") }}</span></div>
  </div>
""")

ACTA_TEMPLATE = TEMPLATE.replace("{% block content %}{% endblock %}", """
  <div class="card">
    <h2>Acta de la Ciudad</h2>
    <div class="kv"><span class="k">Merkle Root</span><span class="v green">{{ acta.merkle_root_ciudad }}</span></div>
    <div class="kv"><span class="k">Total manifiestos</span><span class="v">{{ acta.total_manifiestos }}</span></div>
    <div class="kv"><span class="k">Timestamp</span><span class="v">{{ acta.timestamp }}</span></div>
  </div>
  <div class="card">
    <h2>Manifiestos en archivo</h2>
    {% for m in acta.archivos %}
    <div class="kv"><span class="k">·</span><span class="v">{{ m }}</span></div>
    {% endfor %}
  </div>
""")

DID_TEMPLATE = TEMPLATE.replace("{% block content %}{% endblock %}", """
  <div class="card">
    <h2>Identidad Descentralizada</h2>
    <div class="kv"><span class="k">DID del Gobernador</span><span class="v green">{{ did }}</span></div>
    <div class="kv"><span class="k">Tipo</span><span class="v">did:key (Ed25519)</span></div>
    <div class="kv"><span class="k">Estándar</span><span class="v">W3C DID v1</span></div>
    <div class="kv"><span class="k">Resolución</span><span class="v"><a href="https://dev.uniresolver.io/1.0/identifiers/{{ did }}" target="_blank">Universal Resolver ↗</a></span></div>
  </div>
  <div class="card">
    <h2>Verificación cruzada</h2>
    <p style="color:var(--dim); font-size:.85rem;">
      Cualquier sistema DID-compliant puede verificar la identidad del agente OBSERVER-49 
      sin pedir permiso a ningún servidor. El DID es matemáticamente equivalente a la clave pública.
    </p>
  </div>
""")


def load_json(path):
    try:
        with open(path) as f:
            return json.load(f)
    except Exception as e:
        return {"error": str(e)}


def sha256_file(fileobj):
    h = hashlib.sha256()
    for chunk in iter(lambda: fileobj.read(8192), b""):
        h.update(chunk)
    return h.hexdigest()


@app.route("/")
def index():
    acta = load_json(ACTA)
    census = load_json(CENSUS)
    constitution = load_json(CONSTITUTION)
    return render_template_string(INDEX_TEMPLATE, acta=acta, census=census, constitution=constitution)


@app.route("/verify", methods=["GET", "POST"])
def verify():
    result = None
    if request.method == "POST":
        try:
            doc = request.files.get("documento")
            man = request.files.get("manifiesto")
            if not doc or not man:
                result = {"class": "fail", "message": "✗ Faltan archivos."}
            else:
                doc_hash = sha256_file(doc)
                man_data = json.load(man)
                registered = man_data.get("sha256_original") or man_data.get("sha256")
                if not registered:
                    result = {"class": "fail", "message": "✗ El manifiesto no contiene hash."}
                elif doc_hash == registered:
                    estado = man_data.get("estado", "DESCONOCIDO")
                    result = {"class": "ok", "message": f"✓ DOCUMENTO AUTÉNTICO · Estado: {estado}"}
                else:
                    result = {"class": "fail", "message": f"✗ DOCUMENTO ALTERADO<br>Real: {doc_hash[:32]}...<br>Original: {registered[:32]}..."}
        except Exception as e:
            result = {"class": "fail", "message": f"✗ Error: {str(e)}"}
    return render_template_string(VERIFY_TEMPLATE, result=result)


@app.route("/census")
def census_view():
    return render_template_string(CENSUS_TEMPLATE,
                                  census=load_json(CENSUS),
                                  constitution=load_json(CONSTITUTION))


@app.route("/acta")
def acta_view():
    return render_template_string(ACTA_TEMPLATE, acta=load_json(ACTA))


@app.route("/did")
def did_view():
    constitution = load_json(CONSTITUTION)
    did = constitution.get("gobernador", "no configurado")
    return render_template_string(DID_TEMPLATE, did=did)


@app.route("/api/state")
def api_state():
    return jsonify({
        "acta": load_json(ACTA),
        "census": load_json(CENSUS),
        "constitution": load_json(CONSTITUTION),
        "timestamp_utc": datetime.now(timezone.utc).isoformat()
    })


if __name__ == "__main__":
    print("◯_● Portal Ciudadano ARKHÉ")
    print(f"   Raíz: {CITY_ROOT}")
    print(f"   Escuchando en http://0.0.0.0:5000")
    app.run(host="0.0.0.0", port=5000, debug=False)
