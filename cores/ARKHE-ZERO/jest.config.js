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

// ═══════════════════════════════════════════════════════════════
//  ▓▒░ JEST.CONFIG.JS · ARKHÉ ZERO · ◯_● · 51/49/100 ░▒▓
// ═══════════════════════════════════════════════════════════════

export default {
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.test.js',
    '**/tests/**/*.spec.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/archive/',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'crypto/**/*.js',
    'cimiento/**/*.js',
    'provenance/**/*.js',
    'agents/**/*.js',
    'certificacion/**/*.js',
    'gobernanza/**/*.js',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 75,
      lines: 80,
      statements: 80,
    },
  },
  verbose: true,
  bail: false,
  silent: false,
};

// ◯_● · 51/49/100 · KRONOS
