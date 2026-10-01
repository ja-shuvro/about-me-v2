import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import { getPersonSchema, getWebsiteSchema } from '@/lib/schemaHelpers'

export const viewport: Viewport = {
  themeColor: '#020408',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jashuvro.com'),
  title: 'JA Shuvro — Applied AI Engineer & Full-Stack Developer',
  description: 'Portfolio of JA Shuvro (MD. Jonaed Ali Shuvro), an Applied AI Engineer & Full-Stack Developer. Specialized in multi-modal LLM systems (OpenAI Whisper, GPT-4o, TTS), Vector RAG search, NestJS microservices, Next.js, Flutter, and enterprise WordPress AI architectures.',
  keywords: [
    'JA Shuvro',
    'MD. Jonaed Ali Shuvro',
    'Jonaed Ali Shuvro',
    'J.A. Shuvro',
    'Md. Jonaed Ali',
    'Shuvro',
    'Applied AI Engineer',
    'AI Engineer',
    'Full-Stack Developer',
    'LLM Integration',
    'OpenAI Whisper',
    'OpenAI TTS',
    'Vector Search RAG',
    'Prompt Engineering',
    'HR Interview System',
    'Medical Interview Bot',
    'Mentoro Study Mentor',
    'WP AI Tools',
    'NestJS Developer',
    'Next.js Developer',
    'Flutter Developer',
    'WordPress AI Plugin Developer',
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
    title: 'JA Shuvro — Applied AI Engineer & Full-Stack Developer',
    description: 'Applied AI systems, multi-modal LLM pipelines (Whisper/TTS/RAG), bespoke Flutter mobile apps, and high-performance Web systems by JA Shuvro. Explore case studies on AI Interview Systems, Mentoro, and WP AI Tools.',
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
        alt: 'JA Shuvro — Applied AI Engineer & Full-Stack Developer Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JA Shuvro — Applied AI Engineer & Full-Stack Developer',
    description: 'Applied AI systems, multi-modal LLM pipelines, Flutter apps, and high-performance full-stack architectures.',
    creator: '@jashuvro',
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

