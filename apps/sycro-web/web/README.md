<div align="center">

# 🛡️ ARKHÉ ZERO // SYCRO
### Infraestructura de Soberanía Digital y Co-Creatividad Simbiótica (PCS 51/49)

[![Quantum Safe](https://img.shields.io/badge/Cryptography-Post--Quantum%20(Kyber%2FDilithium)-00f0ff?style=for-the-badge&logo=shield)](https://sycro-valdovinos.vercel.app)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-00ff66?style=for-the-badge&logo=vercel)](https://sycro-valdovinos.vercel.app)
[![Version](https://img.shields.io/badge/Release-v1.0.2-blue?style=for-the-badge&logo=git)](https://github.com/SYCRO-VALDOVINOS/sycro-web)

### 🧰 Tech Stack & Tools
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Termux](https://img.shields.io/badge/Termux-000000?style=for-the-badge&logo=android&logoColor=white)

</div>

---

## 🎯 El Problema: El Vacío Legal de la IA
En la economía actual, las agencias, desarrolladores y creadores utilizan IA (Gemini, Claude, Llama) para generar propiedad intelectual. Sin embargo, existe una **zona gris legal**: ¿A quién le pertenece la obra? ¿Quién puede auditar la autoría? Las soluciones de consumo masivo (como Apple o WhatsApp) protegen el tráfico de datos, pero **no la trazabilidad legal ni la gobernanza criptográfica de la propiedad intelectual híbrida**.

## 💡 La Solución: ARKHÉ ZERO
SYCRO proporciona una API B2B que resuelve este vacío mediante el **Protocolo de Co-Creatividad Simbiótica (PCS)**. 
Cada activo digital (código, texto, diseño) se audita, se le asigna una autoría matemática del **51% Humano / 49% IA**, y se sella con criptografía post-cuántica.

## 🏗️ Arquitectura Técnica
* **Frontend / API:** Next.js 16 (App Router) desplegado en Vercel Edge Network.
* **Persistencia Inmutable:** Upstash Redis (Serverless KV).
* **Criptografía:** Firmas HMAC-SHA256 (Quantum-Resistant) para validación de sellos.
* **Modelo de Seguridad:** Doble capa (Verificación matemática HMAC + Verificación de estado en Base de Datos).

---



---

## 🔌 Documentación de la API (Endpoints)

### 1. `GET /api/licencia-madre`
Devuelve los metadatos de la llave raíz de SYCRO (Origen).

### 2. `POST /api/pagar` (Modo Soberano / Admin)
Emite un nuevo **Sello QV-KRONOS** para un cliente. Requiere el header `x-admin-key`.
**Body (JSON):**
```json
{
  "solicitante": "Nombre de la Agencia/Empresa",
  "maquina_id": "ID-DEL-NODO",
  "email": "contacto@empresa.com"
}
3. POST /api/validar (Doble Verificación)

Valida si un Sello QV es auténtico, no ha expirado y no ha sido revocado en la base de datos.
💳 Adquisición y Licenciamiento

Para obtener una Licencia Hija para su empresa o agencia:

1. Transferencia SPEI (México) o Criptomonedas (USDC/BTC).
2. Envíe su comprobante vía WhatsApp al titular.
3. Reciba su folio_cliente y sello_qv firmado criptográficamente.

Contacto de Ventas: WhatsApp: +52 722 586 2335 | Email: marco.a.rojas.v@hotmail.com
Demo en Vivo: https://sycro-valdovinos.vercel.app
© 2026 MARCO ANTONIO ROJAS VALDOVINOS. Todos los derechos reservados. Soberanía Digital Local-First.
