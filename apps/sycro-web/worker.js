export default {
  async fetch(request) {
    if (request.method === "POST") {
      return new Response(JSON.stringify({
        status: "VALID",
        message: "SYCRO desplegado en Cloudflare Edge",
        user: "Marco Valdovinos",
        sovereignty: "51% Humano / 49% IA"
      }), { headers: { "Content-Type": "application/json" } });
    }
    return new Response("SYCRO API Global. Envía un POST para validar.", { status: 200 });
  }
};
