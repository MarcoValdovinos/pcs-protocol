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

/* ============================================================
   KRONOS PROTOCOL · verifier.js
   Port fiel de verifier.py · verificación de cadena en cliente
   ============================================================ */
(function (global) {
  'use strict';

  // ---------- SHA-256 (equivalente a hashlib.sha256) ----------
  async function hashSha256(texto) {
    const enc = new TextEncoder().encode(texto);
    const buf = await crypto.subtle.digest('SHA-256', enc);
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }

  // ---------- Verificación de cadena ----------
  async function verificarCadena(log) {
    const resultado = {
      total: log.length,
      integra: true,
      rota_en: null,
      razon: null,
      principios_defendidos: new Set(),
      entradas: [],
    };

    let hashPrevioEsperado = null;

    for (let i = 0; i < log.length; i++) {
      const e = log[i];

      if (e.hash_previo !== hashPrevioEsperado) {
        resultado.integra = false;
        resultado.rota_en = e.n;
        resultado.razon = 'hash_previo no coincide';
        resultado.entradas.push({
          n: e.n,
          ok: false,
          motivo: 'hash_previo',
          accion: e.accion,
          cuando: e.cuando,
        });
        break;
      }

      const contenido = [
        String(e.n),
        e.cuando,
        e.accion,
        String(e.principio),
        e.entrada,
        e.proposito,
        e.autor,
        e.anio,
        e.hash_previo || 'GENESIS',
      ].join('|');

      const hashCalculado = await hashSha256(contenido);

      if (hashCalculado !== e.hash) {
        resultado.integra = false;
        resultado.rota_en = e.n;
        resultado.razon = 'hash no coincide';
        resultado.entradas.push({
          n: e.n,
          ok: false,
          motivo: 'hash',
          accion: e.accion,
          cuando: e.cuando,
        });
        break;
      }

      resultado.principios_defendidos.add(e.principio);
      resultado.entradas.push({
        n: e.n,
        ok: true,
        accion: e.accion,
        cuando: e.cuando,
        principio: e.principio,
        hash: e.hash,
      });
      hashPrevioEsperado = e.hash;
    }

    resultado.principios_defendidos = Array.from(
      resultado.principios_defendidos,
    ).sort();
    return resultado;
  }

  // ---------- Cargar log desde URL ----------
  async function cargarLog(url = 'logs/log.json') {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`No se pudo cargar ${url} (HTTP ${res.status})`);
    return await res.json();
  }

  // ---------- API pública ----------
  global.KronosVerifier = {
    hashSha256,
    verificarCadena,
    cargarLog,
  };

  console.log('[Kronos] verifier.js cargado · KronosVerifier disponible');
})(window);
