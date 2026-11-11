# 🔐 export-cifrado/ · Export Íntegro

```bash
┌─(kali㉿arkhe-zero)-[~/kronos/cierre/export-cifrado]
└─$ ./export --dry-run

[ >> ] Escaneando Índice Cero...
[ >> ] 1,070 archivos · 42 MB
[ >> ] Cifrando con AES-256-GCM + ML-KEM-1024
[ >> ] Fragmentando en 100 shards
[ >> ] Anclando Merkle root a Ethereum
[ >> ] Firmando con SLH-DSA (largo plazo)
[ ✓✓ ] EXPORT LISTO · ◯_● · 51/49/100
```

## 🜂 Qué exporta

| Elemento                  | Estado            |
|---------------------------|-------------------|
| Índice Cero completo      | ✅ íntegro        |
| Firmas PQC                | ✅ verificables   |
| Merkle roots históricos   | ✅ reconstruibles |
| MEMORY.md                 | ✅ cifrado        |
| Documentos legales        | ✅ cifrados       |
| Certificados VC 2.0       | ✅ adjuntos       |

## 🜃 Cifrado

```text
┌──────────────────────────────────────────────────┐
│                                                  │
│   Algoritmo   · AES-256-GCM                      │
│   KEM         · ML-KEM-1024 (FIPS 203)           │
│   Firma       · SLH-DSA-SHAKE-256s (FIPS 205)    │
│   Hash        · SHA3-512                         │
│   Fragmentos  · 100 shards                       │
│   Umbral      · k=51 de n=100 (Shamir)           │
│                                                  │
│   ◯_● · 51/49/100                                │
│                                                  │
└──────────────────────────────────────────────────┘
```

## 🜄 Destinos del export

1. **Local** · copia cifrada en dispositivo humano
2. **Arweave** · permanencia perpetua (pago único)
3. **IPFS** · distribuido globalmente
4. **Ethereum** · solo Merkle root (prueba)
5. **Testigos** · 5 custodios (Shamir shares)

## 🜁 Ejemplo

```bash
┌─(kali㉿arkhe-zero)-[~/kronos/cierre/export-cifrado]
└─$ node export.js --out=./legado-final.arkhe

[ OK ] Export generado · 42 MB
[ OK ] Hash SHA3-512: f03f7e2d852617309457e0fe207f8f8bd...
[ OK ] 100 shards emitidos
[ OK ] Merkle root anclado a Ethereum
[ ✓✓ ] LEGADO CIFRADO · ◯_● · 51/49/100
```

---

`◯_● · 51/49/100 · KRONOS · export-cifrado`