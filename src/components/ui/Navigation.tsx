'use client'
import { useState, useEffect } from 'react'
import { useScrollStore } from '@/lib/scrollStore'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  const scrollToSection = (index: number) => {
    setIsOpen(false)
    const mainElement = document.querySelector('main')
    const targetElement = mainElement?.children[index] as HTMLElement | undefined

    if (typeof window !== 'undefined' && (window as any).lenis) {
      if (targetElement) {
        ; (window as any).lenis.scrollTo(targetElement, { duration: 1.2 })
      } else {
        const totalHeight = document.body.scrollHeight - window.innerHeight
        const sectionHeight = totalHeight / 7
        ; (window as any).lenis.scrollTo(index * sectionHeight + sectionHeight * 0.1, { duration: 1.2 })
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
    <>
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
          padding: isMobile ? '1rem 1.5rem' : '1.5rem 3rem',
          background: 'linear-gradient(to bottom, rgba(2,4,8,0.95) 0%, transparent 100%)',
        }}
      >
        <div style={{
          fontFamily: 'var(--font-display)',
          color: '#fff',
          fontSize: isMobile ? '0.8rem' : '0.9rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          opacity: 0.9,
        }}>
          JA. Shuvro
        </div>

        {/* Desktop Links */}
        {!isMobile && (
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
        )}

        {/* Available indicator / Hamburger button */}
        {isMobile ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(8px)',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              zIndex: 101,
              transition: 'all 0.3s ease',
            }}
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              style={{ width: '18px', height: '1.5px', background: isOpen ? '#00f5ff' : '#fff' }}
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ width: '18px', height: '1.5px', background: '#fff' }}
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              style={{ width: '18px', height: '1.5px', background: isOpen ? '#00f5ff' : '#fff' }}
            />
          </button>
        ) : (
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.1em',
          }}>
            Available for projects
          </div>
        )}
      </motion.nav>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(2, 4, 8, 0.98)',
              backdropFilter: 'blur(16px)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2.5rem',
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              maxWidth: '400px',
              width: '100%',
              margin: '0 auto',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                color: 'rgba(255, 255, 255, 0.2)',
                letterSpacing: '0.3em',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                paddingBottom: '0.5rem',
              }}>
                NAVIGATION_SYSTEM //
              </div>
              {SECTIONS.map((s, i) => {
                const isActive = phase === s.phase
                return (
                  <motion.div
                    key={s.phase}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <button
                      onClick={() => scrollToSection(i)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-display)',
                        fontSize: '2rem',
                        fontWeight: 300,
                        color: isActive ? '#00f5ff' : 'rgba(255, 255, 255, 0.65)',
                        textAlign: 'left',
                        letterSpacing: '-0.02em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        width: '100%',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: isActive ? '#00f5ff' : 'rgba(255, 255, 255, 0.2)',
                        letterSpacing: '0.05em',
                        width: '30px',
                      }}>
                        0{i + 1}
                      </span>
                      {s.label}
                      {isActive && (
                        <motion.span
                          layoutId="mobile-nav-glow"
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: '#00f5ff',
                            boxShadow: '0 0 10px #00f5ff',
                          }}
                        />
                      )}
                    </button>
                  </motion.div>
                )
              })}

              <div style={{
                marginTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                paddingTop: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                color: 'rgba(255, 255, 255, 0.25)',
                letterSpacing: '0.1em',
              }}>
                <span>STATUS: ONLINE</span>
                <span>jashuvro.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

