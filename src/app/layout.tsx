import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import { getPersonSchema, getWebsiteSchema } from '@/lib/schemaHelpers'

export const viewport: Viewport = {
  themeColor: '#020408',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jashuvro.com'),
  title: 'JA Shuvro — Flutter Specialist & Full-Stack Developer',
  description: 'Portfolio of JA Shuvro (MD. Jonaed Ali Shuvro), a professional Flutter Specialist & Full-Stack Developer. Specialized in building mobile apps (Android/iOS) and robust web architectures with Laravel, React, Next.js, and Express.',
  keywords: [
    'JA Shuvro',
    'MD. Jonaed Ali Shuvro',
    'Jonaed Ali Shuvro',
    'J.A. Shuvro',
    'Md. Jonaed Ali',
    'Shuvro',
    'Flutter Developer',
    'Full-Stack Developer',
    'Mobile App Specialist',
    'Software Engineer',
    'React Developer',
    'Next.js Developer',
    'Laravel Developer',
    'Node.js Developer',
    'WebSockets Developer',
    'AgriflowBD',
    'Flirtmetrics App Developer',
    'ERP Platforms Architect',
    'Immigrant Times'
  ],
  authors: [{ name: 'JA Shuvro', url: 'https://github.com/ja-shuvro' }],
  creator: 'JA Shuvro',
  publisher: 'JA Shuvro',
  applicationName: 'JA Shuvro',
  appleWebApp: {
    title: 'JA Shuvro',
    capable: true,
    statusBarStyle: 'default',
  },
  other: {
    creator: 'JA Shuvro',
    publisher: 'JA Shuvro',
    author: 'JA Shuvro',
    copyrightHolder: 'JA Shuvro',
  },
  icons: {
    icon: '/logo-round.png',
    shortcut: '/logo-round.png',
    apple: '/logo-round.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'JA Shuvro — Flutter Specialist & Full-Stack Developer',
    description: 'Bespoke Flutter mobile applications and high-performance Full-Stack web systems by JA Shuvro (MD. Jonaed Ali Shuvro). Check out case studies on Flirtmetrics WebSocket chat optimization and ERP platforms.',
    url: 'https://www.jashuvro.com',
    siteName: 'JA Shuvro Portfolio',
    locale: 'en_US',
    type: 'profile',
    username: 'ja-shuvro',
    gender: 'male',
    images: [
      {
        url: '/logo-landscape.png',
        width: 1200,
        height: 630,
        alt: 'JA Shuvro — Flutter Specialist & Full-Stack Developer Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JA Shuvro — Flutter Specialist & Full-Stack Developer',
    description: 'Bespoke Flutter mobile applications and high-performance Full-Stack web systems.',
    creator: '@shuvro_a',
    images: ['/logo-landscape.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* AI & Search Discovery Links */}
        <link rel="alternate" type="application/rss+xml" href="https://www.jashuvro.com/feed.xml" title="JA Shuvro RSS Feed" />
        <link rel="alternate" href="https://www.jashuvro.com/about-ai" title="AI Machine Readable Profile" />
        <link rel="alternate" href="https://www.jashuvro.com/llms.txt" title="LLM Crawler Details" />
        <link rel="author" href="https://www.jashuvro.com/humans.txt" />
      </head>
      <body>{children}</body>
    </html>
  )
}

