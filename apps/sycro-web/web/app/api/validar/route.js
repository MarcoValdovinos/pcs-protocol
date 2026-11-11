import { NextResponse } from "next/server";
import crypto from "crypto";
import { getRedis } from "../../../lib/redis";

export const dynamic = "force-dynamic";

const FOLIO_RAIZ = "2608276846490-9H.CNLK";
const SECRET = process.env.QV_SECRET;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Esta función responde a la pregunta de seguridad del navegador (Preflight)
export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

function verificarHMAC(folio, expira, sello) {
  if (!folio || !expira || !sello) return false;
  if (Date.now() > Number(expira)) return false;
  const payload = folio + "|" + FOLIO_RAIZ + "|" + expira;
  const esperado = "QV-" + crypto.createHmac("sha256", SECRET).update(payload).digest("hex").slice(0, 16).toUpperCase();
  if (typeof sello !== "string" || sello.length !== esperado.length) return false;
  return crypto.timingSafeEqual(Buffer.from(sello), Buffer.from(esperado));
}

export async function POST(req) {
  try {
    if (!SECRET) return NextResponse.json({ ok: false, error: "No configurado" }, { status: 500, headers: CORS_HEADERS });

    const b = await req.json().catch(() => ({}));
    const { folio_cliente, sello_qv, expira_en } = b;

    if (!folio_cliente || !sello_qv || !expira_en) {
      return NextResponse.json({ ok: false, error: "Sello invalido" }, { status: 403, headers: CORS_HEADERS });
    }
    if (!verificarHMAC(folio_cliente, expira_en, sello_qv)) {
      return NextResponse.json({ ok: false, error: "Sello invalido o expirado" }, { status: 403, headers: CORS_HEADERS });
    }

    let licencia = null;
    try {
      const raw = await getRedis().get("licencia:" + folio_cliente);
      if (raw) licencia = typeof raw === "string" ? JSON.parse(raw) : raw;
    } catch (e) {
      return NextResponse.json({ ok: false, error: "Error Redis" }, { status: 500, headers: CORS_HEADERS });
    }

    if (!licencia) {
      return NextResponse.json({ ok: false, error: "Licencia no emitida" }, { status: 404, headers: CORS_HEADERS });
    }
    if (licencia.estado === "revocada") {
      return NextResponse.json({ ok: false, error: "Licencia revocada" }, { status: 403, headers: CORS_HEADERS });
    }

    return NextResponse.json({
      ok: true,
      mensaje: "LICENCIA VALIDA - QV-KRONOS ACTIVADO",
      folio_cliente,
      maquina_id: licencia.maquina_id,
      estado: licencia.estado,
      acceso: "COMPLETO",
    }, { headers: CORS_HEADERS });

  } catch (error) {
    return NextResponse.json({ ok: false, error: "Internal Error" }, { status: 500, headers: CORS_HEADERS });
  }
}
