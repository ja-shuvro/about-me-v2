import type { Metadata } from 'next'
import CinematicExperience from '@/components/sections/CinematicExperience'
import {
  getPersonSchema,
  getWebsiteSchema,
  getPortfolioSchema,
  getBreadcrumbListSchema,
  getOrganizationSchema,
  getWebPageSchema,
  getGraphSchema
} from '@/lib/schemaHelpers'
import { CASE_STUDIES_DATA } from '@/lib/projectData'

export const metadata: Metadata = {
  title: 'JA Shuvro — Flutter Specialist & Full-Stack Developer',
  description: 'Bespoke Flutter mobile apps and high-performance Web architecture. Explore the cinematic 3D portfolio and AI-optimized developer profile of JA Shuvro.',
  keywords: [
    'JA Shuvro', 'MD. Jonaed Ali Shuvro', 'Jonaed Ali Shuvro', 'J.A. Shuvro', 'Flutter Specialist', 'Full Stack Developer', 
    'Laravel Developer', 'Next.js Developer', 'Node.js Developer', 'WebSockets', 'Real-time Systems'
  ],
  alternates: {
    canonical: 'https://www.jashuvro.com/',
    types: {
      'application/rss+xml': 'https://www.jashuvro.com/feed.xml',
    }
  },
  openGraph: {
    title: 'JA Shuvro — Flutter Specialist & Full-Stack Developer',
    description: 'Cinematic 3D portfolio for humans, semantic HTML layer for AI search engines. Explore core engineering systems, real-time architectures, and mobile applications by JA Shuvro.',
    url: 'https://www.jashuvro.com/',
    type: 'website'
  }
}

