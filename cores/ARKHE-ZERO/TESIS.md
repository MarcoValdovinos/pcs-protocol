# ARKHE-ZERO
## Sistema de verificación documental

**Autor:** Marco Antonio Rojas Valdovinos
**Fecha:** 26 de octubre de 2026
**Repo:** github.com/Marcorojas17/ARKHE-ZERO
**Deploy:** sycro-valdovinos.github.io/ARKHE-ZERO/

---

## 1. Qué es

ARKHE-ZERO es un sistema que permite probar que un documento no ha sido alterado desde que fue emitido. Cada documento recibe un sello digital único (un hash SHA-256) que se encadena al anterior. Si alguien modifica una sola letra, el sello deja de coincidir y la falsificación queda demostrada.

No requiere servidor: el verificador es un archivo HTML estático que funciona en cualquier navegador.

## 2. Qué problema resuelve

En una notaría, un despacho contable o una institución educativa, cuando un cliente disputa la autenticidad de un documento, la institución depende de archivos físicos y sistemas internos para probarlo. No hay prueba matemática.

ARKHE-ZERO añade una capa: el documento lleva un sello criptográfico que **el cliente puede verificar por sí mismo**, sin llamar a la institución.

## 3. Cómo funciona

- `chain.log`: archivo JSONL donde cada línea es un sello.
- Cada entrada contiene: `v` (versión), `seq` (posición), `sha256` (hash del documento), `prev_hash` (hash anterior), `chain_hash` (sha256 de los dos anteriores), `ts` (fecha), `id` (folio).
- `chain.log.asc`: firma GPG detached del archivo completo.
- `verify.html`: verificador estático. Acepta `?chain=<url>` y valida la integridad de cualquier cadena en formato ARKHE.
- La especificación del formato está publicada en `internet/arkhe-chain-v1.md`, bajo licencia CC0.

## 4. Lo que está implementado hoy

- Chain demo pública con 3 entradas, firmada con GPG RSA-4096 (`0B903A76...`)
- Verificador público funcional: `verify.html?chain=./chain.log`
- Especificación v1 pública, firmada, con attestation de hashes y fingerprint
- Preservación histórica del RFC 1 (1969) y de la primera página web (1991) en `internet/`
- Auditoría de seguridad preparada para Notaría 71 en `auditoria-notaria71.html`

## 5. Lo que NO está implementado (roadmap)

- Hash SHA3-512 / quantum-safe (el `chain.log` actual usa SHA-256)
- Backup en IPFS
- Múltiples idiomas en `verify.html`
- Anclaje a Ethereum
- Integración con APIs de notarías (para certificación semántica con Gemini, pendiente)

Estas son líneas futuras. No se presentan como implementadas.

## 6. Auditoría de seguridad (25-26 octubre 2026)

El sistema fue auditado internamente la noche del 25 de octubre de 2026. Se revisó la superficie de ataque de `verify.html` (parámetro `?chain=`), se validó que no hubiera XSS ejecutable, y se ajustó la sanitización de entrada. El resultado está en `auditoria-notaria71.html`.

**No se afirma** que exista un CVE específico ni que el sistema sea inmune a ataques no probados.

## 7. Modelo de negocio propuesto

- Prueba gratuita de 1 mes para notarías de Toluca (máx. 3 notarías)
- $15 MXN por documento certificado, mínimo $500 MXN/mes
- Instalación y capacitación presencial incluidas
- Sin contrato de permanencia

## 8. Próximos pasos

- Primera visita a Notaría 71 (Nicolás Bravo Sur 111, Toluca)
- Validación con casos reales
- Extensión a despachos contables (SOMA Contadores, 27 años de experiencia)

## 9. Licencia

- Especificación `ARKHE-chain-v1`: CC0 1.0
- Código del verificador: CC BY-SA 4.0
- Contenido de preservación (RFC 1, primera web): dominio público

---

*Este documento describe solo lo que está implementado y verificable hoy. Las secciones de roadmap no se presentan como funcionalidad actual.*
