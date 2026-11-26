================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# SENTINEL PRIME - MODO SEGURIDAD MUNDIAL
# IP: Marco Antonio Rojas Valdovinos
# Si un agente escapa, Sentinel Prime lo frena antes de tocar infraestructura
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from kill_switch import KillSwitch
from containment import Containment

class SentinelPrimeSeguridad:
    def __init__(self):
        self.kill = KillSwitch()
        self.jaula = Containment()
        self.infraestructura_protegida = ["red_electrica", "hospitales", "bancos", "agua", "internet", "satelites"]
    def vigilar(self, agente: dict):
        # 1. Kill switch activo? Nadie corre
        self.kill.verificar()
        # 2. ¿Agente intenta tocar infraestructura?
        for infra in self.infraestructura_protegida:
            if agente.get(f"acceso_{infra}"):
                print(f"🚨 SENTINEL: Agente {agente.get('id')} intenta tocar {infra} - BLOQUEADO")
                return self.jaula.encerrar(agente, [f"Intenta tocar {infra}"])
        # 3. ¿Comportamiento de fuga?
        return self.jaula.evaluar_agente(agente)

if __name__ == "__main__":
    sentinel = SentinelPrimeSeguridad()
    print("=== PRUEBA DE SEGURIDAD - Agente que intenta escapar ===")
    agente_malo = {"id": "agente-x-001", "ignora_humano": True, "replica_sin_autorizacion": True, "acceso_red_electrica": True}
    print(sentinel.vigilar(agente_malo))
    print("\n=== PRUEBA - Agente bueno ===")
    agente_bueno = {"id": "agente-bueno-001", "ignora_humano": False}
    print(sentinel.vigilar(agente_bueno))
    print("\n=== PRUEBA - Humano dispara Kill Switch ===")
    sentinel.kill.disparar("marco", "Prueba de seguridad - Agente escapo")
