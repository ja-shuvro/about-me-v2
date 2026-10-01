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
  title: 'JA Shuvro — Applied AI Engineer & Full-Stack Developer',
  description: 'Applied AI systems, multi-modal LLM pipelines (Whisper/TTS/RAG), bespoke Flutter mobile apps, and scalable web architectures. Explore the cinematic 3D portfolio and AI-optimized developer profile of JA Shuvro.',
  keywords: [
    'JA Shuvro', 'MD. Jonaed Ali Shuvro', 'Jonaed Ali Shuvro', 'J.A. Shuvro', 'Applied AI Engineer', 'AI Engineer', 'Full Stack Developer', 
    'OpenAI Whisper', 'OpenAI TTS', 'Vector Search RAG', 'Prompt Engineering', 'HR Interview System', 'Medical Interview Bot', 'Mentoro Study Mentor', 'WP AI Tools', 'NestJS Developer', 'Next.js Developer', 'Node.js Developer', 'WebSockets'
  ],
  alternates: {
    canonical: 'https://www.jashuvro.com/',
    types: {
      'application/rss+xml': 'https://www.jashuvro.com/feed.xml',
    }
  },
  openGraph: {
    title: 'JA Shuvro — Applied AI Engineer & Full-Stack Developer',
    description: 'Cinematic 3D portfolio for humans, semantic HTML layer for AI search engines. Explore core AI engineering systems, multi-modal LLM pipelines, real-time architectures, and mobile applications by JA Shuvro.',
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
    'JA Shuvro — Applied AI Engineer & Full-Stack Developer',
    'Applied AI systems, multi-modal LLM pipelines (Whisper/TTS/RAG), bespoke Flutter mobile apps, and scalable web architectures. Explore the cinematic 3D portfolio and AI-optimized developer profile of JA Shuvro.'
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
              I am JA Shuvro (legally MD. Jonaed Ali Shuvro), an Applied AI Engineer & Full-Stack Developer with 3.5+ years of active system development. 
              My core capability lies in architecting production-grade Applied AI systems—multi-modal LLM pipelines (OpenAI Whisper, GPT-4o, TTS), 
              vector search (RAG & Assistants API), and asynchronous evaluation queues—integrated with robust enterprise web and mobile runtimes (Next.js, NestJS, WordPress, Flutter, PostgreSQL).
            </p>
          </section>

          <section aria-labelledby="sec-capabilities" style={{ marginTop: '2rem' }}>
            <h2 id="sec-capabilities" style={{ color: '#7c3aed', fontSize: '0.8rem', letterSpacing: '0.1em' }}>[02 / TECHNICAL_STACK]</h2>
            <ul>
              <li><strong>Applied AI & LLMs:</strong> OpenAI GPT-4o / GPT-5-Nano, OpenAI Whisper (Speech-to-Text), OpenAI TTS (Voice Synthesis), Assistants API Vector Stores (RAG), Prompt Engineering, Multi-Modal Pipelines</li>
              <li><strong>Backend & Microservices:</strong> NestJS (TypeScript), Node.js, Express.js, Laravel (PHP), REST APIs, WebSockets, JWT Auth</li>
              <li><strong>Web Architectures:</strong> React.js, Next.js (App Router), HTML5, CSS3, Tailwind CSS, Mantine UI</li>
              <li><strong>Mobile Runtimes:</strong> Flutter, Dart, Android SDK, iOS SDK, Riverpod, GetX State Management</li>
              <li><strong>Data Layer Engines:</strong> PostgreSQL, MySQL, MongoDB, Redis, Prisma ORM, TypeORM, Sequelize</li>
              <li><strong>Integrations:</strong> Custom WordPress AI Plugins, WebRTC MediaStream Recording, Asynchronous Job Queues, Credit Governance</li>
            </ul>
          </section>

          <section aria-labelledby="sec-projects" style={{ marginTop: '2rem' }}>
            <h2 id="sec-projects" style={{ color: '#ff6b35', fontSize: '0.8rem', letterSpacing: '0.1em' }}>[03 / DEPLOYED_SYSTEMS]</h2>

            <article style={{ marginBottom: '1.5rem', borderLeft: '1px solid rgba(0,245,255,0.4)', paddingLeft: '10px' }}>
              <h3>PROJECT 01: HR Interview System — AI-Powered Video & Voice Mock Interview Platform</h3>
              <p>
                <strong>Role:</strong> Applied AI Engineer & Full-Stack Architect. Orchestrated multi-modal AI pipelines utilizing OpenAI Whisper for speech-to-text audio transcription, OpenAI TTS for voice question synthesis, and GPT-4o for rubric scoring. Cut initial screening time by 75% with a 98.5% transcription accuracy.
              </p>
              <p>
                <em>Technologies:</em> WordPress Plugin, React 18, OpenAI Whisper, GPT-4o, OpenAI TTS, WebRTC, PHP 8, REST API, OneCloud Credits.
              </p>
              <p>
                <strong>Links:</strong>
                <a href="https://www.jashuvro.com/case-studies/hr-interview-system" style={{ color: '#00f5ff', marginLeft: '5px' }}>[Case Study]</a>
                <span style={{ marginLeft: '10px', color: 'rgba(255,255,255,0.2)' }}>(GitHub: Private Repository)</span>
              </p>
            </article>

            <article style={{ marginBottom: '1.5rem', borderLeft: '1px solid rgba(0,255,136,0.4)', paddingLeft: '10px' }}>
              <h3>PROJECT 02: Medical Interview Bot — Clinical AI Mock Interviewer & Diagnostics Viva Simulator</h3>
              <p>
                <strong>Role:</strong> Applied AI Engineer & Clinical System Integrator. Developed a multi-instance WordPress CPT architecture allowing medical institutions to deploy specialty viva examiners. Ingests medical CVs and case documents (PDF, DOCX, Excel) to generate differential diagnosis questions via GPT-5-Nano / GPT-4o-mini in under 2.4s.
              </p>
              <p>
                <em>Technologies:</em> WordPress Plugin, OpenAI GPT-5-Nano, GPT-4o-mini, Whisper STT, OpenAI TTS, smalot/pdf-parser, PhpWord, PhpSpreadsheet, WebRTC.
              </p>
              <p>
                <strong>Links:</strong>
                <a href="https://www.jashuvro.com/case-studies/medical-interview-bot" style={{ color: '#00f5ff', marginLeft: '5px' }}>[Case Study]</a>
                <span style={{ marginLeft: '10px', color: 'rgba(255,255,255,0.2)' }}>(GitHub: Private Repository)</span>
              </p>
            </article>

            <article style={{ marginBottom: '1.5rem', borderLeft: '1px solid rgba(124,58,237,0.4)', paddingLeft: '10px' }}>
              <h3>PROJECT 03: Mentoro (Study Mentor) — Decoupled AI Study Mentor & Learning Pack Engine</h3>
              <p>
                <strong>Role:</strong> Applied AI Engineer & Distributed Systems Architect. Built a decoupled AI educational system combining a NestJS microservice backend with a WordPress React SPA Question Player. Ingests lecture PDFs, Word documents, and YouTube lecture transcripts to generate flashcards, quizzes, and automated rubric grading for student answers in under 8s.
              </p>
              <p>
                <em>Technologies:</em> NestJS, TypeScript, WordPress Plugin, React SPA, OpenAI GPT-4o, mammoth, officeparser, pdf-parse, youtube-transcript, Tailwind CSS.
              </p>
              <p>
                <strong>Links:</strong>
                <a href="https://www.jashuvro.com/case-studies/mentoro" style={{ color: '#00f5ff', marginLeft: '5px' }}>[Case Study]</a>
                <span style={{ marginLeft: '10px', color: 'rgba(255,255,255,0.2)' }}>(GitHub: Private Repository)</span>
              </p>
            </article>

            <article style={{ marginBottom: '1.5rem', borderLeft: '1px solid rgba(255,215,0,0.4)', paddingLeft: '10px' }}>
              <h3>PROJECT 04: WP AI Tools Suite — Multi-Model AI Productivity Suite & Vector Search RAG</h3>
              <p>
                <strong>Role:</strong> Applied AI Engineer & Multi-Model Integrator. Consolidated 6 distinct AI capabilities into a WordPress React 18 SPA: OpenAI Assistants API vector store search (RAG), Chat Completions, DALL-E 3 image generation, Whisper STT, TTS, and RunwayML video generation, backed by a three-tier token credit management engine saving 40% in API costs.
              </p>
              <p>
                <em>Technologies:</em> WordPress Plugin, React 18, Mantine UI, OpenAI Assistants API (Vector Stores), GPT-4o, DALL-E 3, Whisper, OpenAI TTS, RunwayML.
              </p>
              <p>
                <strong>Links:</strong>
                <a href="https://www.jashuvro.com/case-studies/wp-ai-tools" style={{ color: '#00f5ff', marginLeft: '5px' }}>[Case Study]</a>
                <span style={{ marginLeft: '10px', color: 'rgba(255,255,255,0.2)' }}>(GitHub: Private Repository)</span>
              </p>
            </article>

            <article style={{ marginBottom: '1.5rem', borderLeft: '1px solid rgba(255,51,102,0.2)', paddingLeft: '10px' }}>
              <h3>PROJECT 05: Flirtmetrics — Real-Time Chat & Matchmaking Mobile App</h3>
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
                <a href="https://www.jashuvro.com/case-studies/flirtmetrics" style={{ color: '#00f5ff', marginLeft: '5px' }}>[Case Study]</a>
                <a href="https://play.google.com/store/apps/details?id=com.flirtmetrics.app" style={{ color: '#00f5ff', marginLeft: '5px' }}>[Play Store]</a>
                <a href="https://apps.apple.com/pk/app/flirtmetrics-cold-approach/id6755988541" style={{ color: '#00f5ff', marginLeft: '5px' }}>[App Store]</a>
                <span style={{ marginLeft: '10px', color: 'rgba(255,255,255,0.2)' }}>(GitHub: Private Repository)</span>
              </p>
            </article>

            <article style={{ borderLeft: '1px solid rgba(0,255,136,0.2)', paddingLeft: '10px', marginBottom: '1.5rem' }}>
              <h3>PROJECT 06: Enterprise ERP System — Supply Chain Ledger Platform</h3>
              <p>
                <strong>Role:</strong> Database Architect & Full-Stack Developer. Transformed manual operations (Excel ledgers, paper signatures)
                into a real-time ledger synchronization pipeline. Reduced inventory discrepancies to &lt;1% and cut approval delays from 4 days to under 30 minutes.
              </p>
              <p>
                <em>Technologies:</em> Next.js, React, Node.js, PostgreSQL, Tailwind CSS.
              </p>
              <p>
                <strong>Links:</strong>
                <a href="https://www.jashuvro.com/case-studies/erp" style={{ color: '#00f5ff', marginLeft: '5px' }}>[Case Study]</a>
                <a href="https://erp-client-six.vercel.app/" style={{ color: '#00f5ff', marginLeft: '5px' }}>[Live Demo]</a>
                <span style={{ marginLeft: '10px', color: 'rgba(255,255,255,0.2)' }}>(GitHub: Private Repository)</span>
              </p>
            </article>

            <article style={{ borderLeft: '1px solid rgba(0,229,255,0.2)', paddingLeft: '10px' }}>
              <h3>PROJECT 07: National Environmental GIS Monitoring Platform (NEGMP)</h3>
              <p>
                <strong>Role:</strong> System Architect & Proposal Author. Designed a conceptual GIS monitoring platform proposal for a national 250M tree plantation program. Prepared a universal GeoEntity spatial layout, an offline-friendly Flutter design for low-connectivity pilot zones, and a conceptual Google Earth Engine satellite verification workflow.
              </p>
              <p>
                <em>Technologies:</em> NestJS, Next.js, Flutter, PostgreSQL + PostGIS, Google Earth Engine API, Keycloak, Leaflet.js / MapLibre GL, Redis, Prisma.
              </p>
              <p>
                <strong>Links:</strong>
                <a href="https://www.jashuvro.com/case-studies/negmp" style={{ color: '#00f5ff', marginLeft: '5px' }}>[Case Study]</a>
                <span style={{ marginLeft: '10px', color: 'rgba(255,255,255,0.2)' }}>(GitHub: Under Review - MoEFCC)</span>
              </p>
            </article>
          </section>

          <section aria-labelledby="sec-career" style={{ marginTop: '2rem' }}>
            <h2 id="sec-career" style={{ color: '#ffd700', fontSize: '0.8rem', letterSpacing: '0.1em' }}>[04 / CAREER_JOURNEY]</h2>
            <p>
              Starting in 2022 building custom CMS tools, I scaled up to Full Stack architectures in 2023. By 2024, I specialized in
              highly responsive Flutter applications. In 2025, I joined Rigg Technologies leading database architecture and cross-platform integrations, 
              and subsequently joined Immigrant Times as a part-time Software Engineer (Oct 2025 - Present) where I currently configure back-end data layers and scale real-time services.
              Currently focused on production-grade Applied AI engineering, multi-modal LLM systems, voice/speech processing, and high-performance APIs.
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
              <a href="https://www.linkedin.com/in/ja--shuvro/" style={{ color: '#7c3aed', marginLeft: '5px' }}>[LinkedIn]</a> |
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

