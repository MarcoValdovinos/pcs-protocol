# ARKHÉ ZERO - Core System & LegalTech Protocol

Infraestructura técnica desarrollada para resolver la validación de autoría en obras co-creadas por humanos e Inteligencia Artificial. Este repositorio contiene el código auditable, la documentación técnica y la investigación doctoral asociada.

## 📂 Estructura del Repositorio
- **`/core_system`**: El código de producción. Servidor MCP (Python), Smart Contracts (Solidity) y pruebas unitarias.
- **`/academic_thesis`**: La investigación legal y el marco teórico (Autopoiesis Digital).
- **`/experiments_and_lore`**: La interfaz web interactiva (PWA) y material visual del protocolo.

## 🚀 Prueba Reproducible (Quick Start)
No necesitas API Keys para verificar la lógica del núcleo. Ejecuta la prueba determinista:

```bash
cd core_system
python3 test_reproducible.py
Salida esperada: ✅ TEST PASADO: El núcleo criptográfico es determinista y seguro.

🛠️ Stack Técnico

· Backend: Python, Model Context Protocol (MCP).
· Web3: Solidity, OpenTimestamps (BTC), IPFS.
· Infraestructura: Docker, Render, Server-Sent Events (SSE).

📜 Documentación y Auditoría

· Arquitectura del Sistema
· Tesis Doctoral
· Servidor MCP en Producción
  EOF

---
## Aclaraciones Técnicas y de Cumplimiento (v1.0.0)

### 1. Alineación con NOM-151 y LFDA
Este sistema está **diseñado para alinearse** con los principios de conservación de mensajes de datos de la NOM-151-SCFI-2016, utilizando hashes SHA-256 y sellos de tiempo. Sin embargo, la emisión de constancias con validez legal oficial requiere la intervención de un **Prestador de Servicios de Certificación (PSC)** debidamente acreditado por la Secretaría de Economía. KRONOS actúa como la herramienta técnica de generación y verificación de evidencia.

### 2. Gobernanza 51/49
La proporción 51% (humano) / 49% (IA) es una **regla de configuración algorítmica** implementada para el balanceo de pesos en la toma de decisiones del sistema. No constituye un mecanismo de medición de autoría real ni una regla jurídica general, sino un parámetro de diseño interno del protocolo.
