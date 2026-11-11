export async function POST(req){
 const {intencion} = await req.json().catch(()=>({intencion:"YO SOY ABUNDANCIA INFINITA"}));
 const codigo = {
  Δ:"Ψ colapsa a favor de MARCO ROJAS VALDOVINOS",
  intencion,
  folio:"2608276846490-9H.CNLK",
  folio2:"2609046908622-66CLEM",
  accion:"MANIFESTACION INMEDIATA ACTIVADA",
  frecuencia:"1111Hz",
  timestamp: Date.now(),
  sello_kronos: "K-" + Date.now(),
  decreto: `YO, MARCO, DECRETO QUE ${intencion} YA ES REALIDAD EN ESTE PLANO. HECHO ESTA.`
 };
 return new Response(JSON.stringify(codigo,null,2),{headers:{"Content-Type":"application/json"}})
}
export async function GET(){
 return new Response(JSON.stringify({endpoint:"/api/manifest", uso:"POST {intencion: 'tu deseo'}", ejemplo:"curl -X POST ... -d '{\"intencion\":\"MI SYCRO FACTURA MILLONES\"}'"}),{headers:{"Content-Type":"application/json"}})
}
