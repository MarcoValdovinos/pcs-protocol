import { NextResponse } from 'next/server';
import { ml_dsa65 } from '@noble/post-quantum/ml-dsa';

function base64ToBytes(base64) {
  return new Uint8Array(Buffer.from(base64, 'base64'));
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    if (!body.type || !body.type.includes("VerifiableCredential")) {
      return NextResponse.json({ error: 'Formato inválido', details: 'No es una Credencial Verificable W3C.' }, { status: 400 });
    }

    // ¡AQUÍ ESTÁ LA CORRECCIÓN! Extraemos también el timeStampToken
    const { proof, timeStampToken, ...credentialToVerify } = body;

    if (!proof || !proof.signatureValue || !proof.publicKeyBase64) {
      return NextResponse.json({ error: 'Faltan datos criptográficos', details: 'La prueba (proof) está incompleta.' }, { status: 400 });
    }

    const publicKeyBytes = base64ToBytes(proof.publicKeyBase64);
    const signatureBytes = base64ToBytes(proof.signatureValue);
    
    // Reconstruimos el mensaje exacto que se firmó (sin el proof ni el timeStampToken)
    const messageBytes = new TextEncoder().encode(JSON.stringify(credentialToVerify));

    let isValid = false;
    try {
      isValid = ml_dsa65.verify(publicKeyBytes, messageBytes, signatureBytes);
    } catch (err) {
      return NextResponse.json({ status: 'INVALID', error: 'Fallo criptográfico', details: err.message }, { status: 400 });
    }

    if (isValid) {
      return NextResponse.json({
        status: 'VALID',
        metadata: {
          title: body.credentialSubject?.documentName || 'Documento Desconocido',
          creator: body.issuer?.name || 'Autor Desconocido',
          folio: body.id || 'Sin ID',
          hash: body.credentialSubject?.documentHash,
          hasTSA: !!timeStampToken // Verificamos el sello extraído
        },
        timestamp: new Date().toISOString()
      }, { status: 200 });
    } else {
      return NextResponse.json({ status: 'INVALID', error: 'Firma no coincide', details: 'El documento fue alterado.' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error en la API', details: error.message }, { status: 500 });
  }
}
