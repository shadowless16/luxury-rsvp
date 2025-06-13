import type { Metadata } from 'next'
import './globals.css'
import '../public/great-vibes.css'

export const metadata: Metadata = {
  title: 'RSVP FORM',
  description: 'Created BY AK',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
