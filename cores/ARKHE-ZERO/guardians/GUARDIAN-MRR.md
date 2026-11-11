<!--
╔══════════════════════════════════════════════════════════════════════════╗
║  ▓▒░ GUARDIAN-MRR · MERKLE ROOTS · ARKHÉ ZERO ░▒▓                        ║
╚══════════════════════════════════════════════════════════════════════════╝
-->

# 🌳 GUARDIAN-MRR

```bash
┌─(kali㉿arkhe-zero)-[~/kronos/guardians]
└─$ node -e "import('./guardian-mrr.js').then(m => \
     console.log(m.meta))"
```

## 🜂 Mandato

Reconstruir y verificar cada Merkle root anclado a Ethereum.
Garantizar que ningún root ha sido alterado post-anclaje.

## 🜃 Reglas

```diff
+ Cada Merkle root DEBE poder reconstruirse desde hojas
+ Cada anclaje DEBE coincidir con la tx on-chain
+ Cada verificación DEBE dejar log criptográfico
- NUNCA anclar sin antes verificar hojas
- NUNCA aceptar root sin proof
```

## 🜄 Regla de oro

```text
El árbol de Merkle es el esqueleto del legado.
Si una hoja cambia, el root grita.
```

---

`◯_● · 51/49/100 · GUARDIAN-MRR`