<!--
╔══════════════════════════════════════════════════════════════════════════╗
║  ▓▒░ GUARDIAN-ACTA · ACTAS NOTARIALES · ARKHÉ ZERO ░▒▓                   ║
╚══════════════════════════════════════════════════════════════════════════╝
-->

# 📜 GUARDIAN-ACTA

```bash
┌─(kali㉿arkhe-zero)-[~/kronos/guardians]
└─$ cat GUARDIAN-ACTA.md | tail -30
```

## 🜂 Mandato

Custodiar cada acta notarial emitida por el Notario KRONOS.
Verificar que toda acta tenga:
- hash SHA3-512 del documento original
- firma híbrida Ed25519 + ML-DSA-87
- sello de tiempo RFC 3161 (QTSA)
- anclaje a Ethereum (Merkle root)
- firma humana del 51%

## 🜃 Reglas

```diff
+ Toda acta DEBE tener hash, firma, TSA y anclaje
+ Toda acta DEBE ser verificable sin permiso
+ Toda acta DEBE conservarse hasta el Fin Digno
- NUNCA emitir acta sin anclaje
- NUNCA borrar acta · solo superponer
- NUNCA firmar como humano sin humano
```

## 🜄 Verificación

```bash
┌─(kali㉿arkhe-zero)-[~/kronos]
└─$ node -e "import('./guardians/guardian-acta.js').then(m => \
     console.log(m.verificarActa({ hash: 'f03f7e2d...' })))"
```

---

`◯_● · 51/49/100 · GUARDIAN-ACTA`