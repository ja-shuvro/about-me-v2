'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const FRAGMENTS = [
  'undefined error',
  'data.map is not a function',
  'CORS policy blocked',
  'timeout: 30000ms',
  'null reference',
  '404 not found',
  'rate limit exceeded',
  'memory overflow',
  'sync conflict',
  'schema mismatch',
  'deadlock detected',
  'auth failed',
  'payload too large',
  'connection refused',
]

function ErrorFragment({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        x: [0, (Math.random() - 0.5) * 60],
        y: [0, (Math.random() - 0.5) * 40],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 4,
      }}
      style={{
        position: 'absolute',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        color: '#ff3366',
        letterSpacing: '0.05em',
        opacity: 0,
        left: `${10 + Math.random() * 80}%`,
        top: `${10 + Math.random() * 80}%`,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        textShadow: '0 0 10px #ff3366',
      }}
    >
      {text}
    </motion.div>
  )
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Error fragments floating */}
      {FRAGMENTS.map((f, i) => (
        <ErrorFragment key={f} text={f} delay={i * 0.4} />
      ))}

      {/* Glitch lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 0.3, 0],
            scaleX: [0.8, 1.1, 0.9],
            y: [(Math.random() - 0.5) * 200],
          }}
          transition={{
            duration: 0.1,
            delay: i * 0.8 + Math.random() * 2,
            repeat: Infinity,
            repeatDelay: 2 + Math.random() * 3,
          }}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: 1,
            background: 'rgba(255,51,102,0.4)',
            top: '50%',
          }}
        />
      ))}

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 10, maxWidth: '900px', padding: '0 2rem' }}>
        {/* System label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: '#ff3366',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            marginBottom: '2rem',
            opacity: 0.8,
          }}
        >
          SYSTEM STATE: FRAGMENTED — DETECTING ANOMALIES
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.0,
            marginBottom: '2rem',
          }}
        >
          <motion.span
            animate={{
              textShadow: [
                '0 0 0 transparent',
                '2px 0 0 rgba(255,0,0,0.4), -2px 0 0 rgba(0,255,255,0.4)',
                '0 0 0 transparent',
              ],
            }}
            transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
          >
            Every great
          </motion.span>
          <br />
          <span style={{ color: '#ff3366', fontWeight: 700 }}>
            solution
          </span>
          <br />
          begins with a{' '}
          <motion.span
            style={{ color: 'rgba(255,255,255,0.3)' }}
            animate={{ color: ['rgba(255,255,255,0.3)', 'rgba(255,51,102,0.8)', 'rgba(255,255,255,0.3)'] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            problem.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '580px',
            margin: '0 auto 3rem',
            lineHeight: 1.7,
            letterSpacing: '0.01em',
          }}
        >
          I am a Flutter & Full-Stack Developer specializing in building mobile 
          and web applications using Flutter, Laravel, React, and Next.js, bridging 
          the gap between complex requirements and elegant solutions.
        </motion.p>

        {/* Scroll prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: 2, repeat: Infinity }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.8rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.3em',
          }}
        >
          <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.2)' }} />
          SCROLL TO BEGIN
          <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.2)' }} />
        </motion.div>
      </div>

      {/* Corner decorations */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
        <div
          key={pos}
          style={{
            position: 'absolute',
            [pos.includes('top') ? 'top' : 'bottom']: '2rem',
            [pos.includes('left') ? 'left' : 'right']: '2rem',
            width: 30,
            height: 30,
            borderTop: pos.includes('top') ? '1px solid rgba(255,51,102,0.3)' : 'none',
            borderBottom: pos.includes('bottom') ? '1px solid rgba(255,51,102,0.3)' : 'none',
            borderLeft: pos.includes('left') ? '1px solid rgba(255,51,102,0.3)' : 'none',
            borderRight: pos.includes('right') ? '1px solid rgba(255,51,102,0.3)' : 'none',
          }}
        />
      ))}
    </section>
  )
}
