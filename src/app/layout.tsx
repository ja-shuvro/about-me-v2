import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Alex Chen — Digital Experience Architect',
  description: 'I don\'t build websites. I solve problems through digital experiences.',
  keywords: ['developer', 'portfolio', 'full-stack', 'Three.js', 'React', 'Next.js'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
