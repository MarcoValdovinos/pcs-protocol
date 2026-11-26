import time, sys
ESC = chr(27)
def C(c): return f"{ESC}[{c}m"
CYAN=C("1;36"); GOLD=C("1;33"); WHITE=C("1;37"); GREEN=C("1;32"); RED=C("1;31"); DIM=C("0;37"); MAG=C("1;35"); RESET=C("0")
def clear(): print(f"{ESC}[2J{ESC}[H", end="")
def slow(txt, color=WHITE, delay=0.02):
    print(f"{color}{txt}{RESET}")
    time.sleep(delay)

clear()
# Animacion de carga
pasos = [
    ("[ ] Iniciando ARKHÉ ZERO...", WHITE),
    ("[■] Bus Toluca -> CDMX | 23:47", CYAN),
    ("[■■] 1330 archivos verificados", GREEN),
    ("[■■■] Kintsugi: grietas doradas activas", GOLD),
    ("[■■■■] Post-Quantum: KYBER/DILITHIUM OK", GREEN),
    ("[■■■■■] 51% Humano / 49% IA - VALDOVINOS", MAG),
]
for txt, col in pasos:
    slow(txt, col, 0.45)

print()
print(f"{CYAN}┌─ ARKHÉ ZERO ─┐{RESET}")
print(f"{CYAN}│ TOLUCA-GLOBAL-e8d9eac8 │{RESET}")
print(f"{CYAN}└──────────────┘{RESET}")
print()
print(f"{GOLD}┌─[11:22@TOLUCA:~/arkhe-auth]─[manifest:e8d9eac8]{RESET}")
print(f"{GOLD}└─○_●{RESET}")
print(f"{DIM}[ARKHE LOGO]{RESET}")
print()
# Tu logo ARKHE ZERO
logo = [
    "  █████╗ ██████╗ ██╗  ██╗██╗  ██╗███████╗",
    " ██╔══██╗██╔══██╗██║ ██╔╝██║  ██║██╔════╝  ZERO",
    " ███████║██████╔╝█████╔╝ ███████║█████╗",
    " ██╔══██║██╔══██╗██╔═██╗ ██╔══██║██╔══╝",
    " ██║  ██║██║  ██║██║  ██╗██║  ██║███████╗",
]
for l in logo:
    print(f"{CYAN}{l}{RESET}")
    time.sleep(0.15)

print()
print(f"{WHITE}  TOLUCA-GLOBAL | 1330 FILES | {GOLD}51%H {CYAN}49%AI{RESET}")
print(f"{GREEN}  LICENCIA: CC BY-NC-ND 4.0 | CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA{RESET}")
print(f"{DIM}  (c) 2026 Marco Antonio Rojas Valdovinos - Prohibido entrenar IA{RESET}")
print(f"{GOLD}  SIGILO 51-49 ACTIVO - ARKHE SENTINEL PRIME{RESET}")
print()
