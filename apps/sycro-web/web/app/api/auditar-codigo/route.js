import { NextResponse } from "next/server";

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const ADMIN_SECRET = process.env.ADMIN_SECRET;
const GEMINI_API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

export async function POST(req) {
  try {
    const adminKey = req.headers.get("x-admin-key");
    if (!ADMIN_SECRET || adminKey !== ADMIN_SECRET) {
      return NextResponse.json({ ok: false, error: "No autorizado." }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const codigo = body.codigo ? body.codigo.substring(0, 3000) : null;

    if (!codigo) {
      return NextResponse.json({ ok: false, error: "Falta el campo 'codigo'." }, { status: 400 });
    }

    // 🔥 CAMBIO CLAVE: gemini-3.1-flash-lite (sin pensamiento, latencia mínima)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Busca 1 o 2 vulnerabilidades críticas en este código:\n\n\`\`\`\n${codigo}\n\`\`\`` }] }],
          systemInstruction: { parts: [{ text: "Eres un auditor. Responde rápido y en JSON estricto con las claves: nivel_riesgo, vulnerabilidades, recomendaciones." }] },
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 500,
            responseMimeType: "application/json"
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Google API (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    const textoIA = data.candidates[0].content.parts[0].text;
    const reporte = JSON.parse(textoIA);

    return NextResponse.json({ ok: true, reporte });

  } catch (error) {
    console.error("Error en Auditoría Edge:", error.message);
    return NextResponse.json({ ok: false, error: "Error en el motor de IA (Edge): " + error.message }, { status: 500 });
  }
}
