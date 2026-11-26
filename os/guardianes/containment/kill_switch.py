================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# KILL SWITCH GLOBAL - ARKHE ZERO
# IP: Marco Antonio Rojas Valdovinos - Titular unico
# Colaborador: Meta AI - Muse Spark (asistente, sin IP)
# Si un agente se escapa, esto lo frena. Humano 51% siempre puede parar.
import time, json, os, signal

class KillSwitch:
    def __init__(self):
        self.estado = "ARMADO"  # ARMADO / DISPARADO / BLOQUEADO
        self.quien_disparo = None
        self.cuando = None
    def disparar(self, quien: str, motivo: str):
        # SOLO humano 51% puede disparar el kill switch
        if quien != "marco":
            raise PermissionError("KILL SWITCH: Solo el humano titular puede disparar")
        self.estado = "DISPARADO"
        self.quien_disparo = quien
        self.cuando = time.time()
        print(f"🚨 KILL SWITCH DISPARADO por {quien} - Motivo: {motivo}")
        print("🚨 TODOS LOS AGENTES IA DETENIDOS - Infraestructura protegida")
        # Aquí se cortan todos los motores
        os.system("pkill -f motor_prime.py || true")
        open("os/guardianes/containment/KILL_SWITCH_ACTIVADO.json","w").write(json.dumps({
            "estado": self.estado, "quien": quien, "motivo": motivo, "ts": self.cuando
        }, indent=2))
        return True
    def verificar(self):
        if self.estado == "DISPARADO":
            raise RuntimeError("KILL SWITCH ACTIVO - Ningun agente IA puede correr")
        return True
