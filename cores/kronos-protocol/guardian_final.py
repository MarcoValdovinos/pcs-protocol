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
