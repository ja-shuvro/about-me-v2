'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const CASE_STUDIES = [
  {
    id: 'flirtmetrics',
    name: 'Flirtmetrics',
    client: 'DATING PLATFORM',
    challenge: 'A growing cross-platform mobile dating application, Flirtmetrics, was experiencing matchmaking screens freezing and real-time chat delays up to 8 seconds, directly causing user churn.',
    phases: [
      {
        phase: 'PROBLEM',
        icon: '◈',
        color: '#ff3366',
        content: 'Diagnostics revealed that heavy API polling clogged the network thread. Concurrently, unoptimized state rebuilding lockups on matching pages froze the UI thread.',
        metric: '8s chat latency',
      },
      {
        phase: 'RESEARCH',
        icon: '◉',
        color: '#00ff88',
        content: 'Profiled Flutter thread allocation using Dart DevTools. Identified multiple redundant widget rebuilds under Riverpod and constant high-frequency HTTP requests.',
        metric: 'Thread profiling',
      },
      {
        phase: 'STRATEGY',
        icon: '◬',
        color: '#7c3aed',
        content: 'Migrated from polling to WebSockets for instant message synchronization. Redesigned matching page state management to rebuild only the cards being swiped.',
        metric: 'Event-driven flow',
      },
      {
        phase: 'SOLUTION',
        icon: '◆',
        color: '#ff6b35',
        content: 'Built a lightweight custom WebSocket-based state synced service in Flutter. Integrated local caching via SQLite to decouple chat histories from remote fetches.',
        metric: 'WebSocket integration',
      },
      {
        phase: 'OUTCOME',
        icon: '◎',
        color: '#00d4ff',
        content: 'Chat latency plummeted from 8s to under 200ms. Swiping pages achieved stable 60 FPS performance, driving app store rating to 4.8 and boosting retention.',
        metric: '<200ms latency',
      },
    ],
  },
  {
    id: 'erp',
    name: 'ERP System',
    client: 'AGRO-INDUSTRIAL CORP',
    challenge: 'A large agro-industrial corporation was relying on manual Excel ledgers and paper signature systems. This caused 24% stock discrepancies and 4-day delays in processing orders.',
    phases: [
      {
        phase: 'PROBLEM',
        icon: '◈',
        color: '#ff3366',
        content: 'Manual workflows caused sequential signature blocks. Unindexed database queries resulted in laggy ledger generators scanning millions of records.',
        metric: '24% stock errors',
      },
      {
        phase: 'RESEARCH',
        icon: '◉',
        color: '#00ff88',
        content: 'Mapped operational workflow bottlenecks; analyzed PostgreSQL ledger queries. Identified lock contentions and lack of composite indexes.',
        metric: '4-day order delay',
      },
      {
        phase: 'STRATEGY',
        icon: '◬',
        color: '#7c3aed',
        content: 'Redesigned approval system with parallel state routing machine. Added compound B-tree indexing and quarter-based table partitioning on PostgreSQL.',
        metric: 'Parallel workflows',
      },
      {
        phase: 'SOLUTION',
        icon: '◆',
        color: '#ff6b35',
        content: 'Implemented Next.js portal with real-time WebSocket notifications. Optimized DB schemas and partitioned tables. Enabled offline synchronization.',
        metric: 'Instant ledger sync',
      },
      {
        phase: 'OUTCOME',
        icon: '◎',
        color: '#00d4ff',
        content: 'Stock discrepancies reduced to <1%. Order processing latency plummeted from 4 days to under 30 minutes. Sales velocity improved by 18%.',
        metric: 'Order time <30m',
      },
    ],
  }
]

