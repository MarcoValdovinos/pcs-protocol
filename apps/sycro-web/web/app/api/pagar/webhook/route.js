import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { getRedis } from "../../../../lib/redis";

export const dynamic = "force-dynamic";

const FOLIO_RAIZ = "2608276846490-9H.CNLK";
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;
const MP_WEBHOOK_SECRET = process.env.MP_WEBHOOK_SECRET;

function firmar(folio, expira) {
  const payload = folio + "|" + FOLIO_RAIZ + "|" + expira;
  return "QV-" + crypto.createHmac("sha256", process.env.QV_SECRET).update(payload).digest("hex").slice(0, 16).toUpperCase();
}

export async function POST(req) {
  const signature = req.headers.get("x-signature") ?? "";
  const requestId = req.headers.get("x-request-id") ?? "";
  const body = await req.json().catch(() => ({}));
  const dataId = body?.data?.id;

  if (!signature || !requestId || !dataId || !MP_WEBHOOK_SECRET) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const parts = Object.fromEntries(signature.split(",").map(p => p.split("=").map(s => s.trim())));
  const { ts, v1 } = parts;
  if (!ts || !v1) return NextResponse.json({ ok: false }, { status: 400 });

  const canonical = `id:${dataId};request-id:${requestId};ts:${ts};`;
  const expected = crypto.createHmac("sha256", MP_WEBHOOK_SECRET).update(canonical).digest("hex");
  const isValid = expected.length === v1.length && crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(v1));

  if (!isValid) {
    console.warn("Webhook firma invalida. Rechazado.");
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true }, { status: 200 });

  queueMicrotask(async () => {
    try {
      if (body.type !== "payment") return;

      const client = new MercadoPagoConfig({ accessToken: MP_ACCESS_TOKEN });
      const paymentApi = new Payment(client);
      const payment = await paymentApi.get({ id: dataId });

      if (payment.status !== "approved") {
        console.log("Pago " + dataId + " NO aprobado: " + payment.status);
        return;
      }

      const dedupKey = "mp:payment:" + dataId;
      const yaProcessed = await getRedis().get(dedupKey);
      if (yaProcessed) {
        console.log("Pago " + dataId + " ya procesado. Skip.");
        return;
      }

      const meta = payment.metadata || {};
      const { solicitante, maquina_id, email, proposito } = meta;
      if (!solicitante || !maquina_id) {
        console.error("Pago " + dataId + " sin metadata valida");
        return;
      }

      const folio = "SYCRO-HIJA-" + Date.now() + "-" + maquina_id.slice(0, 6).toUpperCase();
      const expira = Date.now() + 365 * 24 * 60 * 60 * 1000;

      const licencia = {
        ok: true,
        folio_cliente: folio,
        folio_raiz: FOLIO_RAIZ,
        sello_qv: firmar(folio, expira),
        expira_en: expira,
        expira_iso: new Date(expira).toISOString(),
        maquina_id, solicitante, email,
        proposito: proposito || "OPERACION CUANTICA",
        estado: "activa",
        fecha_emision: new Date().toISOString(),
        modo: "MERCADO_PAGO",
        mp_payment_id: dataId,
        monto_pagado_mxn: (payment.transaction_amount || 1111),
      };

      await getRedis().set("licencia:" + folio, JSON.stringify(licencia));
      await getRedis().set(dedupKey, "1");

      console.log("Licencia emitida: " + folio + " para pago " + dataId);
    } catch (error) {
      console.error("Error procesando webhook async:", error.message);
    }
  });

  return response;
}

export async function GET() {
  return NextResponse.json({ ok: true, uso: "Webhook de Mercado Pago" });
}
