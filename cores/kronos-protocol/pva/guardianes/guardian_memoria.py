"""═══════════════════════════════════════════════════════
  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
  ◯_●                                                 ◯_●
 
  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 
  "El legado no se hereda. Se firma."
 ═══════════════════════════════════════════════════════"""

# GUARDIAN 2: MEMORIA - Evita duplicados y loops
import pathlib
class GuardianMemoria:
    def auditar(self):
        duplicados = []
        for f in pathlib.Path('web').rglob('*.html'):
            c = f.read_text()
            if c.count('id="botones-pago"') > 1:
                duplicados.append(str(f))
        return {"guardian":"MEMORIA","duplicados":duplicados,"status":"LIMPIO" if not duplicados else "CONTAMINADO"}
