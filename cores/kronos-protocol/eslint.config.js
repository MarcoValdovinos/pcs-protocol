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

import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "marco.mcp/dist/**",
      "agents/mcp/**",
      "runtime/**",
      "coverage/**",
      "atribucion/sdk/js/**",
      "pva/fsdbg/**",
      "pva/iwc/**",
      "projects/**",
      "web/CIUDAD/**",
      "docs/CIUDAD/**",
      "ciudad/**",
      "docs/ciudad/**",
      "docs/catalogo/**",
      "**/sw.js",
      "**/*.min.js"
    ]
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.es2022 },
      ecmaVersion: 2022,
      sourceType: "module"
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_", "caughtErrorsIgnorePattern": "^_" }],
      "no-empty": "warn",
      "no-undef": "off",
      "object-shorthand": "off",
      "curly": "off",
      "quotes": "off",
      "prefer-const": "off",
      "no-var": "off",
      "arrow-body-style": "off"
    }
  }
];
