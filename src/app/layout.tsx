import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import { getPersonSchema, getWebsiteSchema } from '@/lib/schemaHelpers'

export const viewport: Viewport = {
  themeColor: '#020408',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jashuvro.com'),
  title: 'MD. Jonaed Ali Shuvro — Flutter & Full-Stack Developer',
  description: 'Portfolio of MD. Jonaed Ali Shuvro, a professional Flutter & Full-Stack Developer. Specialized in building mobile apps (Android/iOS) and robust web architectures with Laravel, React, Next.js, and Express.',
  keywords: [
    'MD. Jonaed Ali Shuvro',
    'Jonaed Ali Shuvro',
    'JA Shuvro',
    'J.A. Shuvro',
    'Md. Jonaed Ali',
    'Md. Jonaed Ali Shuvro',
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
  authors: [{ name: 'MD. Jonaed Ali Shuvro', url: 'https://github.com/ja-shuvro' }],
  creator: 'MD. Jonaed Ali Shuvro',
  publisher: 'MD. Jonaed Ali Shuvro',
  applicationName: 'MD. Jonaed Ali Shuvro',
  appleWebApp: {
    title: 'MD. Jonaed Ali Shuvro',
    capable: true,
    statusBarStyle: 'default',
  },
  other: {
    creator: 'MD. Jonaed Ali Shuvro',
    publisher: 'MD. Jonaed Ali Shuvro',
    author: 'MD. Jonaed Ali Shuvro',
    copyrightHolder: 'MD. Jonaed Ali Shuvro',
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
    title: 'MD. Jonaed Ali Shuvro — Flutter & Full-Stack Developer',
    description: 'Bespoke Flutter mobile applications and high-performance Full-Stack web systems. Check out case studies on Flirtmetrics WebSocket chat optimization and ERP platforms.',
    url: 'https://www.jashuvro.com',
    siteName: 'MD. Jonaed Ali Shuvro Portfolio',
    locale: 'en_US',
    type: 'profile',
    username: 'ja-shuvro',
    gender: 'male',
    images: [
      {
        url: '/logo-landscape.png',
        width: 1200,
        height: 630,
        alt: 'MD. Jonaed Ali Shuvro — Flutter & Full-Stack Developer Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MD. Jonaed Ali Shuvro — Flutter & Full-Stack Developer',
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
  const personSchema = getPersonSchema()
  const websiteSchema = getWebsiteSchema()

  return (
    <html lang="en">
      <head>
        {/* Base AI Structured Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* AI & Search Discovery Links */}
        <link rel="alternate" type="application/rss+xml" href="https://www.jashuvro.com/feed.xml" title="MD. Jonaed Ali Shuvro RSS Feed" />
        <link rel="alternate" href="https://www.jashuvro.com/about-ai" title="AI Machine Readable Profile" />
        <link rel="alternate" href="https://www.jashuvro.com/llms.txt" title="LLM Crawler Details" />
        <link rel="author" href="https://www.jashuvro.com/humans.txt" />
      </head>
      <body>{children}</body>
    </html>
  )
}

