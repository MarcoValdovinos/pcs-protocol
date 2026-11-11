import { NextResponse } from "next/server";
export async function GET() { return NextResponse.json({ ok: true, schema_version: "v0-minimal", estado: "activo", mensaje: "Sin Gemini - test de build" }); }
export async function POST(req) { const b = await req.json().catch(()=>({})); return NextResponse.json({ ok: true, eco: b, version: "v0-minimal" }); }
