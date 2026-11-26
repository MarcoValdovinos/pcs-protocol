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

# MT01JAAF SHA a4ff808e - KRONOS-TRACE-PVA-5204160405358537-MT01JAAF SC 2607146379465
# ROBOT AUDITOR - Vigila duplicados 24/7
import pathlib, time
class RobotAuditor:
    def patrullar(self):
        while True:
            for f in pathlib.Path('web').rglob('*.html'):
                html = f.read_text()
                if html.count('id="botones-pago"') > 1:
                    print(f"[AUDITOR] 🚨 Duplicado en {f} - AUTOFIX")
                    # autofix presidencial
                    fixed = html.replace('id="botones-pago"','class="botones-pago"',1)
                    f.write_text(fixed)
            time.sleep(30)

if __name__ == "__main__":
    print("[AUDITOR] Patrullando PVA-Protocolo-Vida-Autopoietica-...")
    RobotAuditor().patrullar()
