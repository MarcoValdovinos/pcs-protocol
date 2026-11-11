/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ▓▒░ APP.JS · ARKHÉ ZERO · ◯_● · 51/49/100 ░▒▓
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SEAL = '◯_● · 51/49/100';
export const VERSION = '1.0.0';

export function log(msg) {
  const el = document.getElementById('playground-output') ||
             document.getElementById('composer-output') ||
             document.querySelector('.terminal-block');
  if (el) el.textContent += `\n${msg}`;
  console.log(`[arkhe] ${msg}`);
}

export function formHandler(formId, outputId, onData) {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      const out = document.getElementById(outputId);
      if (out) out.textContent = `[ >> ] Procesando...`;
      try {
        const result = await onData(data);
        if (out) out.textContent = JSON.stringify(result, null, 2);
      } catch (err) {
        if (out) out.textContent = `[ XX ] ${err.message}`;
      }
    });
  });
}

export const INDEX_ZERO = Object.freeze({
  safe_creative_arq: '2607146379465',
  safe_creative_co: '2607086319439',
  sha256: 'f03f7e2d852617309457e0fe207f8f8bd2627d0b723de02f3b0ce05767219112',
  ethereum: '0xd2c2a7e128e6c81b689b3b0d9e1b31a4f6f8df0391b7b6c05e7daa7fb895774c',
});

formHandler('composer-form', 'composer-output', async (data) => ({
  ok: true,
  titulo: data.titulo,
  tipo: data.tipo,
  algoritmo: data.algoritmo,
  hash: '(calculado en cliente)',
  sellado: SEAL,
}));

formHandler('playground-form', 'playground-output', async (data) => ({
  ok: true,
  endpoint: data.endpoint,
  payload: data.payload,
  status: 200,
  sellado: SEAL,
}));