'use client'
import { useScrollStore } from '@/lib/scrollStore'
import { motion } from 'framer-motion'

const PHASES = [
  { label: '01', name: 'CHAOS', color: '#ff3366' },
  { label: '02', name: 'DISCOVERY', color: '#00ff88' },
  { label: '03', name: 'EXPERTISE', color: '#7c3aed' },
  { label: '04', name: 'CREATION', color: '#ff6b35' },
  { label: '05', name: 'IMPACT', color: '#00d4ff' },
  { label: '06', name: 'EVOLUTION', color: '#ffd700' },
  { label: '07', name: 'CONVERGENCE', color: '#ffffff' },
]

const PHASE_KEYS = ['chaos', 'discovery', 'expertise', 'creation', 'transformation', 'evolution', 'convergence']

export default function ScrollIndicator() {
  const { phase, scrollProgress } = useScrollStore()
  const phaseIndex = PHASE_KEYS.indexOf(phase)

  return (
    <div style={{
      position: 'fixed',
      right: '2rem',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '0.8rem',
    }}>
      {PHASES.map((p, i) => {
        const isActive = i === phaseIndex
        const isPast = i < phaseIndex
        return (
          <motion.div
            key={p.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              cursor: 'default',
            }}
            animate={{ opacity: isActive ? 1 : isPast ? 0.3 : 0.15 }}
          >
            <motion.span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                letterSpacing: '0.15em',
                color: isActive ? p.color : 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
                transition: 'color 0.5s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {isActive ? p.name : ''}
            </motion.span>
            <div style={{
              width: isActive ? 24 : 8,
              height: 1,
              background: isActive ? p.color : 'rgba(255,255,255,0.2)',
              transition: 'all 0.4s ease',
              boxShadow: isActive ? `0 0 6px ${p.color}` : 'none',
            }} />
            <div style={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: isActive ? p.color : isPast ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
              boxShadow: isActive ? `0 0 8px ${p.color}, 0 0 16px ${p.color}40` : 'none',
              transition: 'all 0.4s ease',
            }} />
          </motion.div>
        )
      })}

      <div style={{
        marginTop: '1rem',
        width: 1,
        height: 60,
        background: 'rgba(255,255,255,0.1)',
        position: 'relative',
        marginLeft: 'auto',
        marginRight: '1.5px',
      }}>
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            background: '#00f5ff',
            boxShadow: '0 0 6px #00f5ff',
            originY: 0,
          }}
          animate={{ height: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  )
}
