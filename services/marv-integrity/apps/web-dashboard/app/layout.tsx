import './globals.css'
export const metadata = {
  title: 'KRONOS · Dashboard Enterprise',
  description: 'Panel de control de integridad y folios',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, backgroundColor: '#05040a', color: '#fff' }}>{children}</body>
    </html>
  )
}
