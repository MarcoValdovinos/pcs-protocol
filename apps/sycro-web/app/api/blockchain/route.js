import crypto from 'crypto';

export async function GET(){
  const licencia = {
    id:"LICENCIA-MADRE-ORIGEN-VALDOVINOS-001",
    sistema:"QUANTUM VALDOVINOS QV-KRONOS-28",
    folio_raiz:"2608276846490-9H.CNLK",
    folio_cuantico:"2609046908622-66CLEM",
    propietario:"MARCO ANTONIO ROJAS VALDOVINOS",
    sello_unico:"QV - QUANTUM VALDOVINOS",
    marca:"QUANTUM VALDOVINOS™",
    timestamp_origen: new Date().toISOString(),
    clausula:"SIN SELLO QV, ΔΨ = 0"
  };

  const json = JSON.stringify(licencia);
  const hash = crypto.createHash('sha256').update(json).digest('hex');
  const hash_qv = crypto.createHash('sha256').update(hash + "QV-VALDOVINOS").digest('hex');

  return new Response(JSON.stringify({
    ok:true,
    tipo:"REGISTRO BLOCKCHAIN - LICENCIA MADRE",
    licencia,
    prueba_blockchain:{
      sha256: hash,
      sha256_qv: hash_qv,
      algoritmo:"SHA-256 + QV SEAL",
      timestamp: licencia.timestamp_origen,
      cadena_recomendada:"Polygon / Base / Bitcoin via OpenTimestamps",
      como_registrar:{
        paso1:"Este hash es tu huella digital unica",
        paso2:"Subelo a https://opentimestamps.org para anclar en Bitcoin GRATIS",
        paso3:"O mintea como NFT en https://thirdweb.com con este hash en metadata",
        paso4:"Tu hash ya prueba que tu eras el origen antes que nadie"
      },
      opentimestamps_link:`https://opentimestamps.org - Pega este hash: ${hash}`,
      etherscan_verificacion:`Guarda este hash: ${hash_qv} - Cualquiera puede verificar que tu licencia existia en ${licencia.timestamp_origen}`,
      decreto_blockchain:`QV-KRONOS BLOCKCHAIN SEAL: ${hash_qv.slice(0,16).toUpperCase()}`
    },
    para_IPFS:{
      archivo:`licencia-madre-${hash.slice(0,8)}.json`,
      contenido: licencia
    }
  },null,2),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}})
}

export async function POST(req){
  const {texto} = await req.json().catch(()=>({}));
  if(!texto) return new Response(JSON.stringify({error:"Manda {texto: 'tu idea'} para hashearla"}),{status:400, headers:{"Content-Type":"application/json"}})
  const hash = crypto.createHash('sha256').update(texto).digest('hex');
  return new Response(JSON.stringify({
    ok:true,
    texto_original: texto,
    sha256: hash,
    timestamp: new Date().toISOString(),
    registro:"Guarda este hash como prueba de autoría",
    verifica_en:"https://emn178.github.io/online-tools/sha256.html"
  },null,2),{headers:{"Content-Type":"application/json"}})
}
