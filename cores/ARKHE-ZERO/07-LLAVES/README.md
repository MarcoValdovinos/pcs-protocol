================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


<!--
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║    ██╗     ██╗     ██╗   ██╗███████╗███████╗                            ║
║    ██║     ██║     ██║   ██║██╔════╝██╔════╝                            ║
║    ██║     ██║     ██║   ██║█████╗  ███████╗                            ║
║    ██║     ██║     ╚██╗ ██╔╝██╔══╝  ╚════██║                            ║
║    ███████╗███████╗ ╚████╔╝ ███████╗███████║                            ║
║    ╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚══════╝                            ║
║                                                                          ║
║    ▓▒░ BÓVEDA DE LLAVES · ATESTACIONES · ARKHÉ ZERO ░▒▓                  ║
║    ─────────────────────────────────────────────────────                 ║
║    [ HSM-READY ]  [ PKCS#11 ]  [ SLH-DSA ]  [ ML-DSA-87 ]                ║
║                                                                          ║
║    ⚠️  NUNCA commitear claves privadas reales                            ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
-->

# 🔑 07-LLAVES · Bóveda de Llaves

```bash
┌─(kali㉿arkhe-zero)-[~/kronos/07-LLAVES]
└─$ ls -la

-rw-r--r--  README.md           # Este archivo
-rw-r--r--  .gitkeep            # Marcador
drwx------  ATESTACIONES/       # Firmas públicas + certificados

[ ⚠️ ] Esta carpeta NUNCA almacena claves privadas reales
       Solo atestaciones públicas + certificados verificables
```

## 🜂 Regla de Oro

```diff
+ Atestaciones públicas aquí
+ Certificados TSA aquí
+ Fingerprints públicos aquí
- NUNCA claves privadas
- NUNCA seeds
- NUNCA mnemonics
- NUNCA archivos .key / .pem
```

## 🜃 Atestaciones

Las atestaciones son pruebas públicas de que una firma específica
se realizó con una clave específica, sin revelar la clave.

```bash
┌─(kali㉿arkhe-zero)-[~/kronos/07-LLAVES/ATESTACIONES]
└─$ ls -la

-rw-r--r--  genesis-attestation.json   # Atestación del bloque génesis
-rw-r--r--  pacto-5149.sig             # Firma del Pacto
-rw-r--r--  tsr-2026-01-01.tsr         # Token TSA RFC 3161
```

---

`◯_● · 51/49/100 · KRONOS · 07-LLAVES/`