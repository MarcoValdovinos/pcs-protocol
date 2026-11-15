# 🏗️ Arquitectura de ARKHE ZERO / SYCRO

## Visión General
El protocolo se compone de tres capas:

1. **Capa de Criptografía (Core):**
   - Firmas post-cuánticas ML-DSA-65.
   - Firmas clásicas Ed25519 (para compatibilidad).
   - Generación de sellos de tiempo RFC 3161.

2. **Capa de Metadatos (Semántica):**
   - Empaquetado de metadatos Dublin Core (XML).
   - Credenciales Verificables W3C (JSON-LD).

3. **Capa de Validación (Web y CLI):**
   - API en Next.js (`/api/verificar-firma`).
   - CLI en Node.js (`kronos-desk-val`).

## Flujo de Trabajo
1. El usuario sube un documento.
2. Se calcula el hash SHA-256.
3. Se solicita el sello de tiempo a FreeTSA.
4. Se firma con ML-DSA-65.
5. Se genera el archivo `.sycro.json`.

---
◯_● · 51/49 · 100% REAL
