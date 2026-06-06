'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const CASE_STUDY = {
  client: 'FINTECH PLATFORM',
  challenge: 'A Series B fintech with 200k users was hemorrhaging 34% of signups during onboarding. The 23-step KYC flow took 18 minutes average and had a 67% abandonment rate.',
  phases: [
    {
      phase: 'PROBLEM',
      icon: '◈',
      color: '#ff3366',
      content: 'User research revealed: 12 redundant data points, 6 unsequenced steps, zero progress feedback. Users felt trapped in bureaucracy.',
      metric: '67% abandonment',
    },
    {
      phase: 'RESEARCH',
      icon: '◉',
      color: '#00ff88',
      content: 'Heatmaps, session recordings, 40 user interviews. Identified 3 critical drop-off moments: document upload, address verification, identity selfie.',
      metric: '40 interviews',
    },
    {
      phase: 'STRATEGY',
      icon: '◬',
      color: '#7c3aed',
      content: 'Restructured as adaptive flow: front-load easy questions, defer friction points, add save-and-resume, introduce progress visualization and micro-celebrations.',
      metric: '3 week sprint',
    },
    {
      phase: 'SOLUTION',
      icon: '◆',
      color: '#ff6b35',
      content: 'Built adaptive KYC engine: AI document extraction, real-time field validation, OCR-assisted prefill, conditional logic reducing steps from 23→9 for 80% of users.',
      metric: '9 steps vs 23',
    },
    {
      phase: 'OUTCOME',
      icon: '◎',
      color: '#00d4ff',
      content: 'Abandonment dropped from 67% to 11%. Average completion time: 18min→4.2min. $2.3M additional ARR in 6 months from recovered signups.',
      metric: '$2.3M recovered',
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
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
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
              border: `1px solid ${active.color}30`,
              background: `rgba(${hexToRgb(active.color)}, 0.05)`,
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
