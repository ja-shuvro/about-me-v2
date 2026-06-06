'use client'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { useScrollStore } from '@/lib/scrollStore'

export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)
  const setScroll = useScrollStore((s) => s.setScroll)

  useEffect(() => {
    // Detect mobile or touch capability
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(max-width: 768px)').matches)

    if (isTouchDevice) {
      const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0
        setScroll(progress)
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis
    ;(window as any).lenis = lenis

    lenis.on('scroll', ({ progress }: { progress: number }) => {
      setScroll(progress)
    })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      if ((window as any).lenis === lenis) {
        delete (window as any).lenis
      }
    }
  }, [setScroll])

  return lenisRef
}

