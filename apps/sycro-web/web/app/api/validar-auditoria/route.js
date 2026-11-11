import { NextResponse } from "next/server";
export async function GET() { return NextResponse.json({ ok: true, estado: "activo", uso: "POST con reporte y sello_auditoria" }); }
export async function POST(req) { const b = await req.json().catch(()=>({})); return NextResponse.json({ ok: true, valido: false, mensaje: "Validador v0-minimal", recibido: !!b.sello_auditoria }); }
