import { NextResponse } from "next/server";
import crypto from "crypto";
import { getRedis } from "../../../lib/redis";
import { ml_dsa65 } from "@noble/post-quantum/ml-dsa";

export const dynamic = "force-dynamic";

const ADMIN_SECRET = process.env.ADMIN_SECRET;
const PQC_SEED_HEX = process.env.PQC_SEED_HEX;

function firmarMLDSA65(payloadString) {
  if (!PQC_SEED_HEX) throw new Error("Semilla PQC no configurada");
  const seedBytes = Buffer.from(PQC_SEED_HEX, "hex");
  if (seedBytes.length !== 32) throw new Error(`Semilla inválida: ${seedBytes.length} bytes`);
  const { secretKey } = ml_dsa65.keygen(new Uint8Array(seedBytes));
  const msgBytes = new TextEncoder().encode(payloadString);
  // 🔑 ORDEN CORRECTO: sign(secretKey, message)
  const signature = ml_dsa65.sign(secretKey, msgBytes);
  return Buffer.from(signature).toString("hex");
}

export async function GET() {
  return NextResponse.json({ version: "v6-final-ml-dsa-65", seed_length: PQC_SEED_HEX?.length || 0 });
}

export async function POST(req) {
  const adminKey = req.headers.get("x-admin-key");
  if (!ADMIN_SECRET || adminKey !== ADMIN_SECRET) {
    return NextResponse.json({ ok: false, error: "No autorizado." }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const { folio, autor, titulo, human_pct, manuscrito } = body;

  if (!folio || !autor || !titulo) {
    return NextResponse.json({ ok: false, error: "Faltan datos obligatorios" }, { status: 400 });
  }

  try {
    const payloadString = JSON.stringify({
      folio, autor, titulo, human_pct,
      hash_manuscrito: crypto.createHash("sha3-512").update(manuscrito || "").digest("hex"),
    });

    const firma_pqc = firmarMLDSA65(payloadString);

    const xmlMetadata = `<metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:kronos="https://kronos.id/schema/v1">
  <dc:title>${titulo}</dc:title>
  <dc:creator>${autor}</dc:creator>
  <kronos:folio_cliente>${folio}</kronos:folio_cliente>
  <kronos:sovereignty human="${human_pct}" ai="${100 - human_pct}" standard="SCDR-002" />
  <kronos:compliance standard="NOM-151-SCFI-2016" anchor="TOLUCA-GLOBAL-e8d9eac8" />
</metadata>`.trim();

    const licencia = {
      ok: true,
      sello_qv: `SYCRO-QV-${Date.now()}-${human_pct}%`,
      token_pqc: `KRONOS.PQC.ML-DSA-65.${Buffer.from(payloadString).toString("base64url")}.${firma_pqc}`,
      xml_metadata: xmlMetadata,
      fecha: new Date().toISOString(),
    };

    await getRedis().set("licencia:" + folio, JSON.stringify(licencia));
    return NextResponse.json(licencia);
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Error interno: " + error.message }, { status: 500 });
  }
}
