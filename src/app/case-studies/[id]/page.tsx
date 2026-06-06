'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import CustomCursor from '@/components/ui/CustomCursor'

const CASE_STUDY_DATA = {
  flirtmetrics: {
    name: 'Flirtmetrics',
    tagline: 'Event-Driven Real-Time Matchmaking & Chat Optimization',
    client: 'Dating Startup',
    timeline: '3 Months (2024)',
    role: 'Mobile Specialist & Flutter Developer',
    color: '#ff3366',
    metrics: [
      { label: 'Chat Latency', value: '<200ms', sub: 'from 8.2s delay' },
      { label: 'UI Frame Rate', value: '60 FPS', sub: 'stable swiping' },
      { label: 'User Retention', value: '+32%', sub: 'post-release analytics' },
      { label: 'App Rating', value: '4.8★', sub: 'iOS & Play Store' },
    ],
    tech: ['Flutter', 'Riverpod', 'WebSockets', 'SQLite', 'Firebase', 'REST API'],
    summary: 'Optimized a dating app matchmaking page and real-time chat infrastructure. Resolved critical UI thread blockages causing MATCH cards to freeze on swipe, and reduced chat delivery latency from 8 seconds to near-instantaneous (under 200ms) by replacing HTTP polling with WebSockets.',
    challenge: 'Flirtmetrics was experiencing severe churn during peak hours. When users swiped match cards, the UI would freeze for up to 1.5 seconds due to synchronous Riverpod state rebuilds of the entire card deck. Simultaneously, chat messages took up to 8 seconds to deliver because the client relied on continuous HTTP short-polling, which overwhelmed the network thread and triggered API rate limits.',
    research: 'Using Dart DevTools and thread profile diagnostics, we tracked the CPU allocation. We discovered that swiping a single card caused the entire list layout of 50+ matches to re-evaluate and rebuild. On the network side, request logs showed that 92% of the HTTP polling requests returned empty responses, wasting bandwidth and blocking the browser/mobile network queues.',
    strategy: '1. Event-Driven Messaging: Transitioned the app messaging protocol to WebSockets using a lightweight gateway to handle bidirectionally pushed messages.\n2. Card-Level Rebuild Isolations: Refactored the swiping deck state to isolate swipe events. Rebuilt only the swiped card instead of the entire deck.\n3. Local Database Caching: Integrated a local SQLite cache so chat history loads instantly offline, eliminating remote API dependencies.',
    solution: 'Designed and deployed a custom WebSocket client connection manager in Flutter with automatic heartbeat pinging and auto-reconnection fallback logic. Integrated a local synchronization pipeline that queries local database indexes for instant rendering while background threads sync new messages. Rewrote the card swiping widget using Framer-equivalent Flutter animations with isolated state listeners.',
    images: [
      '/flirtmetrics/thumbnail.png',
      '/flirtmetrics/slide1.png',
      '/flirtmetrics/slide2.png',
      '/flirtmetrics/slide3.png',
      '/flirtmetrics/slide4.png',
      '/flirtmetrics/slide5.png'
    ]
  },
  erp: {
    name: 'ERP Platform',
    tagline: 'Enterprise Supply Chain & Ledger Performance Engineering',
    client: 'Agro-Industrial Corp',
    timeline: '5 Months (2025)',
    role: 'Full-Stack Developer & Database Architect',
    color: '#00ff88',
    metrics: [
      { label: 'Stock Error Rate', value: '<0.8%', sub: 'from 24% discrepancies' },
      { label: 'Order Processing', value: '<30m', sub: 'from 4-day delays' },
      { label: 'Approval Speed', value: 'Instant', sub: 'automated workflows' },
      { label: 'Sales Velocity', value: '+18%', sub: 'dealer hub metrics' },
    ],
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    summary: 'Engineered a highly responsive enterprise resource planning system for stock allocation, accounting audits, and auto-dispatched dealer approvals. Cut down inventory sync errors to near-zero and automated orders workflow.',
    challenge: 'A large agro-industrial firm managing 100+ dealers was relying on manual Excel ledgers and paper signatures for order approvals. This resulted in an average 24% inventory discrepancy between warehouses, and a 4-day latency to process single orders. Ledgers took minutes to generate because raw SQL queries scanned millions of unindexed records.',
    research: 'We audited the operational workflow and discovered that delays were caused by sequential manual approvals (Manager -> Accountant -> Dispatcher). A single bottleneck halted the entire order. Profiling the PostgreSQL database revealed multiple full table scans and lock contentions on the transactions ledger tables.',
    strategy: '1. Parallel Automated Workflows: Designed a rule-based state machine that routes approval notifications in parallel based on order value.\n2. Indexed Financial Ledger: Created aggregate database views and added compound indexes on ledger dates and dealer IDs.\n3. Dealer Portal Dashboard: Designed a real-time, lightweight Next.js client for dealers to view allocations and submit stock updates.',
    solution: 'Built a multi-level state-routing service in Node.js that pushes real-time notification alerts (via WebSockets) to approval authorities. Implemented compound B-tree database indexing in PostgreSQL and partitioned the transaction logs table by financial quarters. Developed a fast, glassmorphic React dashboard for dealer terminals featuring offline service worker synchronization.',
    images: [
      '/erp/dashboard.png',
      '/erp/login.png',
      '/erp/report.png',
      '/erp/stock-level.png',
      '/erp/notification.png'
    ]
  }
}

