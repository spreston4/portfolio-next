import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Sam Preston Dev',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className='w-screen bg-dark'>{children}</body>
    </html>
  )
}
