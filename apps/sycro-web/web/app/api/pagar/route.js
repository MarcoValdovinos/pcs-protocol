import { NextResponse } from "next/server";
import crypto from "crypto";
import { getRedis } from "../../../lib/redis";

export const dynamic = "force-dynamic";

const ADMIN_SECRET = process.env.ADMIN_SECRET;

// 🔑 Decodificamos la llave desde Base64
function getPrivateKey() {
  const base64Key = process.env.ED25519_PRIVATE_KEY;
  if (!base64Key) throw new Error("La variable ED25519_PRIVATE_KEY está vacía o no existe en Vercel.");
  
  const keyString = Buffer.from(base64Key, 'base64').toString('utf-8');
  if (!keyString.includes("BEGIN PRIVATE KEY")) {
    throw new Error("La llave decodificada no tiene el formato PEM correcto.");
  }
  
  // Convertimos el string PEM a un objeto KeyObject de Node
  return crypto.createPrivateKey(keyString);
}

function firmarEd25519(payload) {
  const privateKey = getPrivateKey();
  const payloadString = JSON.stringify(payload);
  const payloadB64 = Buffer.from(payloadString).toString('base64url');
  
  const signature = crypto.sign(null, Buffer.from(payloadString), privateKey);
  const signatureB64 = signature.toString('base64url');
  
  return `SYCRO.QV.${payloadB64}.${signatureB64}`;
}

export async function POST(req) {
  const adminKey = req.headers.get("x-admin-key");
  if (!ADMIN_SECRET || adminKey !== ADMIN_SECRET) {
    return NextResponse.json({ ok: false, error: "No autorizado." }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const { solicitante, maquina_id, email } = body;
  
  if (!solicitante || !maquina_id || !email) {
    return NextResponse.json({ ok: false, error: "Faltan datos" }, { status: 400 });
  }

  const fechaEmision = Math.floor(Date.now() / 1000);
  const fechaExpiracion = fechaEmision + (365 * 24 * 60 * 60);

  const payload = {
    iss: "sycro:core:valdovinos",
    sub: `SYCRO-HIJA-${Date.now()}-${maquina_id.slice(0, 6).toUpperCase()}`,
    aud: maquina_id,
    iat: fechaEmision,
    exp: fechaExpiracion,
    solicitante,
    email,
    ai_decl: "AI-Assisted 51/49",
    qv_state: "active"
  };

  try {
    const sello_qv = firmarEd25519(payload);
    const licencia = { ok: true, sello_qv, payload, estado: "activa" };
    await getRedis().set("licencia:" + payload.sub, JSON.stringify(licencia));
    return NextResponse.json(licencia);
  } catch (error) {
    console.error("Error firmando licencia:", error.message);
    // AHORA DEVOLVEMOS EL ERROR REAL PARA DIAGNOSTICAR
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, protocolo: "SYCRO QV v1.0 (Ed25519)" });
}
