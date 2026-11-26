================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# 📘 Guía para Integradores

```bash
┌─(kali㉿arkhe-zero)-[~/docs/guides]
└─$ ./integrador --inicio
```

## 🜂 Cómo integrar ARKHÉ

### Opción 1 · API REST

```javascript
const r = await fetch('https://arkhe.zero/api/v1/obras/firmar', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ contenido: 'Mi obra', tipo: 'obra' }),
});
```

### Opción 2 · SDK Python

```python
from sdk.python.arkhe_client import ArkheClient

client = ArkheClient('https://arkhe.zero')
result = await client.firmar('Mi obra')
```

### Opción 3 · SDK JS

```javascript
import { ArkheClient } from './sdk/js/arkhe-client.js';

const client = new ArkheClient('https://arkhe.zero');
const result = await client.firmar('Mi obra');
```

### Opción 4 · MCP

```json
{
  "mcpServers": {
    "marco-mcp": {
      "command": "node",
      "args": ["/path/to/marco.mcp/dist/index.js"]
    }
  }
}
```

## 🜃 Consideraciones

- Rate limit: 100 req/min
- Auth: firma ML-DSA-87
- Respuesta siempre incluye `sellado: ◯_● · 51/49/100`

---

`◯_● · 51/49/100 · GUIDE · Integrador`