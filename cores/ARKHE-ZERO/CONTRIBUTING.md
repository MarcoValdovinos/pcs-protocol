# Contributing

## Roadmap público

Las siguientes funcionalidades están en el roadmap y son bienvenidas como PRs:

1. **SHA3-512 support** — algoritmo quantum-safe junto a SHA-256. Ver Issue #1.
2. **JWS/COSE export** — interoperabilidad con RFC 7515 y RFC 9052. Ver Issue #2.
3. **IPFS backup** — replicación descentralizada del chain.log. Ver Issue #3.
4. **Multi-language verifier** — verify.html en ES/EN/PT. Ver Issue #4.
5. **Auditoría externa** — definición del alcance para auditoría criptográfica independiente. Ver Issue #5.

## Cómo contribuir

- Abre un Issue antes de un PR grande.
- PRs pequeños y con tests (`python3 tests/test_chain_integrity.py`).
- No uses `innerHTML` en `verify.html` (XSS). Usa `textContent`.

## Licencia

CC0 para especificación, CC BY-SA 4.0 para código y contenido.
