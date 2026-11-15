/* ═══════════════════════════════════════════════════════
 *  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
 *  ◯_●                                                 ◯_●
 * 
 *  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 * 
 *  "El legado no se hereda. Se firma."
 * ═══════════════════════════════════════════════════════ */

import { NextResponse } from "next/server";
export async function GET() { return NextResponse.json({ ok: true, estado: "activo", uso: "POST con reporte y sello_auditoria" }); }
export async function POST(req) { const b = await req.json().catch(()=>({})); return NextResponse.json({ ok: true, valido: false, mensaje: "Validador v0-minimal", recibido: !!b.sello_auditoria }); }
