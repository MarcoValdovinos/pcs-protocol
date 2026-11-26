# ============================================================
# ARKHE ZERO - PROPIEDAD INTELECTUAL
# Autor: Marco Antonio Rojas Valdovinos
# Founder: ARKHE ZERO
# Bautizo: 2026-11-26 - Lerma, Estado de México
# Repo: github.com/MarcoValdovinos/pcs-protocol - os/guardianes/
# © 2026 Marco Antonio Rojas Valdovinos. Todos los derechos reservados.
# ============================================================
# GUARDIAN 1: INTEGRIDAD - No deja borrar ni alterar sin sello
import hashlib, os, json, time
class GuardianIntegridad:
    def __init__(self, root=".", snapshot_file="os/guardianes/snapshot.json"):
        self.root = root
        self.snapshot_file = snapshot_file
    def snapshot(self):
        snap = {}
        for dirpath, _, files in os.walk(self.root):
            if "node_modules" in dirpath or ".git" in dirpath or "os-data" in dirpath:
                continue
            for f in files:
                p = os.path.join(dirpath, f)
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
            if not os.path.exists(p):
                borrados.append(p)
            elif hashlib.sha256(open(p,"rb").read()).hexdigest() != h:
                alterados.append(p)
        if borrados or alterados:
            return False, f"ALERTA: Borrados={borrados} Alterados={alterados}"
        return True, f"OK: {len(snap)} archivos intactos"
