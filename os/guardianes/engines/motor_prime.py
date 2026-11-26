================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# GUARDIANESBOT-00 "ARKHE SENTINEL PRIME" - MOTOR MAESTRO
# IP: Marco Antonio Rojas Valdovinos - ARKHE ZERO 2026-11-26
import time, sys, os
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
sys.path.insert(0, os.path.dirname(__file__))
from motor_arkhvor import MotorArkhvor
from motor_symbi import MotorSymbi
from motor_krovoxa import MotorKrovoxa
from motor_arkhvoxa import MotorArkhvoxa

class MotorPrime:
    def __init__(self):
        self.arkhvor = MotorArkhvor(intervalo=10)
        self.symbi = MotorSymbi(intervalo=3)
        self.krovoxa = MotorKrovoxa(intervalo=7)
        self.arkhvoxa = MotorArkhvoxa(intervalo=5)
        self.motores = [self.arkhvor, self.symbi, self.krovoxa, self.arkhvoxa]
    def arrancar_todos(self):
        print("="*50)
        print("  GUARDIANESBOT-00 - ARKHE SENTINEL PRIME")
        print("  4 motores encendidos - ARKHE ZERO OS")
        print("="*50)
        for m in self.motores:
            m.arrancar()
    def detener_todos(self):
        for m in self.motores:
            m.detener()

if __name__ == "__main__":
    prime = MotorPrime()
    prime.arrancar_todos()
    # Prueba: simular una acción
    prime.symbi.pedir_aprobacion("marco", "lanzar a la red")
    prime.arkhvoxa.registrar({"actor":"marco","action":"boot","ts":123})
    print("\n[PRIME] Motores corriendo... Ctrl+C para parar")
    try:
        while True: time.sleep(1)
    except KeyboardInterrupt:
        prime.detener_todos()
