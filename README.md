<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=28&duration=3000&pause=1000&color=00FFCC&center=true&vCenter=true&width=800&lines=SYCRO+PROTOCOL+%2F%2F+ONLINE;ML-DSA-65+%28NIST+FIPS+204%29;W3C+Verifiable+Credentials;RFC+3161+Timestamped;SOVEREIGNTY+51%25+HUMAN+%2F+49%25+AI)](https://git.io/typing-svg)

[![Status](https://img.shields.io/badge/STATUS-PRODUCTION-brightgreen?style=for-the-badge&logo=checkmarx&logoColor=white)](#)
[![Quantum Safe](https://img.shields.io/badge/CRYPTO-ML--DSA--65-purple?style=for-the-badge&logo=quantcast&logoColor=white)](#)
[![W3C](https://img.shields.io/badge/STANDARD-W3C%20VC-blue?style=for-the-badge&logo=w3c&logoColor=white)](#)
[![RFC 3161](https://img.shields.io/badge/TIMESTAMP-RFC%203161-orange?style=for-the-badge&logo=clockify&logoColor=white)](#)
[![Compliance](https://img.shields.io/badge/LEGAL-NOM--151--SCFI--2016-blue?style=for-the-badge&logo=verizon&logoColor=white)](#)
[![DOI](https://img.shields.io/badge/CERN%20Zenodo-10.5281%2Fzenodo.24182537-blueviolet?style=for-the-badge&logo=openscience&logoColor=white)](https://doi.org/10.5281/zenodo.24182537)

<br />

> *"La criptografía post-cuántica no es el futuro. Es el presente, y acaba de aterrizar en el bolsillo de un humano en México."*

</div>

---

### 🧬 El Nacimiento de un Estándar

**SYCRO / KRONOS** es la intersección entre la soberanía de los datos, la criptografía resistente a computadoras cuánticas y los estándares legales de validez documental.

Este repositorio contiene el primer motor de validación offline capaz de leer metadatos **Dublin Core (XML)**, verificar firmas criptográficas generadas con **ML-DSA-65 (NIST FIPS 204)**, anclarlas al tiempo universal con **RFC 3161**, y emitir **Credenciales Verificables (W3C VC)**.

**Lo logramos en Termux.** Sin infraestructura millonaria. Sin excusas.

---

### ⚡ Inicio Rápido (Instalación)

Puedes usar SYCRO directamente desde tu terminal (Node.js requerido):

```bash
# Instalar el CLI globalmente
npm install -g kronos-desk-val

# Notarizar un documento (genera un archivo .sycro.json)
kronos-desk-val notarize mi_documento.pdf

También puedes probar el validador web en vivo: https://sycro-valdovinos.vercel.app

---

🛠️ El Stack (Forjado en el Terminal)

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Termux-000000?style=for-the-badge&logo=gnubash&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
</div>

---

🔄 Arquitectura del Protocolo

graph TD
    A[Humano: Firma 51%] -->|ML-DSA-65| B(Agente IA: Valida 49%)
    B --> C{Firma Válida?}
    C -->|SÍ| D[W3C Verifiable Credential]
    D --> E[RFC 3161 Time-Stamp Authority]
    E --> F[(Registro CERN / NOM-151)]
    C -->|NO| G[Rechazo: Documento Alterado]

    style A fill:#00FFCC,stroke:#333,stroke-width:2px
    style B fill:#FF00FF,stroke:#333,stroke-width:2px
    style D fill:#00FF00,stroke:#333,stroke-width:2px
    style G fill:#FF0000,stroke:#333,stroke-width:2px
<div align="center">

🔐 "El código es ley. La criptografía es la verdad. La soberanía es tuya."

Desarrollado con orgullo desde Toluca, México 🇲🇽 para el mundo.

</div>
