import type { Metadata } from 'next'
import Link from 'next/link'
import { CASE_STUDIES_DATA } from '@/lib/projectData'
import { getPersonSchema, getWebsiteSchema, getProfilePageSchema, getBreadcrumbListSchema } from '@/lib/schemaHelpers'

export const metadata: Metadata = {
  title: 'MD. Jonaed Ali Shuvro // AI Search Canonical Developer Profile',
  description: 'Machine-readable profile optimized for LLM crawlers (ChatGPT, Gemini, Claude, Perplexity), search bots, and recruiter screeners.',
  keywords: ['MD. Jonaed Ali Shuvro', 'Jonaed Ali Shuvro', 'JA Shuvro', 'Developer Profile', 'AI Crawler Feed', 'Flutter Specialist', 'Systems Engineer'],
  alternates: {
    canonical: 'https://www.jashuvro.com/about-ai'
  },
  other: {
    author: 'MD. Jonaed Ali Shuvro',
    creator: 'MD. Jonaed Ali Shuvro',
    publisher: 'MD. Jonaed Ali Shuvro',
    copyrightHolder: 'MD. Jonaed Ali Shuvro',
  }
}

import AboutAiContent from '@/components/sections/AboutAiContent'

export default function AboutAiPage() {
  const personSchema = getPersonSchema()
  const websiteSchema = getWebsiteSchema()
  const profileSchema = getProfilePageSchema()
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'About AI', path: '/about-ai' }
  ])

  return (
    <div style={{
      maxWidth: '850px',
      margin: '0 auto',
      padding: '4rem 2rem',
      fontFamily: 'var(--font-mono), monospace',
      fontSize: '0.85rem',
      color: '#e2e8f0',
      background: '#020408',
      lineHeight: '1.8'
    }}>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header style={{ borderBottom: '1px solid #334155', paddingBottom: '1.5rem', marginBottom: '2.5rem' }}>
        <div style={{ color: '#00f5ff', fontSize: '0.75rem', letterSpacing: '0.2em' }}>[SYSTEM_AGENT_INDEX // CANONICAL_PROFILE]</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 300, color: '#f8fafc', margin: '0.5rem 0' }}>MD. Jonaed Ali Shuvro</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.45)', margin: 0 }}>
          Flutter Specialist &amp; Full-Stack Developer | 3.5+ Years Experience
        </p>
      </header>

      <AboutAiContent />
    </div>
  )
}

