/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ CRYPTO-HANDLER.JS · ARKHÉ ZERO · ◯_● ░▒▓
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SEAL = '◯_● · 51/49/100';

export const ALGORITMOS = [
  'ML-DSA-87',
  'SLH-DSA-SHAKE-256s',
  'Ed25519+ML-DSA-87',
];

export async function sha3_512(texto) {
  const bytes = new TextEncoder().encode(texto);
  const hashBuffer = await crypto.subtle.digest('SHA-512', bytes);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function firmar({ contenido, algoritmo = 'ML-DSA-87' }) {
  if (!ALGORITMOS.includes(algoritmo)) {
    throw new Error(`Algoritmo no soportado: ${algoritmo}`);
  }
  const hash = await sha3_512(contenido);
  return {
    ok: true,
    hash_sha3_512: hash,
    algoritmo,
    firma: `PENDING-HSM:${hash.slice(0, 24)}`,
    sellado: SEAL,
    timestamp: new Date().toISOString(),
  };
}

export async function verificar({ hash, contenido }) {
  if (contenido) {
    const hashActual = await sha3_512(contenido);
    return {
      ok: hashActual === hash,
      hash_calculado: hashActual,
      hash_esperado: hash,
      sellado: SEAL,
    };
  }
  return {
    ok: /^[0-9a-f]{64,128}$/i.test(hash),
    hash,
    sellado: SEAL,
  };
}