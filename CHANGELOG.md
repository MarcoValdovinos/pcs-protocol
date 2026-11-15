# 📜 Historial de Cambios (Changelog)

Todos los cambios notables en este proyecto serán documentados en este archivo.
El formato está basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/).

## [1.1.0] - 2026-11-15
### Añadido
- Soporte para Credenciales Verificables W3C (W3C VC).
- Integración de sellos de tiempo RFC 3161 vía FreeTSA.
- Soporte para firmas dobles Ed25519 + ML-DSA-65.
- Archivos corporativos: LICENSE (Apache 2.0), SECURITY.md, GOVERNANCE.md, CITATION.cff.
- Persistencia de llaves Ed25519 en IndexedDB para agentes de IA.

### Corregido
- Vulnerabilidad crítica en el `commit()` de agentes (ahora requiere firma humana).
- Bug de sintaxis en imports de Python tras inyección del sello 51/49.
- Fuga de llave privada en el historial de Git (filter-branch aplicado).

## [1.0.0] - 2026-11-01
### Añadido
- Lanzamiento inicial del protocolo SYCRO.
- Publicación del Whitepaper en el CERN (Zenodo).
- Publicación del paquete en NPM.
