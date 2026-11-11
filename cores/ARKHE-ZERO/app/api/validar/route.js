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
