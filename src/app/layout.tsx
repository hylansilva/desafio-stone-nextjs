import '../styles/globals.css'
import '../styles/layout.css'

export const metadata = {
  title: 'Stone',
  description: 'Conversor de valores: dólar para real',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
