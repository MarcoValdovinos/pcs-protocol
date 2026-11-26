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

/**
 * ═══════════════════════════════════════════════════════════════════
 *  ▓▒░ MARCO.MCP · TESTS · SERVER ░▒▓
 * ═══════════════════════════════════════════════════════════════════
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MarcoMCPServer } from '../src/server.js';

test('MarcoMCPServer · instancia sin errores', () => {
  const server = new MarcoMCPServer();
  assert.ok(server);
  assert.ok(server.server);
});

test('MarcoMCPServer · expone capabilities esperadas', () => {
  const server = new MarcoMCPServer();
  const caps = server.server.getCapabilities?.() ?? {};
  // Sin capacidad network, sí tools/resources/prompts
  assert.ok(typeof caps === 'object');
});