export default function CaseStudyPage() {
  const { id } = useParams()
  const data = CASE_STUDY_DATA[id as keyof typeof CASE_STUDY_DATA]

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

  return (
    <main style={{
      minHeight: '100vh',
      background: '#020408',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      padding: '4rem 2rem',
      position: 'relative'
    }}>
      {/* Custom cursor matching case study accent color */}
      <CustomCursor colorOverride={data.color} />
      {/* Background ambient light */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '25%',
        width: '50%',
        height: '400px',
        background: `radial-gradient(circle, ${data.color}15 0%, transparent 70%)`,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Back Link */}
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.4)',
          textDecoration: 'none',
          letterSpacing: '0.15em',
          marginBottom: '3rem',
          transition: 'color 0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.color = data.color}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
        >
          ← RETURN_TO_SYSTEM
        </Link>

        {/* Phase Header */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: data.color,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          CASE_STUDY_REPORT // SYSTEM_ANALYSIS
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 300,
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em'
        }}>
          {data.name}
          <br />
          <span style={{ color: data.color, fontSize: '0.7em' }}>{data.tagline}</span>
        </h1>

        {/* Grid Metadata */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          padding: '1.5rem',
          background: 'rgba(2,4,8,0.55)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '2px',
          marginBottom: '3rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem'
        }}>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.3)', marginBottom: '0.2rem' }}>CLIENT</div>
            <div style={{ color: '#fff' }}>{data.client}</div>
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.3)', marginBottom: '0.2rem' }}>TIMELINE</div>
            <div style={{ color: '#fff' }}>{data.timeline}</div>
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.3)', marginBottom: '0.2rem' }}>ROLE</div>
            <div style={{ color: '#fff' }}>{data.role}</div>
          </div>
        </div>

        {/* Key Metrics */}
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.6rem',
          fontWeight: 300,
          marginBottom: '1.5rem',
          color: '#fff'
        }}>
          Measurable Transformation Metrics
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '4rem'
        }}>
          {data.metrics.map((m, idx) => (
            <div key={idx} style={{
              padding: '1.5rem',
              background: 'rgba(2,4,8,0.5)',
              backdropFilter: 'blur(8px)',
              border: `1px solid ${data.color}35`,
              borderRadius: '2px'
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.2rem',
                color: data.color,
                fontWeight: 300
              }}>{m.value}</div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
                marginTop: '0.4rem',
                letterSpacing: '0.05em'
              }}>{m.label}</div>
              <div style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.3)',
                marginTop: '0.2rem'
              }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Report Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '4rem' }}>
          <div>
            <h3 style={sectionTitleStyle}>01 / Executive Summary</h3>
            <p style={paragraphStyle}>{data.summary}</p>
          </div>

          <div>
            <h3 style={sectionTitleStyle}>02 / The Challenge</h3>
            <p style={paragraphStyle}>{data.challenge}</p>
          </div>

          <div>
            <h3 style={sectionTitleStyle}>03 / Research & Diagnostics</h3>
            <p style={paragraphStyle}>{data.research}</p>
          </div>

          <div>
            <h3 style={sectionTitleStyle}>04 / Architecture & Strategy</h3>
            <div style={paragraphStyle}>
              {data.strategy.split('\n').map((line, index) => (
                <div key={index} style={{ marginBottom: '0.8rem' }}>{line}</div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={sectionTitleStyle}>05 / Implementation & Solution</h3>
            <p style={paragraphStyle}>{data.solution}</p>
          </div>

          <div>
            <h3 style={sectionTitleStyle}>06 / Technology Pipeline Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              {data.tech.map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: data.color,
                  padding: '0.3rem 0.8rem',
                  border: `1px solid ${data.color}35`,
                  background: `${data.color}08`,
                  borderRadius: '1px'
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshots Showcase */}
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.6rem',
          fontWeight: 300,
          marginBottom: '1.5rem',
          color: '#fff',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '3rem'
        }}>
          System Visualizations
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {data.images.map((img, index) => (
            <div key={index} style={{
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              aspectRatio: '16/10',
              background: 'rgba(0,0,0,0.4)'
            }}>
              <img
                src={img}
                alt={`${data.name} visual ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.8,
                  transition: 'transform 0.5s, opacity 0.5s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.opacity = '1'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.opacity = '0.8'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

/* Styles */
const sectionTitleStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.75rem',
  color: 'rgba(255,255,255,0.4)',
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  marginBottom: '1rem',
  borderBottom: '1px solid rgba(255,255,255,0.04)',
  paddingBottom: '0.4rem'
}

const paragraphStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  color: 'rgba(255,255,255,0.7)',
  lineHeight: 1.8,
  letterSpacing: '0.01em'
}
