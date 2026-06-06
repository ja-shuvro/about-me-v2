'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const CASE_STUDY = {
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
}

export default function CaseStudiesSection() {
  const [activePhase, setActivePhase] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const active = CASE_STUDY.phases[activePhase]

  return (
    <section style={{ minHeight: '100vh', padding: '8rem 3rem' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: '4rem' }}
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
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
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
          {/* Header */}
          <div style={{
            padding: '2rem',
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
              CASE_STUDY_001 // {CASE_STUDY.client}
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
              maxWidth: '700px',
            }}>
              {CASE_STUDY.challenge}
            </p>
          </div>

          {/* Phase navigation */}
          <div style={{
            display: 'flex',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            {CASE_STUDY.phases.map((p, i) => (
              <button
                key={p.phase}
                onClick={() => setActivePhase(i)}
                style={{
                  flex: 1,
                  padding: '1.2rem 0.5rem',
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
            style={{
              padding: '2.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '3rem',
            }}
          >
            <div style={{ flex: 1 }}>
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
              textAlign: 'center',
              padding: '1.5rem',
              border: `1px solid ${active.color}50`,
              background: `rgba(${hexToRgb(active.color)}, 0.1)`,
              backdropFilter: 'blur(8px)',
              borderRadius: '2px',
              minWidth: '140px',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
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
          </motion.div>

          {/* Timeline dots */}
          <div style={{
            padding: '1rem 2.5rem',
            borderTop: '1px solid rgba(255,255,255,0.04)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            {CASE_STUDY.phases.map((p, i) => (
              <div
                key={i}
                style={{
                  flex: i < CASE_STUDY.phases.length - 1 ? 1 : 0,
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
                {i < CASE_STUDY.phases.length - 1 && (
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
