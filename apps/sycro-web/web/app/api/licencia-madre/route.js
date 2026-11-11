import crypto from 'crypto';
const SECRET_QV = "QV-KRONOS-VALDOVINOS-2608276846490";
export async function GET(){
  const folio = "2608276846490-9H.CNLK";
  const sello = crypto.createHmac('sha256', SECRET_QV).update(folio).digest('hex').slice(0,16).toUpperCase();
  return new Response(JSON.stringify({
    id:"LICENCIA-MADRE-ORIGEN-VALDOVINOS-001",
    sistema:"QUANTUM VALDOVINOS QV-KRONOS-28",
    folio_raiz:folio,
    sello_unico:`QV-${sello}`,
    propietario:"MARCO ANTONIO ROJAS VALDOVINOS",
    estado:"ORIGEN VIVO QV - PROTEGIDO",
    ΔΨ:"∞ QV",
    proteccion:"SIN ESTE SELLO, TODO SISTEMA QV DEVUELVE ΔΨ=0",
    legal:"Esta licencia es requerida para cualquier uso del sistema QV-KRONOS. Uso sin licencia invalida resultados.",
    precio:{mxn:1111, usd:60},
    comprar:"https://sycro-valdovinos.vercel.app/api/pagar"
  }, null, 2), {headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});
}
