'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const DATA_POINTS = [
  { label: 'IDENTITY', value: 'Alex Chen', confidence: 99 },
  { label: 'ROLE', value: 'Full-Stack Engineer', confidence: 97 },
  { label: 'SPECIALIZATION', value: 'Digital Experience Architect', confidence: 94 },
  { label: 'YEARS_ACTIVE', value: '6+ years', confidence: 100 },
  { label: 'APPROACH', value: 'Problem-first thinking', confidence: 98 },
  { label: 'PHILOSOPHY', value: 'Systems over features', confidence: 96 },
]

const CONNECTIONS = [
  'USER_EMPATHY ←→ TECHNICAL_DEPTH',
  'DESIGN_THINKING ←→ ENGINEERING',
  'STRATEGY ←→ EXECUTION',
  'VISION ←→ PRECISION',
]

function ScanLine() {
  return (
    <motion.div
      animate={{ top: ['0%', '100%', '0%'] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent, #00ff88, transparent)',
        boxShadow: '0 0 20px #00ff88, 0 0 40px #00ff8840',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
  )
}

function DataRow({ label, value, confidence, delay }: {
  label: string; value: string; confidence: number; delay: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.75rem 0',
        borderBottom: '1px solid rgba(0,255,136,0.08)',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6rem',
        color: '#00ff88',
        letterSpacing: '0.2em',
        opacity: 0.7,
        width: '160px',
        flexShrink: 0,
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.85)',
        flex: 1,
      }}>
        {value}
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{
          width: 60,
          height: 2,
          background: 'rgba(0,255,136,0.15)',
          borderRadius: 1,
          overflow: 'hidden',
        }}>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${confidence}%` } : {}}
            transition={{ duration: 1, delay: delay + 0.3 }}
            style={{ height: '100%', background: '#00ff88', borderRadius: 1 }}
          />
        </div>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.55rem',
          color: '#00ff88',
          opacity: 0.6,
        }}>
          {confidence}%
        </span>
      </div>
    </motion.div>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '8rem 3rem',
      position: 'relative',
    }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: '#00ff88',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            PHASE_02 // DISCOVERY — PROFILING SUBJECT
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            Analyzing the
            <br />
            <span style={{ color: '#00ff88' }}>problem solver.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left: Data analysis terminal */}
          <div>
            <div style={{
              background: 'rgba(0,255,136,0.03)',
              border: '1px solid rgba(0,255,136,0.12)',
              borderRadius: '2px',
              padding: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <ScanLine />
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: '#00ff88',
                marginBottom: '1.5rem',
                letterSpacing: '0.1em',
              }}>
                &gt; RUNNING DEEP_SCAN v2.4.1 ... SUBJECT IDENTIFIED
              </div>

              {DATA_POINTS.map((d, i) => (
                <DataRow key={d.label} {...d} delay={i * 0.1 + 0.3} />
              ))}
            </div>

            {/* Graph connections */}
            <div style={{ marginTop: '2rem' }}>
              {CONNECTIONS.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'rgba(0,255,136,0.5)',
                    padding: '0.4rem 0',
                    letterSpacing: '0.05em',
                  }}
                >
                  {c}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.15rem',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}>
                I exist at the intersection of <span style={{ color: '#00ff88' }}>engineering precision</span> and 
                design intelligence. My work begins not with code, but with understanding — 
                the systems people inhabit, the friction they endure, the outcomes they need.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.15rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}>
                Six years of building production systems across fintech, healthcare, 
                and SaaS has taught me one truth: <span style={{ color: 'rgba(255,255,255,0.8)' }}>
                complexity is just clarity waiting to be designed.
                </span>
              </p>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {[
                  { num: '47+', label: 'Systems Built' },
                  { num: '12M+', label: 'Users Impacted' },
                  { num: '3.2s→0.4s', label: 'Load Time Reduced' },
                  { num: '99.97%', label: 'Uptime Maintained' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    style={{
                      padding: '1rem',
                      background: 'rgba(0,255,136,0.04)',
                      border: '1px solid rgba(0,255,136,0.1)',
                      borderRadius: '2px',
                    }}
                  >
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.6rem',
                      color: '#00ff88',
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                    }}>
                      {stat.num}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      color: 'rgba(255,255,255,0.4)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginTop: '0.3rem',
                    }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
