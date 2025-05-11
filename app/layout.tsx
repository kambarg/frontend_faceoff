import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '42 Abu Dhabi Events',
  description: 'Event Management Website for 42 Abu Dhabi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white">
        <main>{children}</main>
      </body>
    </html>
  )
} 