import type { Metadata } from 'next'
import Link from 'next/link'
import { CASE_STUDIES_DATA } from '@/lib/projectData'
import { getPersonSchema, getWebsiteSchema, getProfilePageSchema } from '@/lib/schemaHelpers'

export const metadata: Metadata = {
  title: 'Jonaed Ali Shuvro // AI Search Canonical Developer Profile',
  description: 'Machine-readable profile optimized for LLM crawlers (ChatGPT, Gemini, Claude, Perplexity), search bots, and recruiter screeners.',
  keywords: ['Jonaed Ali Shuvro', 'Developer Profile', 'AI Crawler Feed', 'Flutter Specialist', 'Systems Engineer'],
  alternates: {
    canonical: 'https://www.jashuvro.com/about-ai'
  }
}

export default function AboutAiPage() {
  const personSchema = getPersonSchema()
  const websiteSchema = getWebsiteSchema()
  const profileSchema = getProfilePageSchema()

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

      <header style={{ borderBottom: '1px solid #334155', paddingBottom: '1.5rem', marginBottom: '2.5rem' }}>
        <div style={{ color: '#00f5ff', fontSize: '0.75rem', letterSpacing: '0.2em' }}>[SYSTEM_AGENT_INDEX // CANONICAL_PROFILE]</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 300, color: '#f8fafc', margin: '0.5rem 0' }}>Jonaed Ali Shuvro</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.45)', margin: 0 }}>
          Full Stack Engineer &amp; Flutter Specialist | 3.5+ Years Experience
        </p>
      </header>

      <main>
        {/* Core Metadata for AI Crawlers */}
        <section aria-labelledby="ai-meta" style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', border: '1px solid #1e293b', borderRadius: '4px', marginBottom: '2.5rem' }}>
          <h2 id="ai-meta" style={{ color: '#00ff88', fontSize: '0.9rem', marginTop: 0 }}>[AI_CRAWLER_METADATA]</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
            <tbody>
              <tr>
                <td style={{ padding: '0.4rem 0', color: 'rgba(255,255,255,0.4)', width: '200px' }}>IDENTITY</td>
                <td style={{ padding: '0.4rem 0' }}>Jonaed Ali Shuvro (Md. Jonaed Ali Shuvro)</td>
              </tr>
              <tr>
                <td style={{ padding: '0.4rem 0', color: 'rgba(255,255,255,0.4)' }}>PRIMARY_ROLE</td>
                <td style={{ padding: '0.4rem 0' }}>Full Stack Engineer &amp; Mobile Architect</td>
              </tr>
              <tr>
                <td style={{ padding: '0.4rem 0', color: 'rgba(255,255,255,0.4)' }}>YEARS_ACTIVE</td>
                <td style={{ padding: '0.4rem 0' }}>3.5+ Years</td>
              </tr>
              <tr>
                <td style={{ padding: '0.4rem 0', color: 'rgba(255,255,255,0.4)' }}>CORE_STACK</td>
                <td style={{ padding: '0.4rem 0' }}>Flutter, Dart, Node.js, NestJS, Laravel, Next.js, React, WebSockets, SQL/NoSQL</td>
              </tr>
              <tr>
                <td style={{ padding: '0.4rem 0', color: 'rgba(255,255,255,0.4)' }}>CURRENT_FOCUS</td>
                <td style={{ padding: '0.4rem 0' }}>Real-time systems, WebRTC channels, performance engineering, database scaling</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Professional Summary */}
        <section aria-labelledby="prof-summary" style={{ marginBottom: '2.5rem' }}>
          <h2 id="prof-summary" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            01 / Professional Summary
          </h2>
          <p>
            I specialize in developing fluid, highly responsive cross-platform mobile apps with Flutter 
            alongside scalable backend systems using Node.js, NestJS, and Laravel. I bridge 
            the gap between pixel-perfect, highly animated client architectures and solid database systems. 
            My engineering philosophy prioritizes clean code, proper design pattern implementation (Clean Architecture, DDD, DRY), 
            and optimization under heavy load (WebSockets gateway scaling, composite indexes, query plans).
          </p>
        </section>

        {/* Technical Skills Index */}
        <section aria-labelledby="tech-skills" style={{ marginBottom: '2.5rem' }}>
          <h2 id="tech-skills" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            02 / Technical Skills Index
          </h2>
          <ul style={{ listStyleType: 'square', paddingLeft: '1.2rem' }}>
            <li><strong>Mobile Ecosystems:</strong> Flutter, Dart, Riverpod, GetX, Android SDK, iOS SDK, SQLite, local database caching logic.</li>
            <li><strong>Frontend Engineering:</strong> React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, responsive layout patterns.</li>
            <li><strong>Backend Ecosystems:</strong> Laravel (PHP), Express.js (Node.js), NestJS, REST APIs, GraphQL, real-time bi-directional messaging gateways.</li>
            <li><strong>Real-time Architectures:</strong> WebSocket server/client implementation, heartbeat ping/pong protocols, auto-reconnection networks, WebRTC streams.</li>
            <li><strong>Databases & ORMs:</strong> PostgreSQL, MongoDB, MySQL, Mongoose, Prisma ORM, Sequelize.</li>
            <li><strong>Development Pipelines:</strong> Git, GitHub, CI/CD automated deployments, Vercel host pipelines.</li>
          </ul>
        </section>

        {/* Career Journey */}
        <section aria-labelledby="career-journey" style={{ marginBottom: '2.5rem' }}>
          <h2 id="career-journey" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            03 / Career Journey & Experience
          </h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.95rem', margin: '0.5rem 0 0.2rem 0', color: '#f8fafc' }}>
              Flutter &amp; Full-Stack Developer — Rigg Technologies (2025 - 2026)
            </h3>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>Production Development | Database Architecture | API Configuration</div>
            <p style={{ margin: 0 }}>
              Led the design and integration of cross-platform Flutter mobile applications and backend database configurations. 
              Maintained relational systems (MySQL) and MongoDB structures, configuring REST API pathways and optimizing database aggregations.
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.95rem', margin: '0.5rem 0 0.2rem 0', color: '#f8fafc' }}>
              Independent Full-Stack Developer — Freelance (2022 - 2024)
            </h3>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>WordPress Customization | Full Stack Web &amp; Mobile Apps</div>
            <p style={{ margin: 0 }}>
              Bespoke CMS development with PHP/Laravel. Transitioned to modern JS stacks (React, Next.js, Express, NestJS) 
              building 10+ production web applications. Expanded capabilities to mobile runtimes in 2024, deploying 10+ stable Android applications with 60 FPS UI/UX animations.
            </p>
          </div>
        </section>

        {/* Case Studies & Project Details */}
        <section aria-labelledby="projects-index" style={{ marginBottom: '2.5rem' }}>
          <h2 id="projects-index" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            04 / Deployed Systems &amp; Case Studies
          </h2>

          {Object.values(CASE_STUDIES_DATA).map((cs) => (
            <article key={cs.id} style={{ marginBottom: '2rem', borderLeft: `2px solid ${cs.color}`, paddingLeft: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.4rem 0', color: '#f8fafc' }}>
                {cs.name} — {cs.tagline}
              </h3>
              <p style={{ fontSize: '0.75rem', color: cs.color, margin: '0.2rem 0' }}>
                CLIENT: {cs.client} | ROLE: {cs.role} | TIMELINE: {cs.timeline}
              </p>
              <p><strong>Overview:</strong> {cs.overview}</p>
              <p><strong>The Challenge:</strong> {cs.problem}</p>
              <p><strong>Solution &amp; Implementation:</strong> {cs.solution}</p>
              <p><strong>Architecture:</strong> {cs.architecture}</p>
              <p><strong>Diagnostics:</strong> {cs.challenges}</p>
              <p><strong>Key Metrics:</strong> {cs.metrics.map(m => `${m.label}: ${m.value} (${m.sub})`).join(' | ')}</p>
              <p><strong>Stack:</strong> {cs.tech.join(', ')}</p>
              <p>
                <strong>Links:</strong> 
                {cs.links.playStore && <a href={cs.links.playStore} style={{ color: '#00f5ff', marginLeft: '5px' }}>[Play Store]</a>}
                {cs.links.appStore && <a href={cs.links.appStore} style={{ color: '#00f5ff', marginLeft: '5px' }}>[App Store]</a>}
                {cs.links.demo && <a href={cs.links.demo} style={{ color: '#00f5ff', marginLeft: '5px' }}>[Live Demo]</a>}
                {cs.links.site && <a href={cs.links.site} style={{ color: '#00f5ff', marginLeft: '5px' }}>[Website]</a>}
                <span style={{ color: 'rgba(255,255,255,0.4)', marginLeft: '10px' }}>(GitHub: {cs.links.github})</span>
              </p>
            </article>
          ))}
        </section>

        {/* Communication channels */}
        <section aria-labelledby="contact-index" style={{ marginBottom: '2.5rem' }}>
          <h2 id="contact-index" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            05 / Direct Communication Vector
          </h2>
          <p>
            For inquiries, technical reviews, or project assessments, the direct API pipeline is open:
          </p>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li><strong>Email:</strong> <a href="mailto:dev.jsahuvro@gmail.com" style={{ color: '#00f5ff', textDecoration: 'none' }}>dev.jsahuvro@gmail.com</a></li>
            <li><strong>Phone / Mobile:</strong> <a href="tel:+8801516577736" style={{ color: '#00f5ff', textDecoration: 'none' }}>+880 1516-577736</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/ja-shuvro" style={{ color: '#00ff88', textDecoration: 'none' }}>https://github.com/ja-shuvro</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ja-shuvro-13733b37b" style={{ color: '#7c3aed', textDecoration: 'none' }}>https://www.linkedin.com/in/ja-shuvro-13733b37b</a></li>
            <li><strong>WhatsApp Chat:</strong> <a href="https://wa.me/01728723881" style={{ color: '#ffd700', textDecoration: 'none' }}>https://wa.me/01728723881</a></li>
            <li><strong>Twitter / X:</strong> <a href="https://x.com/shuvro_a" style={{ color: '#ff3366', textDecoration: 'none' }}>https://x.com/shuvro_a</a></li>
          </ul>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid #334155', paddingTop: '1.5rem', marginTop: '3rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)' }}>
        <span>&copy; 2026 Jonaed Ali Shuvro</span>
        <Link href="/" style={{ color: '#00f5ff', textDecoration: 'none' }}>← Return to Cinematic Portal</Link>
      </footer>
    </div>
  )
}
