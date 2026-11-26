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
import { getRedis } from "../../../../lib/redis";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const ADMIN_SECRET = process.env.ADMIN_SECRET;
  const adminKey = req.headers.get("x-admin-key");

  if (!ADMIN_SECRET || adminKey !== ADMIN_SECRET) {
    return NextResponse.json({ ok: false, error: "No autorizado" }, { status: 401 });
  }

  try {
    const redis = getRedis();
    // Buscar todas las llaves que empiecen con "licencia:"
    const keys = await redis.keys("licencia:*");
    
    if (!keys || keys.length === 0) {
      return NextResponse.json({ ok: true, licencias: [] });
    }

    // Obtener los valores de esas llaves
    const rawLicencias = await redis.mget(...keys);
    
    const licencias = rawLicencias
      .filter(Boolean)
      .map(raw => typeof raw === "string" ? JSON.parse(raw) : raw)
      .sort((a, b) => new Date(b.fecha_emision).getTime() - new Date(a.fecha_emision).getTime()); // Más nuevas primero

    return NextResponse.json({ ok: true, licencias });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
