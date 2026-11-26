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

export const dynamic = "force-dynamic";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const paymentId = searchParams.get("payment_id");
  const status = searchParams.get("status");

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>SYCRO - Pago confirmado</title>
<style>
body { background:#000; color:#fff; font-family:monospace; padding:40px; text-align:center; }
h1 { color:#00ffcc; }
.ok { color:#0f0; font-size:24px; margin:20px 0; }
.info { color:#888; margin-top:20px; font-size:14px; }
.box { border:1px solid #0f0; padding:20px; max-width:600px; margin:20px auto; }
</style>
</head>
<body>
<h1>SYCRO VALDOVINOS</h1>
<p class="ok">[OK] Pago confirmado</p>
<div class="box">
<p>Payment ID: ${paymentId || "N/A"}</p>
<p>Status: ${status || "N/A"}</p>
</div>
<p class="info">Tu licencia sera emitida en los proximos segundos via webhook.<br>
Guarda este payment_id para referencia.</p>
<p class="info">Verifica el estado de tu licencia en /api/validar</p>
</body>
</html>`;

  return new NextResponse(html, { headers: { "Content-Type": "text/html" } });
}
