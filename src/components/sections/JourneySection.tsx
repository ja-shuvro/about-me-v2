'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const MILESTONES = [
  {
    year: '2018',
    era: 'GENESIS',
    role: 'Junior Frontend Developer',
    company: 'Digital Agency',
    color: '#ff6b35',
    unlock: 'HTML/CSS/JS mastery',
    description: 'Built the foundation. Pixel-perfect UIs, cross-browser nightmares, and the discovery that good design is invisible engineering.',
    level: 'LVL 1',
  },
  {
    year: '2019',
    era: 'EXPANSION',
    role: 'Frontend Engineer',
    company: 'SaaS Startup',
    color: '#00ff88',
    unlock: '+React +Node.js +APIs',
    description: 'First production systems. 50k users. Learned that scale breaks everything and good architecture is the ultimate insurance.',
    level: 'LVL 2',
  },
  {
    year: '2021',
    era: 'DEPTH',
    role: 'Full-Stack Engineer',
    company: 'HealthTech Firm',
    color: '#00d4ff',
    unlock: '+Distributed Systems +Data Engineering',
    description: 'Designed data pipelines for 200 hospitals. Understood that in high-stakes systems, correctness isn\'t optional — it\'s the product.',
    level: 'LVL 3',
  },
  {
    year: '2022',
    era: 'SYNTHESIS',
    role: 'Lead Engineer',
    company: 'Fintech Unicorn',
    color: '#7c3aed',
    unlock: '+Team Leadership +System Architecture',
    description: 'Led 8-person engineering team. Built systems that processed $50M in daily transactions. Learned that the hardest problems are human, not technical.',
    level: 'LVL 4',
  },
  {
    year: '2024',
    era: 'EMERGENCE',
    role: 'Principal Engineer / Consultant',
    company: 'Independent',
    color: '#ffd700',
    unlock: '+AI Integration +Strategic Advisory',
    description: 'Now working across industries as a digital experience architect. Each problem is a unique system. Each solution is a new capability unlocked.',
    level: 'LVL 5',
  },
]

export default function JourneySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{ minHeight: '100vh', padding: '8rem 3rem' }}>
      <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: '5rem' }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: '#ffd700',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            PHASE_06 // EVOLUTION — CAPABILITY PROGRESSION
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            Every challenge
            <br />
            <span style={{ color: '#ffd700' }}>unlocks a new level.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Central line */}
          <div style={{
            position: 'absolute',
            left: '120px',
            top: 0,
            bottom: 0,
            width: 1,
            background: 'rgba(255,255,255,0.06)',
          }}>
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
              style={{ width: '100%', background: 'linear-gradient(to bottom, #ff6b35, #ffd700)' }}
            />
          </div>

          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 + 0.3 }}
              style={{
                display: 'flex',
                gap: '3rem',
                marginBottom: i < MILESTONES.length - 1 ? '4rem' : 0,
                alignItems: 'flex-start',
              }}
            >
              {/* Year + level */}
              <div style={{
                width: '100px',
                flexShrink: 0,
                textAlign: 'right',
                paddingTop: '0.2rem',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  color: m.color,
                  fontWeight: 300,
                }}>
                  {m.year}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.55rem',
                  color: 'rgba(255,255,255,0.25)',
                  letterSpacing: '0.15em',
                }}>
                  {m.level}
                </div>
              </div>

              {/* Dot */}
              <div style={{
                flexShrink: 0,
                position: 'relative',
                marginTop: '0.3rem',
              }}>
                <div style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: m.color,
                  boxShadow: `0 0 12px ${m.color}, 0 0 24px ${m.color}40`,
                  marginLeft: '-4.5px',
                }} />
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.5rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.55rem',
                    color: m.color,
                    letterSpacing: '0.2em',
                    padding: '0.2rem 0.5rem',
                    border: `1px solid ${m.color}30`,
                    background: `${m.color}10`,
                  }}>
                    {m.era}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  color: '#ffffff',
                  fontWeight: 300,
                  marginBottom: '0.2rem',
                }}>
                  {m.role}
                </h3>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '0.8rem',
                }}>
                  {m.company}
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.7,
                  marginBottom: '0.8rem',
                }}>
                  {m.description}
                </p>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: m.color,
                  opacity: 0.7,
                }}>
                  UNLOCKED: {m.unlock}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
