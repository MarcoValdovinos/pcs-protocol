/* ═══════════════════════════════════════════════════════
 *  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
 *  ◯_●                                                 ◯_●
 * 
 *  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 * 
 *  "El legado no se hereda. Se firma."
 * ═══════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════
//  ▓▒░ PRETTIER.CONFIG.JS · ARKHÉ ZERO · ◯_● · 51/49/100 ░▒▓
// ═══════════════════════════════════════════════════════════════

export default {
  printWidth: 88,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: false,
  overrides: [
    {
      files: '*.md',
      options: { proseWrap: 'preserve', printWidth: 100 },
    },
    {
      files: '*.json',
      options: { printWidth: 100 },
    },
    {
      files: '*.yml',
      options: { singleQuote: false },
    },
  ],
};

// ◯_● · 51/49/100 · KRONOS
