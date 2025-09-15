import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import MetaHeader from '@/components/meta/metaHeader'

export const metadata: Metadata = {
  title: 'Transporte Ventura',
  description: 'Transporte Ventura - Soluciones de transporte de contenedores en Panamá. Más de 30 años de experiencia en logística nacional e internacional.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <MetaHeader/>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
