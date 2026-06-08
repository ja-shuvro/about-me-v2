import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jashuvro.com'),
  title: 'J.A. Shuvro — Flutter & Full-Stack Developer',
  description: 'Portfolio of J.A. Shuvro (Md. Jonaed Ali Shuvro), a professional Flutter & Full-Stack Developer. Specialized in building mobile apps (Android/iOS) and robust web architectures with Laravel, React, Next.js, and Express.',
  keywords: [
    'J.A. Shuvro',
    'J.A. Suvro',
    'JA. Shuvro',
    'JA. Suvro',
    'Shuvro',
    'Suvro',
    'Jonaed Ali',
    'Md. Jonaed ali',
    'Md Jonaed ali shuvro',
    'Md. Jonaed Ali Shuvro',
    'Jonaed',
    'Ali',
    'Jonaed Ali Shuvro',
    'Md. Jonaed Ali',
    'Md Jonaed Ali',
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
    'ERP Platforms Architect'
  ],
  authors: [{ name: 'J.A. Shuvro', url: 'https://github.com/ja-shuvro' }],
  creator: 'J.A. Shuvro',
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
    title: 'J.A. Shuvro — Flutter & Full-Stack Developer',
    description: 'Bespoke Flutter mobile applications and high-performance Full-Stack web systems. Check out case studies on Flirtmetrics WebSocket chat optimization and ERP platforms.',
    url: 'https://www.jashuvro.com',
    siteName: 'J.A. Shuvro Portfolio',
    locale: 'en_US',
    type: 'profile',
    username: 'ja-shuvro',
    gender: 'male',
    images: [
      {
        url: '/logo-landscape.png',
        width: 1200,
        height: 630,
        alt: 'J.A. Shuvro — Flutter & Full-Stack Developer Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J.A. Shuvro — Flutter & Full-Stack Developer',
    description: 'Bespoke Flutter mobile applications and high-performance Full-Stack web systems.',
    creator: '@shuvro_a',
    images: ['/logo-landscape.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'J.A. Shuvro',
  alternateName: [
    'JA. Shuvro',
    'Shuvro',
    'Jonaed Ali',
    'Md. Jonaed Ali',
    'Md. Jonaed Ali Shuvro',
    'Jonaed Ali Shuvro',
    'J.A. Shuvro — Flutter & Full-Stack Developer'
  ],
  url: 'https://www.jashuvro.com',
  image: 'https://avatars.githubusercontent.com/u/89667794?v=4',
  jobTitle: 'Flutter & Full-Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance & Independent Developer',
  },
  description: 'Professional Flutter and Full-Stack Developer with over 3.5 years of experience building mobile applications (Android/iOS) and robust, scalable backend web systems using Laravel, React, Next.js, and Node.js.',
  sameAs: [
    'https://github.com/ja-shuvro',
    'https://www.linkedin.com/in/ja-shuvro-13733b37b',
    'https://wa.me/01728723881',
    'https://x.com/shuvro_a'
  ],
  knowsAbout: [
    'Flutter',
    'Dart',
    'Android Development',
    'iOS Development',
    'State Management (Riverpod, GetX)',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'Laravel',
    'PHP',
    'Node.js',
    'Express.js',
    'NestJS',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'WebSockets',
    'Database Architecture',
    'Systems Engineering'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* AI & Search Discovery Links */}
        <link rel="alternate" type="application/rss+xml" href="https://www.jashuvro.com/feed.xml" title="J.A. Shuvro RSS Feed" />
        <link rel="alternate" href="https://www.jashuvro.com/about-ai" title="AI Machine Readable Profile" />
        <link rel="alternate" href="https://www.jashuvro.com/llms.txt" title="LLM Crawler Details" />
        <link rel="author" href="https://www.jashuvro.com/humans.txt" />
      </head>
      <body>{children}</body>
    </html>
  )
}
