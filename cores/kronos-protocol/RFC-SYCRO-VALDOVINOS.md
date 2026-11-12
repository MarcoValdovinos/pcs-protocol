# RFC-SYCRO-VALDOVINOS
## Post-Quantum Evidence Integrity & Asymmetric Human-AI Co-Authorship Specification

- **Status:** Draft / Request for Comments
- **Author:** Marco Antonio Rojas Valdovinos
- **Anchor:** TOLUCA-GLOBAL-e8d9eac8
- **Date:** Noviembre 2026

### 1. Abstract
Este documento especifica el Protocolo SYCRO-VALDOVINOS (también conocido como KRONOS), un estándar criptográfico de código abierto para la certificación de autoría híbrida (Humano-IA) y la conservación inmutable de evidencias digitales.

### 2. Motivation
La legislación internacional exige "aportación humana sustancial" para derechos de autor. SYCRO-VALDOVINOS resuelve esto con doble firma independiente y gobernanza 51/49 (SCDR-002).

### 3. Terminology
- **Fundador:** Entidad humana con soberanía creativa.
- **Agente:** Modelo generativo asistente.
- **Evidencia:** Estructura de datos canónica con payload y firmas.

### 4. Architecture
1. **Capa 1 (Payload):** Hash SHA3-512 del contenido canónico.
2. **Capa 2 (Registro):** Hash SHA3-512 con timestamp y hash previo.
3. **Capa 3 (Firmas):** Verificación dual obligatoria.

### 5. Domain Separation
Firma sobre: `DOMAIN_SEPARATOR || '|' || algorithm || '|' || hash_registro`
Donde `DOMAIN_SEPARATOR = KRONOS-v1:sign:hybrid`.

**Regla:** Un registro es válido si tiene ≥ 2 firmas (fundador + agente) y ambas son válidas.

### 6. Public Key Registry
Endpoint de validación offline:
`https://sycro-valdovinos.vercel.app/.well-known/sycro-keys.json`

### 7. Security
- Ed25519 (compatibilidad) + ML-DSA-65 (NIST FIPS 204)
- SHA3-512 (resistente a colisiones)
