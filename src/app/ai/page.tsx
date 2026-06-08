import type { Metadata } from 'next'
import {
  getPersonSchema,
  getWebsiteSchema,
  getProfilePageSchema,
  getBreadcrumbListSchema,
  getOrganizationSchema,
  getWebPageSchema,
  getGraphSchema
} from '@/lib/schemaHelpers'
import AboutAiContent from '@/components/sections/AboutAiContent'

export const metadata: Metadata = {
  title: 'JA Shuvro // AI Search Canonical Developer Profile Summary',
  description: 'Machine-readable profile summary optimized for LLM crawlers (ChatGPT, Gemini, Claude, Perplexity), search bots, and recruiter screeners.',
  keywords: ['JA Shuvro', 'MD. Jonaed Ali Shuvro', 'Developer Profile', 'AI Crawler Feed', 'Flutter Specialist', 'Systems Engineer'],
  alternates: {
    canonical: 'https://www.jashuvro.com/ai'
  },
  other: {
    author: 'JA Shuvro',
    creator: 'JA Shuvro',
    publisher: 'JA Shuvro',
    copyrightHolder: 'JA Shuvro',
  }
}

export default function AiSummaryPage() {
  const personNode = getPersonSchema()
  const orgNode = getOrganizationSchema()
  const websiteNode = getWebsiteSchema()
  const webpageNode = getWebPageSchema(
    'https://www.jashuvro.com/ai',
    'JA Shuvro // AI Search Canonical Developer Profile Summary',
    'Machine-readable profile summary optimized for LLM crawlers (ChatGPT, Gemini, Claude, Perplexity), search bots, and recruiter screeners.'
  )
  const profileNode = getProfilePageSchema()
  const breadcrumbNode = getBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'AI Summary', path: '/ai' }
  ])

  const graphSchema = getGraphSchema([
    personNode,
    orgNode,
    websiteNode,
    webpageNode,
    profileNode,
    breadcrumbNode
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
      {/* Unified JSON-LD Graph for AI & Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />

      <header style={{ borderBottom: '1px solid #334155', paddingBottom: '1.5rem', marginBottom: '2.5rem' }}>
        <div style={{ color: '#00f5ff', fontSize: '0.75rem', letterSpacing: '0.2em' }}>[SYSTEM_AGENT_INDEX // CANONICAL_SUMMARY]</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 300, color: '#f8fafc', margin: '0.5rem 0' }}>JA Shuvro</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.45)', margin: 0 }}>
          Flutter Specialist &amp; Full-Stack Developer | 3.5+ Years Experience
        </p>
      </header>

      <AboutAiContent />
    </div>
  )
}

