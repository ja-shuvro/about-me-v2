'use client'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { useScrollStore } from '@/lib/scrollStore'

export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)
  const setScroll = useScrollStore((s) => s.setScroll)

  useEffect(() => {
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
