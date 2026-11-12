import { NextResponse } from 'next/server';
import { ml_dsa65 } from '@noble/post-quantum/ml-dsa';
import { XMLParser } from 'fast-xml-parser';

function base64ToBytes(base64) {
  return new Uint8Array(Buffer.from(base64, 'base64'));
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { xml, signatureBase64 } = body;

    if (!xml || !signatureBase64) {
      return NextResponse.json({ error: 'Faltan datos: xml y signatureBase64' }, { status: 400 });
    }

    const parser = new XMLParser({ ignoreAttributes: false });
    const jsonObj = parser.parse(xml);
    
    if (!jsonObj.metadata || !jsonObj.metadata['dc:title']) {
      return NextResponse.json({ error: 'XML inválido o sin metadatos Dublin Core' }, { status: 400 });
    }

    const publicKeyBase64 = process.env.SYCRO_PQC_PUBLIC_KEY;
    
    if (!publicKeyBase64) {
      return NextResponse.json({ error: 'Configura la llave pública en .env.local' }, { status: 500 });
    }

    const publicKeyBytes = base64ToBytes(publicKeyBase64);
    const signatureBytes = base64ToBytes(signatureBase64);
    const messageBytes = new TextEncoder().encode(xml);

    let isValid = false;
    
    // Aislamos la verificación para atrapar errores de longitud de firma (ej. si mandas menos de 3309 bytes)
    try {
      isValid = ml_dsa65.verify(publicKeyBytes, messageBytes, signatureBytes);
    } catch (verificationError) {
      return NextResponse.json({
        status: 'INVALID',
        error: 'Fallo en la verificación criptográfica',
        details: verificationError.message // Te dirá si la firma o llave tienen el tamaño incorrecto
      }, { status: 400 });
    }

    if (isValid) {
      return NextResponse.json({
        status: 'VALID',
        message: 'Firma post-cuántica ML-DSA-65 verificada correctamente',
        metadata: {
          title: jsonObj.metadata['dc:title'],
          creator: jsonObj.metadata['dc:creator'],
          folio: jsonObj.metadata['dcterms:identifier'] || jsonObj.metadata['kronos:folio_cliente']
        },
        timestamp: new Date().toISOString()
      }, { status: 200 });
    } else {
      return NextResponse.json({
        status: 'INVALID',
        error: 'La firma no coincide con el XML. Documento alterado o llave incorrecta.'
      }, { status: 401 });
    }

  } catch (error) {
    // Sin console.error para evitar el bug de Termux
    return NextResponse.json({ 
      error: 'Error en el servidor', 
      details: error.message 
    }, { status: 500 });
  }
}
