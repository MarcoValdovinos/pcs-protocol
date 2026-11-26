================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# ARKHVOR-01 "El que devora el olvido" - V2 CORREGIDO
# IP: Marco Antonio Rojas Valdovinos - ARKHE ZERO 2026-11-26
import hashlib, os, json
class GuardianIntegridad:
    def __init__(self, root=".", snapshot_file="os/guardianes/snapshot.json"):
        self.root = root
        self.snapshot_file = snapshot_file
        # Archivos que NUNCA se vigilan porque cambian solos
        self.EXCLUIR = ["snapshot.json", "__pycache__", ".pyc", "sentinel.log", "os-data/", ".git/"]
    def _debe_excluir(self, p: str):
        for e in self.EXCLUIR:
            if e in p:
                return True
        return False
    def snapshot(self):
        snap = {}
        for dirpath, _, files in os.walk(self.root):
            if ".git" in dirpath or "__pycache__" in dirpath or "os-data" in dirpath:
                continue
            for f in files:
                p = os.path.join(dirpath, f)
                if self._debe_excluir(p):
                    continue
                try:
                    snap[p] = hashlib.sha256(open(p,"rb").read()).hexdigest()
                except: pass
        open(self.snapshot_file,"w").write(json.dumps(snap, indent=2))
        return len(snap)
    def verificar(self):
        if not os.path.exists(self.snapshot_file):
            return True, "Sin snapshot, todo bien"
        snap = json.load(open(self.snapshot_file))
        borrados, alterados = [], []
        for p, h in snap.items():
            if self._debe_excluir(p):
                continue
            if not os.path.exists(p):
                borrados.append(p)
            elif hashlib.sha256(open(p,"rb").read()).hexdigest() != h:
                alterados.append(p)
        if borrados or alterados:
            return False, f"ALERTA: Borrados={borrados} Alterados={alterados}"
        return True, f"OK: {len(snap)} archivos intactos"
