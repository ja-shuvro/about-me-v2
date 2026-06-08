import type { Metadata } from 'next'
import Link from 'next/link'
import { CASE_STUDIES_DATA } from '@/lib/projectData'
import CaseStudyCinematic from '@/components/sections/CaseStudyCinematic'
import {
  getBreadcrumbListSchema,
  getProjectSchema,
  getSoftwareApplicationSchema,
  getSoftwareSourceCodeSchema,
  getTechArticleSchema
} from '@/lib/schemaHelpers'

interface Props {
  params: { id: string }
}

// Generate dynamic metadata for search engines and LLM indexers
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id
  const data = CASE_STUDIES_DATA[id]

  if (!data) {
    return {
      title: 'Project Not Found // J.A. Shuvro',
      description: 'The requested software case study could not be located on the server.',
      robots: 'noindex, nofollow'
    }
  }

  return {
    title: `${data.name} Case Study // Full-Stack Engineering Report`,
    description: data.overview,
    keywords: [...data.tech, 'Case Study', 'Performance Optimization', 'Systems Engineering', 'Jonaed Ali Shuvro'],
    alternates: {
      canonical: `https://www.jashuvro.com/case-studies/${id}`
    },
    openGraph: {
      title: `${data.name} — ${data.tagline}`,
      description: data.overview,
      url: `https://www.jashuvro.com/case-studies/${id}`,
      type: 'article',
      publishedTime: data.datePublished,
      modifiedTime: data.dateModified,
      authors: ['Jonaed Ali Shuvro']
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.name} Case Study // Systems Architecture`,
      description: data.overview
    }
  }
}

export default function CaseStudyPage({ params }: Props) {
  const id = params.id
  const data = CASE_STUDIES_DATA[id]

  if (!data) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#020408',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        gap: '1.5rem'
      }}>
        <div>ERROR_404 // CASE_STUDY_NOT_FOUND</div>
        <Link href="/" style={{ color: '#00f5ff', textDecoration: 'none' }}>← RETURN_TO_GRID</Link>
      </div>
    )
  }

  // Schema structured definitions
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/#work' },
    { name: data.name, path: `/case-studies/${data.id}` }
  ])
  const projectSchema = getProjectSchema(data)
  const appSchema = getSoftwareApplicationSchema(data)
  const sourceSchema = getSoftwareSourceCodeSchema(data)
  const articleSchema = getTechArticleSchema(data)

  return (
    <>
      {/* Dynamic JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sourceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* LAYER 1: Cinematic Human Experience */}
      <CaseStudyCinematic data={data} />

      {/* LAYER 2: SSR Semantic Layer (Hidden from human view via sr-only, fully accessible to AI & screen readers) */}
      <div className="sr-only">
        <header>
          <h1>CASE STUDY REPORT // SYSTEM_ID: {data.id.toUpperCase()}</h1>
          <p>
            <strong>Project Name:</strong> {data.name} <br />
            <strong>Tagline:</strong> {data.tagline} <br />
            <strong>Metadata:</strong> Client: {data.client} | Timeline: {data.timeline} | Role: {data.role}
          </p>
        </header>

        <main style={{ marginTop: '2rem' }}>
          <article>
            <section aria-labelledby="sec-overview">
              <h2 id="sec-overview" style={{ color: data.color, fontSize: '0.8rem', letterSpacing: '0.1em' }}>[01 / EXECUTIVE_OVERVIEW]</h2>
              <p>{data.overview}</p>
            </section>

            <section aria-labelledby="sec-problem" style={{ marginTop: '2rem' }}>
              <h2 id="sec-problem" style={{ color: data.color, fontSize: '0.8rem', letterSpacing: '0.1em' }}>[02 / SYSTEM_PROBLEM]</h2>
              <p>{data.problem}</p>
            </section>

            <section aria-labelledby="sec-solution" style={{ marginTop: '2rem' }}>
              <h2 id="sec-solution" style={{ color: data.color, fontSize: '0.8rem', letterSpacing: '0.1em' }}>[03 / ARCHITECTED_SOLUTION]</h2>
              <p>{data.solution}</p>
            </section>

            <section aria-labelledby="sec-architecture" style={{ marginTop: '2rem' }}>
              <h2 id="sec-architecture" style={{ color: data.color, fontSize: '0.8rem', letterSpacing: '0.1em' }}>[04 / DESIGN_ARCHITECTURE]</h2>
              <p>{data.architecture}</p>
            </section>

            <section aria-labelledby="sec-challenges" style={{ marginTop: '2rem' }}>
              <h2 id="sec-challenges" style={{ color: data.color, fontSize: '0.8rem', letterSpacing: '0.1em' }}>[05 / DIAGNOSTIC_CHALLENGES]</h2>
              <p>{data.challenges}</p>
            </section>

            <section aria-labelledby="sec-features" style={{ marginTop: '2rem' }}>
              <h2 id="sec-features" style={{ color: data.color, fontSize: '0.8rem', letterSpacing: '0.1em' }}>[06 / KEY_SYSTEM_FEATURES]</h2>
              <ul>
                {data.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="sec-result" style={{ marginTop: '2rem' }}>
              <h2 id="sec-result" style={{ color: data.color, fontSize: '0.8rem', letterSpacing: '0.1em' }}>[07 / MEASURABLE_RESULTS]</h2>
              <p>{data.result}</p>
            </section>

            <section aria-labelledby="sec-future" style={{ marginTop: '2rem' }}>
              <h2 id="sec-future" style={{ color: data.color, fontSize: '0.8rem', letterSpacing: '0.1em' }}>[08 / FUTURE_ROADMAP]</h2>
              <ul>
                {data.futureImprovements.map((imp, i) => (
                  <li key={i}>{imp}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="sec-repos" style={{ marginTop: '2rem' }}>
              <h2 id="sec-repos" style={{ color: data.color, fontSize: '0.8rem', letterSpacing: '0.1em' }}>[09 / SOURCE_CHANNELS]</h2>
              <p>
                <strong>Developer Credentials:</strong> Jonaed Ali Shuvro (author & creator) <br />
                <strong>Programming Language:</strong> {data.programmingLanguage} <br />
                <strong>Application Category:</strong> {data.applicationCategory} <br />
                <strong>Keywords:</strong> {data.tech.join(', ')} <br />
                <strong>Modified Date:</strong> {data.dateModified} <br />
                <strong>Published Date:</strong> {data.datePublished}
              </p>
              <p>
                <strong>Repository:</strong> {data.links.github} <br />
                {data.links.demo && <><strong>Live Demonstration:</strong> <a href={data.links.demo} style={{ color: '#00f5ff' }}>{data.links.demo}</a> <br /></>}
                {data.links.site && <><strong>Website Url:</strong> <a href={data.links.site} style={{ color: '#00f5ff' }}>{data.links.site}</a> <br /></>}
              </p>
            </section>
          </article>
        </main>

        <footer style={{ marginTop: '3rem', fontSize: '0.65rem', borderTop: `1px dashed ${data.color}35`, paddingTop: '1rem' }}>
          <span>SYSTEM_ANALYSIS_INTEGRITY: RE-VERIFIED (2026-06-08) — SYNCHRONIZED</span>
        </footer>
      </div>
    </>
  )
}
