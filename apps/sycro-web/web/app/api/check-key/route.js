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
