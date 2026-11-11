export const dynamic = "force-dynamic";
export async function GET() {
  return Response.json({
    alfabeto: { "Δ": "Delta", "Ψ": "Psi", "Ω": "Omega", "∞": "Infinito" },
    sello: "QV-ΔΨΩ∞-033E49FBCA0F8437",
    folio: "2608276846490-9H.CNLK",
    mensaje: "ΔΨΩ∞ - Toluca es el centro, el mundo es la red",
    "ΔΨ": "∞",
    estado: "Ω sellado"
  });
}
