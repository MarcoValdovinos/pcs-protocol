# 🌀 YEJIDÁ

```bash
┌─(kali㉿arkhe-zero)-[~/projects/yejida]
└─$ ./yejida --info

╔══════════════════════════════════════════════════════════╗
║  PROYECTO  · YEJIDÁ                                      ║
║  ESTADO    · ✓ OPERATIVO                                 ║
║  ROL       · Mandalas · Kabbalah 2036 · 11 dimensiones   ║
╚══════════════════════════════════════════════════════════╝
```

## 🜂 Qué es

Generador de mandalas basado en Kabbalah 2036. Cada mandala
representa la convergencia de las **11 dimensiones del legado**.

## 🜃 Estructura de un mandala

```text
        ╭─────────────╮
      ╱   ◯   ●   ◯   ╲
     │  11 × 1 = ∞    │
      ╲  KINTSUGI    ╱
        ╰──────┬──────╯
               │
         ┌─────▼─────┐
         │  MARCO    │
         │  ANTONIO  │
         │  ROJAS V. │
         └───────────┘
```

## 🜄 Uso

```javascript
import { Yejida } from './projects/yejida/core.js';

const mandala = new Yejida({ dimensiones: 11, centro: 'Marco' });
mandala.generar();  // → SVG + hash SHA3-512
```

---

`◯_● · 51/49/100 · KRONOS · yejida`