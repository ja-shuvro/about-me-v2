'use client'
import { useScrollStore } from '@/lib/scrollStore'
import { motion } from 'framer-motion'

const SECTIONS = [
  { label: 'Origin', phase: 'chaos' },
  { label: 'About', phase: 'discovery' },
  { label: 'Expertise', phase: 'expertise' },
  { label: 'Work', phase: 'creation' },
  { label: 'Impact', phase: 'transformation' },
  { label: 'Journey', phase: 'evolution' },
  { label: 'Connect', phase: 'convergence' },
]

export default function Navigation() {
  const { phase } = useScrollStore()

  const scrollToSection = (index: number) => {
    const mainElement = document.querySelector('main')
    const targetElement = mainElement?.children[index] as HTMLElement | undefined

    if (typeof window !== 'undefined' && (window as any).lenis) {
      if (targetElement) {
        ;(window as any).lenis.scrollTo(targetElement, { duration: 1.2 })
      } else {
        const totalHeight = document.body.scrollHeight - window.innerHeight
        const sectionHeight = totalHeight / 7
        ;(window as any).lenis.scrollTo(index * sectionHeight + sectionHeight * 0.1, { duration: 1.2 })
      }
    } else {
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      } else {
        const totalHeight = document.body.scrollHeight - window.innerHeight
        const sectionHeight = totalHeight / 7
        window.scrollTo({
          top: index * sectionHeight + sectionHeight * 0.1,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem 3rem',
        background: 'linear-gradient(to bottom, rgba(2,4,8,0.9) 0%, transparent 100%)',
      }}
    >
      <div style={{
        fontFamily: 'var(--font-display)',
        color: '#fff',
        fontSize: '0.9rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        opacity: 0.9,
      }}>
        JA. Suvro
      </div>

      <div style={{
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
      }}>
        {SECTIONS.map((s, i) => (
          <button
            key={s.phase}
            onClick={() => scrollToSection(i)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.4rem 0.8rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: phase === s.phase ? '#00f5ff' : 'rgba(255,255,255,0.4)',
              transition: 'color 0.4s ease',
              position: 'relative',
            }}
          >
            {s.label}
            {phase === s.phase && (
              <motion.div
                layoutId="nav-indicator"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  background: '#00f5ff',
                  boxShadow: '0 0 8px #00f5ff',
                }}
              />
            )}
          </button>
        ))}
      </div>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        color: 'rgba(255,255,255,0.3)',
        letterSpacing: '0.1em',
      }}>
        Available for projects
      </div>
    </motion.nav>
  )
}
