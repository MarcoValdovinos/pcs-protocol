/* ═══════════════════════════════════════════════════════
 *  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
 *  ◯_●                                                 ◯_●
 * 
 *  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 * 
 *  "El legado no se hereda. Se firma."
 * ═══════════════════════════════════════════════════════ */

import { NextResponse } from "next/server";
export async function GET() { return NextResponse.json({ ok: true, schema_version: "v0-minimal", estado: "activo", mensaje: "Sin Gemini - test de build" }); }
export async function POST(req) { const b = await req.json().catch(()=>({})); return NextResponse.json({ ok: true, eco: b, version: "v0-minimal" }); }
