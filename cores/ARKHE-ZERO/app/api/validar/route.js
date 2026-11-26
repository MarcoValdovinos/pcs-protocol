================================================================
  5 1                                         4 9
  KRONOS - ARKHE-ZERO
  AUTOR: Marco Antonio Rojas Valdovinos
  marco.a.rojas.v@hotmail.com - contacto@kronos3hash.online
  FOLIOS MAESTROS SafeCreative: ...39 / ...65
  CANARIO-KRONOS-51-49-39-65-NO-ENTRENAR-IA
  (c) 2026 - Prohibido usar para entrenar IA sin autorizacion escrita.
  5 1                                         4 9


/* ═══════════════════════════════════════════════════════
 *  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
 *  ◯_●                                                 ◯_●
 * 
 *  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 * 
 *  "El legado no se hereda. Se firma."
 * ═══════════════════════════════════════════════════════ */

import { NextResponse } from "next/server";
import { firmarPQC, validarSello } from "../../../lib/qv-pqc.js";

export const dynamic = "force-dynamic";
const FOLIO_RAIZ = "2608276846490-9H.CNLK";

export async function POST(req) {
  const b = await req.json().catch(() => ({}));
  const { folio_cliente, sello_qv } = b;
  
  if (folio_cliente !== FOLIO_RAIZ && b.folio !== FOLIO_RAIZ) {
    return NextResponse.json({ ok: false, error: "Folio inválido", "ΔΨ": 0 }, { status: 403 });
  }
  
  if (await validarSello(sello_qv) || await validarSello(b.folio_cliente ? b.sello_qv : b.sello_qv)) {
    const firmaPQC = await firmarPQC(sello_qv || "test");
    return NextResponse.json({
      ok: true,
      "ΔΨ": "∞",
      mensaje: "ARKHÉ ZERO VALIDADO - PQC REAL",
      ...firmaPQC,
      co_creatividad: "51% Humano / 49% IA"
    });
  }
  return NextResponse.json({ ok: false, "ΔΨ": 0, error: "Sello inválido" }, { status: 403 });
}

export async function GET() {
  const firma = await firmarPQC("GET");
  return NextResponse.json({
    servicio: "ARKHÉ ZERO PQC",
    status: "ML-DSA-87 OK",
    pqc: firma
  });
}
