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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
