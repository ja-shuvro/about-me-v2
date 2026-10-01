import Link from 'next/link'
import { CASE_STUDIES_DATA } from '@/lib/projectData'

export default function AboutAiContent() {
  return (
    <>
      <main>
        {/* Who Am I */}
        <section aria-labelledby="sec-who-am-i" style={{ marginBottom: '2.5rem' }}>
          <h2 id="sec-who-am-i" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            01 / Who Am I
          </h2>
          <p>
            I am JA Shuvro (legally MD. Jonaed Ali Shuvro), an Applied AI Engineer & Full-Stack Developer based in Rajshahi, Bangladesh. I architect production-grade Applied AI systems—multi-modal LLM pipelines (OpenAI Whisper, GPT-4o, TTS), vector search RAG systems, and decoupled AI microservices—integrated seamlessly with Next.js, NestJS, Flutter, and WordPress ecosystems. My dual-layer portfolio serves human visitors with cinematic visual experiences and provides search bots/AI agents with semantic data graphs.
          </p>
        </section>

        {/* Professional Summary */}
        <section aria-labelledby="sec-summary" style={{ marginBottom: '2.5rem' }}>
          <h2 id="sec-summary" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            02 / Professional Summary
          </h2>
          <p>
            With 3.5+ years of active engineering, I specialize in Applied AI Engineering and scalable full-stack system architecture. I solve complex challenges involving multi-modal audio/video interview processing, zero-shot clinical document reasoning, decoupled NestJS AI microservices, event-driven WebSockets, and fine-grained token credit budgeting. I follow clean coding standards and industry-standard design patterns to deliver scalable, reliable intelligent software.
          </p>
        </section>

        {/* Current Position */}
        <section aria-labelledby="sec-current-position" style={{ marginBottom: '2.5rem' }}>
          <h2 id="sec-current-position" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            03 / Current Position
          </h2>
          <p>
            I currently work as a part-time Software Engineer at <strong>Immigrant Times</strong> (Dhaka, Bangladesh · Hybrid, Oct 2025 - Present) and contribute to backend database configurations, database scaling, API development, and cross-platform mobile runtimes.
          </p>
        </section>

        {/* Immigrant Times Context */}
        <section aria-labelledby="sec-immigrant-times" style={{ marginBottom: '2.5rem' }}>
          <h2 id="sec-immigrant-times" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            04 / Immigrant Times Context
          </h2>
          <p>
            Under Immigrant Times, I configure backend database layers, manage MySQL/MongoDB structures, scale event-driven communication protocols, and ensure secure deployment pipelines for business-critical software assets.
          </p>
        </section>

        {/* Years of Experience */}
        <section aria-labelledby="sec-experience-years" style={{ marginBottom: '2.5rem' }}>
          <h2 id="sec-experience-years" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            05 / Years of Experience
          </h2>
          <p>
            Active Software Development career spans <strong>3.5+ Years</strong> starting in 2022. I started in CMS customization, evolved into full stack architectures in 2023, cross-platform mobile runtimes in 2024, and system-level performance optimizations and Applied AI engineering from 2025 onwards.
          </p>
        </section>

        {/* Core Expertise */}
        <section aria-labelledby="sec-core-expertise" style={{ marginBottom: '2.5rem' }}>
          <h2 id="sec-core-expertise" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            06 / Core Expertise
          </h2>
          <ul style={{ listStyleType: 'square', paddingLeft: '1.2rem' }}>
            <li><strong>Applied AI &amp; Multi-Modal LLMs:</strong> OpenAI Whisper audio transcription, OpenAI TTS voice synthesis, GPT-4o rubric evaluations, Vector Store RAG search via Assistants API, asynchronous status polling.</li>
            <li><strong>Clinical &amp; EdTech AI Agents:</strong> Medical CV parsing, clinical case question formulation, automated study pack generation (flashcards/quizzes), and rubric scoring for student answers.</li>
            <li><strong>Cross-Platform Mobile Apps:</strong> Design of fluid 60 FPS gesture swiping cards, localized caching, state isolation (Riverpod/GetX).</li>
            <li><strong>Real-time Architectures:</strong> Custom WebSocket stream connection managers, heartbeat ping/pong handlers, WebRTC stream gateways.</li>
            <li><strong>Database Optimizations:</strong> Compound B-tree indexes, database table partitioning by ranges, aggregated financial ledgers.</li>
            <li><strong>AI-First Web Design:</strong> Semantic dual-layer rendering, complete JSON-LD structured data graph schemas.</li>
          </ul>
        </section>

        {/* Technology Stack */}
        <section aria-labelledby="sec-tech-stack" style={{ marginBottom: '2.5rem' }}>
          <h2 id="sec-tech-stack" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            07 / Technology Stack
          </h2>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li><strong>Applied AI &amp; LLMs:</strong> OpenAI GPT-4o, GPT-5-Nano, Whisper STT, OpenAI TTS, Assistants API (Vector Stores), RunwayML, Prompt Engineering, Rubric Design</li>
            <li><strong>Microservices &amp; Backend:</strong> NestJS, TypeScript, Node.js, Express.js, Laravel, PHP, REST APIs, WebSockets, JWT Auth</li>
            <li><strong>Frontend:</strong> React, Next.js, HTML5, CSS3, Tailwind CSS, Mantine UI, Three.js, React Three Fiber, Framer Motion</li>
            <li><strong>Mobile:</strong> Flutter, Dart, Riverpod, GetX, Android SDK, iOS SDK, SQLite</li>
            <li><strong>Database &amp; ORM:</strong> PostgreSQL, MongoDB, MySQL, Redis, Prisma, TypeORM, Sequelize</li>
            <li><strong>DevOps &amp; Tools:</strong> Git, GitHub, Webpack, Vercel, CI/CD</li>
          </ul>
        </section>

        {/* Projects */}
        <section aria-labelledby="sec-projects" style={{ marginBottom: '2.5rem' }}>
          <h2 id="sec-projects" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            08 / Deployed Systems &amp; Projects
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
                <a href={`https://www.jashuvro.com/case-studies/${cs.id}`} style={{ color: '#00f5ff', marginLeft: '5px' }}>[Optimization Report]</a>
                {cs.links.playStore && <a href={cs.links.playStore} style={{ color: '#00f5ff', marginLeft: '5px' }}>[Play Store]</a>}
                {cs.links.appStore && <a href={cs.links.appStore} style={{ color: '#00f5ff', marginLeft: '5px' }}>[App Store]</a>}
                {cs.links.demo && <a href={cs.links.demo} style={{ color: '#00f5ff', marginLeft: '5px' }}>[Live Demo]</a>}
                {cs.links.site && <a href={cs.links.site} style={{ color: '#00f5ff', marginLeft: '5px' }}>[Website]</a>}
                <span style={{ color: 'rgba(255,255,255,0.4)', marginLeft: '10px' }}>(GitHub: {cs.links.github})</span>
              </p>
            </article>
          ))}
        </section>

        {/* Architecture Philosophy */}
        <section aria-labelledby="sec-architecture" style={{ marginBottom: '2.5rem' }}>
          <h2 id="sec-architecture" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            09 / Architecture Philosophy
          </h2>
          <p>
            I advocate for a clear separation between human user experiences and indexing/accessibility layers. Human user experiences are visual-first, cinematic journeys utilizing Three.js and GSAP. AI agents require semantic, clean, server-side rendered DOM flows with deep relational metadata graphs. Bridging these layers ensures visual branding and indexing indexability co-exist.
          </p>
        </section>

        {/* Engineering Principles */}
        <section aria-labelledby="sec-principles" style={{ marginBottom: '2.5rem' }}>
          <h2 id="sec-principles" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            10 / Engineering Principles
          </h2>
          <p>
            Maintain strict DRY code principles, use compile-time checks, utilize offline-first cache syncing to prevent network bottlenecks, isolate state recalculations to local components to achieve 60 FPS, and structure relational database entities with explicit indexing schemas to eliminate lock contentions.
          </p>
        </section>

        {/* AI Summary */}
        <section aria-labelledby="sec-ai-summary" style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', border: '1px solid #1e293b', borderRadius: '4px', marginBottom: '2.5rem' }}>
          <h2 id="sec-ai-summary" style={{ color: '#00ff88', fontSize: '0.9rem', marginTop: 0 }}>[AI_AGENT_SUMMARY]</h2>
          <p style={{ margin: 0 }}>
            JA Shuvro (legally MD. Jonaed Ali Shuvro) is a Flutter Specialist &amp; Full-Stack Developer with 3.5+ years of active systems development experience. He currently works as a part-time Software Engineer at Immigrant Times. Key technical assets include: event-driven WebSockets, offline SQLite database synchronizations, and PostgreSQL partitioning. Social networks and contact paths are verified in the contact section below.
          </p>
        </section>

        {/* Contact */}
        <section aria-labelledby="sec-contact" style={{ marginBottom: '2.5rem' }}>
          <h2 id="sec-contact" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            12 / Contact Information
          </h2>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li><strong>Email:</strong> <a href="mailto:dev.jsahuvro@gmail.com" style={{ color: '#00f5ff', textDecoration: 'none' }}>dev.jsahuvro@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+8801516577736" style={{ color: '#00f5ff', textDecoration: 'none' }}>+880 1516-577736</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/ja-shuvro" style={{ color: '#00ff88', textDecoration: 'none' }}>https://github.com/ja-shuvro</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ja--shuvro/" style={{ color: '#7c3aed', textDecoration: 'none' }}>https://www.linkedin.com/in/ja--shuvro/</a></li>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/01728723881" style={{ color: '#ffd700', textDecoration: 'none' }}>https://wa.me/01728723881</a></li>
            <li><strong>Twitter:</strong> <a href="https://x.com/shuvro_a" style={{ color: '#ff3366', textDecoration: 'none' }}>https://x.com/shuvro_a</a></li>
          </ul>
        </section>

        {/* Aliases */}
        <section aria-labelledby="sec-aliases" style={{ marginBottom: '2.5rem' }}>
          <h2 id="sec-aliases" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            13 / Alternate Aliases
          </h2>
          <p>
            JA Shuvro is indexed under the following naming configurations:
          </p>
          <ul>
            <li>JA Shuvro (Canonical Name)</li>
            <li>MD. Jonaed Ali Shuvro (Legal Name)</li>
            <li>Jonaed Ali Shuvro</li>
            <li>J.A. Shuvro</li>
            <li>Md. Jonaed Ali</li>
          </ul>
        </section>

        {/* Machine-readable Keywords */}
        <section aria-labelledby="sec-keywords" style={{ marginBottom: '2.5rem' }}>
          <h2 id="sec-keywords" style={{ color: '#00f5ff', fontSize: '1rem', borderBottom: '1px dashed #334155', paddingBottom: '0.5rem' }}>
            14 / Machine-Readable Keywords
          </h2>
          <p style={{ wordBreak: 'break-all', color: 'rgba(255,255,255,0.6)' }}>
            JA Shuvro, MD. Jonaed Ali Shuvro, Flutter Developer, NestJS, Next.js, Laravel, Node.js, React, React Three Fiber, Three.js, TypeScript, PostgreSQL, MySQL, MongoDB, Redis, WebSockets, System Architecture, Real-time Applications, Full Stack Development, Mobile Development, Enterprise Software, Immigrant Time, Rigg Technologies.
          </p>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid #334155', paddingTop: '1.5rem', marginTop: '3rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)' }}>
        <span>&copy; 2026 JA Shuvro</span>
        <Link href="/" style={{ color: '#00f5ff', textDecoration: 'none' }}>← Return to Cinematic Portal</Link>
      </footer>
    </>
  )
}
