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

with open("tests/test_api.py", "r", encoding="utf-8") as f:
    content = f.read()

# Reemplazar la ruta hardcodeada por una que use $TMPDIR
content = content.replace(
    'os.environ["KRONOS_AUDIT_PATH"] = "/tmp/kronos-test-audit.jsonl"',
    'AUDIT_PATH = Path(os.environ.get("TMPDIR", "/tmp")) / "kronos-test-audit.jsonl"\nos.environ["KRONOS_AUDIT_PATH"] = str(AUDIT_PATH)'
)

# Reemplazar el unlink para que use la variable AUDIT_PATH
content = content.replace(
    'Path("/tmp/kronos-test-audit.jsonl").unlink(missing_ok=True)',
    'AUDIT_PATH.unlink(missing_ok=True)'
)

with open("tests/test_api.py", "w", encoding="utf-8") as f:
    f.write(content)

print("✅ tests/test_api.py actualizado para usar $TMPDIR.")
