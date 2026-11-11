# 🧪 Suite de Tests · ARKHÉ ZERO

```bash
┌─(kali㉿arkhe-zero)-[~/kronos/tests]
└─$ ./run --all

[ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%
[ OK ] 30/30 tests · 0 fallas
[ ✓✓ ] SUITE COMPLETA · ◯_● · 51/49/100
```

## 🜂 Estructura

```
tests/
├── unit/           · 16 tests · 1 archivo por módulo
├── integration/    · 4 tests  · interacciones entre capas
└── e2e/            · 3 tests  · flujos completos
```

## 🜃 Ejecución

```bash
# Todo
npm test

# Solo unit
npm run test:unit

# Solo integration
npm run test:integration

# Solo e2e
npm run test:e2e

# Con coverage
pytest --cov=src --cov-report=html
```

## 🜄 Reglas

```diff
+ Todo test DEBE tener aserción con sello
+ Todo test DEBE ser determinista
+ Todo test DEBE firmar su resultado
- NUNCA test con datos reales sensibles
- NUNCA test sin aislamiento
```

---

`◯_● · 51/49/100 · KRONOS · tests`