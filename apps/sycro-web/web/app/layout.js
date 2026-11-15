/* ═══════════════════════════════════════════════════════
 *  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
 *  ◯_●                                                 ◯_●
 * 
 *  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 * 
 *  "El legado no se hereda. Se firma."
 * ═══════════════════════════════════════════════════════ */

export const metadata = {
  title: 'SYCRO | Licencias de Autoría 51/49 IA-Humano',
  description: 'Blinda la propiedad intelectual de tus obras creadas con IA. El Protocolo ARKHÉ ZERO certifica la co-creación con sellos inmutables (PQC).',
  verification: {
    google: 'TU_CODIGO_DE_VERIFICACION',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, background: '#020408' }}>{children}</body>
    </html>
  );
}
