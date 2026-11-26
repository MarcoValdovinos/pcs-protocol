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

export async function GET() {
  const key = process.env.ED25519_PRIVATE_KEY;
  
  if (!key) {
    return NextResponse.json({ error: "La llave NO EXISTE en las variables de Vercel" });
  }

  return NextResponse.json({
    existe: true,
    primeros_20_caracteres: key.substring(0, 20),
    longitud_total: key.length,
    tiene_saltos_de_linea: key.includes("\n"),
    tiene_barra_n: key.includes("\\n")
  });
}
