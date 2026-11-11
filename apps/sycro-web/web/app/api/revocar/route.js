import { NextResponse } from "next/server";
import { getRedis } from "../../../lib/redis";

export const dynamic = "force-dynamic";

export async function POST(req) {
  const ADMIN_SECRET = process.env.ADMIN_SECRET;
  if (!ADMIN_SECRET) {
    return NextResponse.json({ ok: false, error: "Sistema no configurado" }, { status: 500 });
  }

  const adminKey = req.headers.get("x-admin-key");
  if (!adminKey || adminKey !== ADMIN_SECRET) {
    return NextResponse.json({ ok: false, error: "No autorizado" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const { folio_cliente, motivo } = body;
  if (!folio_cliente) {
    return NextResponse.json({ ok: false, error: "Falta folio_cliente" }, { status: 400 });
  }

  let licencia = null;
  try {
    const raw = await getRedis().get("licencia:" + folio_cliente);
    if (raw) licencia = typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Error Redis: " + (e && e.message) }, { status: 500 });
  }

  if (!licencia) {
    return NextResponse.json({ ok: false, error: "Licencia no encontrada" }, { status: 404 });
  }
  if (licencia.estado === "revocada") {
    return NextResponse.json({ ok: true, ya_estaba_revocada: true, folio_cliente, fecha_revocacion: licencia.fecha_revocacion || null });
  }

  licencia.estado = "revocada";
  licencia.fecha_revocacion = new Date().toISOString();
  licencia.motivo_revocacion = motivo || "Sin motivo especificado";

  try {
    await getRedis().set("licencia:" + folio_cliente, JSON.stringify(licencia));
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Error guardando: " + (e && e.message) }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    mensaje: "Licencia revocada permanentemente",
    folio_cliente,
    motivo: licencia.motivo_revocacion,
    fecha_revocacion: licencia.fecha_revocacion,
  });
}

export async function GET() {
  return NextResponse.json({
    sistema: "SYCRO Admin",
    proteccion: "Header requerido: x-admin-key",
    uso: "POST {folio_cliente, motivo}",
  });
}
