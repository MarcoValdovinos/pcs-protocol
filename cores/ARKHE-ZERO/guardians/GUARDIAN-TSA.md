<!--
╔══════════════════════════════════════════════════════════════════════════╗
║  ▓▒░ GUARDIAN-TSA · SELLOS RFC 3161 · ARKHÉ ZERO ░▒▓                     ║
╚══════════════════════════════════════════════════════════════════════════╝
-->

# ⏱️ GUARDIAN-TSA

```bash
┌─(kali㉿arkhe-zero)-[~/kronos/guardians]
└─$ ./guardian-tsa --verify --all

[ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%
[ OK ] 12 sellos TSA verificados
[ OK ] QTSA Firmaprofesional · todos válidos
[ ✓✓ ] TIMESTAMPS ÍNTEGROS · ◯_● · 51/49/100
```

## 🜂 Mandato

Verificar cada sello de tiempo RFC 3161 emitido por Firmaprofesional QTSA.
Detectar tokens expirados o revocados.

## 🜃 Reglas

```diff
+ Cada sello DEBE venir de QTSA acreditada
+ Cada token DEBE verificar contra el hash original
+ Cada revocación DEBE disparar re-sellado
- NUNCA aceptar timestamp de TSA no acreditada
- NUNCA confiar en el reloj local
```

---

`◯_● · 51/49/100 · GUARDIAN-TSA`