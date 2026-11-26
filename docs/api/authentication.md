================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


# API de Autenticación y Validación (SYCRO)

Esta guía explica cómo los desarrolladores pueden integrar SYCRO para validar credenciales post-cuánticas (W3C VC).

## Escenario de Uso
Un abogado necesita validar un contrato firmado con ML-DSA-65. 
En lugar de leer el JSON manualmente, su sistema envía el documento a nuestra API.

## Endpoint
`POST /api/verificar-firma`

## Permisos
Actualmente, la validación de lectura es **pública** (Open API).
La emisión de nuevos certificados requiere una llave de API (API Key) vinculada a una cuenta corporativa.

## Payload (Cuerpo de la petición)
```json
{
  "xml": "<metadata>...</metadata>",
  "signatureBase64": "5dBF36oevBx2...",
  "publicKeyBase64": "oSXJUF6qvqf7..."
}
Respuesta Exitosa (200 OK)
{
  "status": "VALID",
  "message": "Firma post-cuántica ML-DSA-65 verificada correctamente",
  "metadata": {
    "title": "Contrato de Confidencialidad",
    "creator": "Marco Valdovinos",
    "folio": "CL-PQC-FINAL"
  },
  "timestamp": "2026-11-15T..."
}
Respuesta de Error (401 Unauthorized)

Si la firma ha sido alterada o el documento no coincide:
{
  "status": "INVALID",
  "error": "La firma no coincide con el XML. Documento alterado."
}
Ejemplo con cURL
curl -X POST https://sycro-valdovinos.vercel.app/api/verificar-firma \
  -H "Content-Type: application/json" \
  -d @payload.json
