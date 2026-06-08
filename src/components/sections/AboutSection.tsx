'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const DATA_POINTS = [
  { label: 'IDENTITY', value: 'J.A. Shuvro', confidence: 99 },
  { label: 'ROLE', value: 'Flutter & Full-Stack Developer', confidence: 98 },
  { label: 'SPECIALIZATION', value: 'Mobile & Web Architect', confidence: 95 },
  { label: 'YEARS_ACTIVE', value: '3.5+ years', confidence: 100 },
  { label: 'APPROACH', value: 'Clean Code & Scalable Architecture', confidence: 97 },
  { label: 'PHILOSOPHY', value: 'Elegant logic & Fluid UX', confidence: 96 },
]

const CONNECTIONS = [
  'FLUTTER_FLUIDITY ←→ BACKEND_ROBUSTNESS',
  'CLEAN_CODE ←→ EFFICIENT_OPTIMIZATION',
  'CLIENT_VISION ←→ TECHNICAL_PRECISION',
  'SELF_LEARNING ←→ REAL_WORLD_PRODUCTION',
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

function DataRow({ label, value, confidence, delay, isMobile }: {
  label: string; value: string; confidence: number; delay: number; isMobile: boolean
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
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'stretch' : 'center',
        gap: isMobile ? '0.2rem' : '0.8rem',
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
        width: isMobile ? 'auto' : '150px',
        flexShrink: 0,
      }}>
        {label}
      </span>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.8rem',
        flex: 1,
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: isMobile ? '0.75rem' : '0.85rem',
          color: 'rgba(255,255,255,0.85)',
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          {value}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
          {!isMobile && (
            <div style={{
              width: 50,
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
          )}
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.55rem',
            color: '#00ff88',
            opacity: 0.6,
          }}>
            {confidence}%
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768)
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  return (
    <section className="responsive-section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
    }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: isMobile ? '2.5rem' : '4rem' }}
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
            fontSize: 'clamp(2.3rem, 5vw, 4.5rem)',
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

        <div className="about-grid">
          {/* Left: Data analysis terminal */}
          <div>
            <div style={{
              background: 'rgba(2,4,8,0.55)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(0,255,136,0.18)',
              borderRadius: '2px',
              padding: isMobile ? '1rem' : '1.5rem',
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
                &gt; RUNNING DEEP_SCAN Subject: J.A. Shuvro
              </div>

              {DATA_POINTS.map((d, i) => (
                <DataRow key={d.label} {...d} delay={i * 0.1 + 0.3} isMobile={isMobile} />
              ))}
            </div>

            {/* Graph connections */}
            <div style={{ marginTop: '1.5rem' }}>
              {CONNECTIONS.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: isMobile ? '0.52rem' : '0.65rem',
                    color: 'rgba(0,255,136,0.5)',
                    padding: '0.4rem 0',
                    letterSpacing: '0.05em',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
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
                fontSize: isMobile ? '1.05rem' : '1.15rem',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}>
                I am a dedicated software developer with a track record of delivering robust applications. 
                From crafting pixel-perfect mobile interfaces with <span style={{ color: '#00ff88' }}>Flutter</span> to 
                architecting scalable backend systems with Laravel and Node.js, I bridge the gap between 
                complex requirements and elegant solutions.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: isMobile ? '1.05rem' : '1.15rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}>
                My work prioritizes clean code, responsive design, and performance optimization. 
                I focus on writing semantic, efficiently organized code to build fast-loading interfaces that function 
                beautifully on any device.
              </p>

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem'
              }}>
                {[
                  { num: '20+', label: 'Projects Built' },
                  { num: '10+', label: 'Android Apps' },
                  { num: '10+', label: 'Web Platforms' },
                  { num: '3+', label: 'CMS Integrations' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    style={{
                      padding: isMobile ? '0.8rem' : '1rem',
                      background: 'rgba(2,4,8,0.5)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(0,255,136,0.15)',
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
                      fontSize: '0.55rem',
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

