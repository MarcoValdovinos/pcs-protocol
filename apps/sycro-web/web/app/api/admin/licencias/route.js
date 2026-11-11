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
