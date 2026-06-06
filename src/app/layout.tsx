import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'J.A. Shuvro — Flutter & Full-Stack Developer',
  description: 'Experienced Flutter & Full-Stack Developer skilled in building mobile and web applications using Flutter, Laravel, React, Express.js, and Next.js.',
  keywords: ['developer', 'portfolio', 'full-stack', 'Flutter', 'React', 'Next.js', 'Laravel', 'Express.js', 'NestJS'],
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