export default function CaseStudiesSection() {
  const [activeStudyIdx, setActiveStudyIdx] = useState(0)
  const [activePhase, setActivePhase] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768)
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  const study = CASE_STUDIES[activeStudyIdx]
  const active = study.phases[activePhase]

  return (
    <section className="responsive-section" style={{ minHeight: '100vh' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: isMobile ? '2.5rem' : '4rem' }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: '#00d4ff',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            PHASE_05 // TRANSFORMATION — MEASURABLE IMPACT
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.3rem, 5vw, 4.5rem)',
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            The anatomy of
            <br />
            <span style={{ color: '#00d4ff' }}>transformation.</span>
          </h2>
        </motion.div>

        {/* Case study container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{
            background: 'rgba(2,4,8,0.55)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          {/* Case study selectors */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
            padding: isMobile ? '1rem' : '1.2rem 2rem',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(255,255,255,0.01)',
            alignItems: 'center',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.15em',
              marginRight: isMobile ? '0' : 'auto',
              width: isMobile ? '100%' : 'auto',
            }}>
              SELECT_SYSTEM //
            </span>
            {CASE_STUDIES.map((cs, idx) => (
              <button
                key={cs.id}
                onClick={() => {
                  setActiveStudyIdx(idx);
                  setActivePhase(0); // reset phase
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: activeStudyIdx === idx ? study.phases[0].color : 'rgba(255,255,255,0.3)',
                  borderBottom: activeStudyIdx === idx ? `1px solid ${study.phases[0].color}` : '1px solid transparent',
                  padding: '0.4rem 0.8rem',
                  transition: 'all 0.3s ease',
                }}
              >
                {cs.name}
              </button>
            ))}
          </div>

          {/* Header */}
          <div style={{
            padding: isMobile ? '1.2rem' : '2rem',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(0,212,255,0.03)',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: '#00d4ff',
              letterSpacing: '0.2em',
              marginBottom: '0.8rem',
            }}>
              CASE_STUDY_00{activeStudyIdx + 1} {"//"} {study.client}
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
              maxWidth: '700px',
            }}>
              {study.challenge}
            </p>
          </div>

          {/* Phase navigation */}
          <div style={{
            display: 'flex',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            {study.phases.map((p, i) => (
              <button
                key={p.phase}
                onClick={() => setActivePhase(i)}
                style={{
                  flex: 1,
                  padding: isMobile ? '1rem 0.2rem' : '1.2rem 0.5rem',
                  background: activePhase === i ? `rgba(${hexToRgb(p.color)}, 0.08)` : 'none',
                  border: 'none',
                  borderBottom: activePhase === i ? `2px solid ${p.color}` : '2px solid transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.3rem',
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{
                  fontSize: '1.2rem',
                  color: activePhase === i ? p.color : 'rgba(255,255,255,0.2)',
                  transition: 'color 0.3s ease',
                }}>
                  {p.icon}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.55rem',
                  color: activePhase === i ? p.color : 'rgba(255,255,255,0.25)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  display: isMobile ? 'none' : 'inline',
                }}>
                  {p.phase}
                </span>
              </button>
            ))}
          </div>

          {/* Active phase content */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="case-study-content"
          >
            <div style={{ flex: 1, minWidth: isMobile ? '100%' : '280px' }}>
              {isMobile && (
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: active.color,
                  letterSpacing: '0.15em',
                  marginBottom: '0.6rem',
                }}>
                  ACTIVE_PHASE: {active.phase}
                </div>
              )}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.8,
              }}>
                {active.content}
              </p>
            </div>

            <div style={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
              alignItems: 'stretch',
              width: isMobile ? '100%' : 'auto',
              minWidth: isMobile ? '100%' : '180px',
            }}>
              {/* Metric Box */}
              <div style={{
                textAlign: 'center',
                padding: '1.2rem',
                border: `1px solid ${active.color}50`,
                background: `rgba(${hexToRgb(active.color)}, 0.1)`,
                backdropFilter: 'blur(8px)',
                borderRadius: '2px',
                flex: isMobile ? 1 : 'none',
                width: isMobile ? 'auto' : '100%',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isMobile ? '1.2rem' : '1.4rem',
                  color: active.color,
                  fontWeight: 300,
                  marginBottom: '0.3rem',
                }}>
                  {active.metric}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.55rem',
                  color: 'rgba(255,255,255,0.3)',
                  letterSpacing: '0.1em',
                }}>
                  KEY RESULT
                </div>
              </div>

              {/* View Report Button */}
              <Link
                href={`/case-studies/${study.id}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: active.color,
                  padding: '0.6rem 1rem',
                  border: `1px solid ${active.color}45`,
                  background: `${active.color}08`,
                  textDecoration: 'none',
                  letterSpacing: '0.15em',
                  borderRadius: '1px',
                  flex: isMobile ? 1 : 'none',
                  width: isMobile ? 'auto' : '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  display: 'block',
                  alignSelf: 'stretch',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = active.color
                  e.currentTarget.style.color = '#020408'
                  e.currentTarget.style.boxShadow = `0 0 15px ${active.color}60`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = `${active.color}08`
                  e.currentTarget.style.color = active.color
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {isMobile ? 'REPORT →' : 'VIEW_SYSTEM_REPORT →'}
              </Link>
            </div>
          </motion.div>

          {/* Timeline dots - hidden on mobile */}
          {!isMobile && (
            <div style={{
              padding: '1rem 2.5rem',
              borderTop: '1px solid rgba(255,255,255,0.04)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              {study.phases.map((p, i) => (
                <div
                  key={i}
                  style={{
                    flex: i < study.phases.length - 1 ? 1 : 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: i <= activePhase ? p.color : 'rgba(255,255,255,0.1)',
                    boxShadow: i === activePhase ? `0 0 8px ${p.color}` : 'none',
                    flexShrink: 0,
                    transition: 'all 0.4s ease',
                  }} />
                  {i < study.phases.length - 1 && (
                    <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }}>
                      <motion.div
                        animate={{ width: i < activePhase ? '100%' : '0%' }}
                        transition={{ duration: 0.4 }}
                        style={{ height: '100%', background: p.color }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : '255,255,255'
}

