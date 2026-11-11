cd ~/arkhe-chain-v1 && mkdir -p .github && cat > .github/SECURITY.md <<'FIN_SEC'
# 🔒 Política de Seguridad - ARKHÉ CHAIN v1

## Versiones Soportadas
Actualmente solo la rama principal (`main` o `master`) recibe actualizaciones de seguridad.

| Versión | Soportada |
| ------- | --------- |
| v1.x.x  | ✅        |

## Reportar una Vulnerabilidad
Si descubres una vulnerabilidad de seguridad en ARKHÉ ZERO / SYCRO, por favor **NO abras un Issue público**. 
En su lugar, envía un correo a:
**marco.a.rojas.v@hotmail.com**

Nos comprometemos a responder en un plazo de 48 horas y a parchear el fallo en la próxima actualización (siguiendo el estándar SemVer). Tu reporte será tratado con total confidencialidad.

## Criptografía
Este repositorio implementa estándares de seguridad Post-Cuántica (PQC) y firmas HMAC-SHA256. Cualquier intento de romper el cifrado debe ser reportado mediante el correo de contacto.
FIN_SEC