export default function Home() {
  const personNode = getPersonSchema()
  const orgNode = getOrganizationSchema()
  const websiteNode = getWebsiteSchema()
  const webpageNode = getWebPageSchema(
    'https://www.jashuvro.com/',
    'JA Shuvro — Flutter Specialist & Full-Stack Developer',
    'Bespoke Flutter mobile apps and high-performance Web architecture. Explore the cinematic 3D portfolio and AI-optimized developer profile of JA Shuvro.'
  )
  const portfolioNode = getPortfolioSchema(Object.values(CASE_STUDIES_DATA))
  const breadcrumbNode = getBreadcrumbListSchema([{ name: 'Home', path: '/' }])

  const graphSchema = getGraphSchema([
    personNode,
    orgNode,
    websiteNode,
    webpageNode,
    portfolioNode,
    breadcrumbNode
  ])

  return (
    <>
      {/* Unified JSON-LD Graph for AI & Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />

      {/* LAYER 1: Cinematic Human Experience */}
      <CinematicExperience />

      {/* LAYER 2: SSR Semantic Layer (Hidden from human view via sr-only, fully accessible to AI & screen readers) */}
      <div className="sr-only">
        <header>
          <h1>SYSTEM LOG // DEVELOPER INDEX: JA SHUVRO</h1>
          <nav aria-label="System Directory">
            <span style={{ color: '#00f5ff' }}>[DIRECTORIES]</span>:
            <a href="https://www.jashuvro.com/about-ai" style={{ color: 'rgba(255,255,255,0.6)', marginLeft: '10px' }}>/about-ai (AI Summary)</a> |
            <a href="https://www.jashuvro.com/feed.xml" style={{ color: 'rgba(255,255,255,0.6)', marginLeft: '10px' }}>/feed.xml (RSS)</a> |
            <a href="https://www.jashuvro.com/llms.txt" style={{ color: 'rgba(255,255,255,0.6)', marginLeft: '10px' }}>/llms.txt (LLM text)</a> |
            <a href="https://www.jashuvro.com/humans.txt" style={{ color: 'rgba(255,255,255,0.6)', marginLeft: '10px' }}>/humans.txt (Credits)</a>
          </nav>
        </header>

        <main style={{ marginTop: '2rem' }}>
          <section aria-labelledby="sec-bio">
            <h2 id="sec-bio" style={{ color: '#00ff88', fontSize: '0.8rem', letterSpacing: '0.1em' }}>[01 / PROFILE_SUMMARY]</h2>
            <p>
              I am JA Shuvro (legally MD. Jonaed Ali Shuvro), a Flutter Specialist & Full-Stack Developer with 3.5+ years of active system development. 
              My core capability lies in bridging fluid front-end mobile user experiences (built with Flutter, Riverpod, and GetX) 
              with robust, enterprise-grade backends (Node.js, Laravel, NestJS, MySQL, PostgreSQL).
            </p>
          </section>

          <section aria-labelledby="sec-capabilities" style={{ marginTop: '2rem' }}>
            <h2 id="sec-capabilities" style={{ color: '#7c3aed', fontSize: '0.8rem', letterSpacing: '0.1em' }}>[02 / TECHNICAL_STACK]</h2>
            <ul>
              <li><strong>Mobile Runtimes:</strong> Flutter, Dart, Android SDK, iOS SDK, Riverpod, GetX State Management</li>
              <li><strong>Web Architectures:</strong> React.js, Next.js (App Router), HTML5, CSS3, Tailwind CSS, Bootstrap</li>
              <li><strong>Backend Frameworks:</strong> Laravel (PHP), NestJS, Express.js (Node.js), REST APIs, WebSockets</li>
              <li><strong>Data Layer Engines:</strong> PostgreSQL, MongoDB, MySQL, Mongoose, Prisma ORM, Sequelize</li>
              <li><strong>Integrations:</strong> Real-time bi-directional systems, WebRTC, custom WordPress plugins</li>
            </ul>
          </section>

          <section aria-labelledby="sec-projects" style={{ marginTop: '2rem' }}>
            <h2 id="sec-projects" style={{ color: '#ff6b35', fontSize: '0.8rem', letterSpacing: '0.1em' }}>[03 / DEPLOYED_SYSTEMS]</h2>

            <article style={{ marginBottom: '1.5rem', borderLeft: '1px solid rgba(255,51,102,0.2)', paddingLeft: '10px' }}>
              <h3>PROJECT 01: Flirtmetrics — Real-Time Chat & Matchmaking Mobile App</h3>
              <p>
                <strong>Role:</strong> Mobile Specialist & Flutter Lead. Optimized UI card swiping to achieve a stable 60 FPS
                by isolating Riverpod state rebuilds. Resolved 8-second chat delivery latency issues by transitioning the application
                to event-driven WebSockets and local SQLite cache.
              </p>
              <p>
                <em>Technologies:</em> Flutter, Riverpod, WebSockets, SQLite, Firebase, REST.
              </p>
              <p>
                <strong>Links:</strong>
                <a href="https://www.jashuvro.com/case-studies/flirtmetrics" style={{ color: '#00f5ff', marginLeft: '5px' }}>[Optimization Report]</a>
                <a href="https://play.google.com/store/apps/details?id=com.flirtmetrics.app" style={{ color: '#00f5ff', marginLeft: '5px' }}>[Play Store]</a>
                <a href="https://apps.apple.com/pk/app/flirtmetrics-cold-approach/id6755988541" style={{ color: '#00f5ff', marginLeft: '5px' }}>[App Store]</a>
                <span style={{ marginLeft: '10px', color: 'rgba(255,255,255,0.2)' }}>(GitHub: Private Repository)</span>
              </p>
            </article>

            <article style={{ borderLeft: '1px solid rgba(0,255,136,0.2)', paddingLeft: '10px' }}>
              <h3>PROJECT 02: Enterprise ERP System — Supply Chain Ledger Platform</h3>
              <p>
                <strong>Role:</strong> Database Architect & Full-Stack Developer. Transformed manual operations (Excel ledgers, paper signatures)
                into a real-time ledger synchronization pipeline. Reduced inventory discrepancies to &lt;1% and cut approval delays from 4 days to under 30 minutes.
              </p>
              <p>
                <em>Technologies:</em> Next.js, React, Node.js, PostgreSQL, Tailwind CSS.
              </p>
              <p>
                <strong>Links:</strong>
                <a href="https://www.jashuvro.com/case-studies/erp" style={{ color: '#00f5ff', marginLeft: '5px' }}>[Performance Report]</a>
                <a href="https://erp-client-six.vercel.app/" style={{ color: '#00f5ff', marginLeft: '5px' }}>[Live Demo]</a>
                <span style={{ marginLeft: '10px', color: 'rgba(255,255,255,0.2)' }}>(GitHub: Private Repository)</span>
              </p>
            </article>
          </section>

          <section aria-labelledby="sec-career" style={{ marginTop: '2rem' }}>
            <h2 id="sec-career" style={{ color: '#ffd700', fontSize: '0.8rem', letterSpacing: '0.1em' }}>[04 / CAREER_JOURNEY]</h2>
            <p>
              Starting in 2022 building custom CMS tools, I scaled up to Full Stack architectures in 2023. By 2024, I specialized in
              highly responsive Flutter applications. In 2025-2026, I joined Rigg Technologies, leading production database architecture
              and cross-platform integrations. Currently focused on complex real-time systems, WebRTC communications, and high-performance APIs.
            </p>
          </section>

          <section aria-labelledby="sec-contact" style={{ marginTop: '2rem' }}>
            <h2 id="sec-contact" style={{ color: '#ff3366', fontSize: '0.8rem', letterSpacing: '0.1em' }}>[05 / COMMUNICATIONS_VECTOR]</h2>
            <p>
              Direct contact pipeline open:
              Email: <a href="mailto:dev.jsahuvro@gmail.com" style={{ color: '#00f5ff' }}>dev.jsahuvro@gmail.com</a> |
              Phone: <a href="tel:+8801516577736" style={{ color: '#00f5ff' }}>+880 1516-577736</a>
            </p>
            <p>
              Social channels:
              <a href="https://github.com/ja-shuvro" style={{ color: '#00ff88', marginLeft: '5px' }}>[GitHub]</a> |
              <a href="https://www.linkedin.com/in/ja-shuvro-13733b37b" style={{ color: '#7c3aed', marginLeft: '5px' }}>[LinkedIn]</a> |
              <a href="https://wa.me/01728723881" style={{ color: '#ffd700', marginLeft: '5px' }}>[WhatsApp]</a> |
              <a href="https://x.com/shuvro_a" style={{ color: '#ff3366', marginLeft: '5px' }}>[Twitter]</a>
            </p>
          </section>
        </main>

        <footer style={{ marginTop: '3rem', fontSize: '0.65rem', borderTop: '1px dashed rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>INDEX_INTEGRITY: SECURE // RE-VERIFIED FOR LLM PARSING (2026-06-08)</span>
        </footer>
      </div>
    </>
  )
}

