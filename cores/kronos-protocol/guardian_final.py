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

import time, socket, datetime
DOMAINS = ['arkhe.agent','kronos.agent','arkhe.gpt','ecatepec.agent','kronos-protocol.agent']
while True:
    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    for d in DOMAINS:
        try:
            socket.gethostbyname(d)
            status='!!! REGISTRABLE AHORA !!!'
        except:
            status='aun no delegado - ICANN pendiente'
        print(f'[{now}] {d} -> {status}', flush=True)
    with open('arkhe_domains.log','a') as f:
        f.write(f'{now} check OK\n')
    time.sleep(3600)
