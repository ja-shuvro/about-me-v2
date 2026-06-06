'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollStore } from '@/lib/scrollStore'

const PHASE_OVERLAYS: Record<string, { label: string; color: string }> = {
  chaos: { label: 'CHAOS', color: '#ff3366' },
  discovery: { label: 'DISCOVERY', color: '#00ff88' },
  expertise: { label: 'EXPERTISE', color: '#7c3aed' },
  creation: { label: 'CREATION', color: '#ff6b35' },
  transformation: { label: 'TRANSFORMATION', color: '#00d4ff' },
  evolution: { label: 'EVOLUTION', color: '#ffd700' },
  convergence: { label: 'CONVERGENCE', color: '#ffffff' },
}

export default function PhaseOverlay() {
  const { phase } = useScrollStore()
  const overlay = PHASE_OVERLAYS[phase]

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      left: '3rem',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      pointerEvents: 'none',
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={phase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: overlay.color,
              boxShadow: `0 0 8px ${overlay.color}`,
            }}
          />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: overlay.color,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            opacity: 0.7,
          }}>
            {overlay.label}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
