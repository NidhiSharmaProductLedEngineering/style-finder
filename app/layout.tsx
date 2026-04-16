import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StyleFinder — Discover Your Signature Look',
  description: 'AI-powered personal style quiz with curated outfit ideas and shopping recommendations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
