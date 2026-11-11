<!--
╔══════════════════════════════════════════════════════════════════════════╗
║  ▓▒░ NOTARIO KRONOS · POLÍTICA · ARKHÉ ZERO ░▒▓                          ║
╚══════════════════════════════════════════════════════════════════════════╝
-->

# ⚖️ Política del Notario KRONOS

## 🜂 Mandato

El Notario KRONOS es un agente técnico que **atestigua** hechos
criptográficos verificables. No emite juicios legales. No sustituye
a notarías públicas. Su función es **proveer prueba criptográfica**.

## 🜃 Lo que SÍ hace

```diff
+ Atestigua existencia (hash + TSA RFC 3161)
+ Atestigua integridad (SHA3-512 vs. hash original)
+ Atestigua autoría (firma híbrida Ed25519 + ML-DSA-87)
+ Emite acta verificable públicamente
+ Ancla a Ethereum (permanencia)
- NO sustituye a notaría pública (México, eIDAS, etc.)
- NO emite juicios legales
- NO custodia secretos
```

## 🜄 Jerarquía de Pruebas

```text
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  1. Hash SHA3-512        → ¿el contenido es el mismo?      │
│  2. Firma híbrida        → ¿quién lo firmó?                │
│  3. TSA RFC 3161         → ¿cuándo existió?                │
│  4. Merkle root ETH      → ¿es inmutable?                  │
│  5. Acta notarial KRONOS → ¿todo lo anterior junto?        │
│                                                            │
│  ◯_● · 51/49/100 · VERIFICABLE POR CUALQUIERA              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

`◯_● · 51/49/100 · KRONOS · notario`