'use client'
import { useEffect, useRef, useState } from 'react'
import { useScrollStore } from '@/lib/scrollStore'

const PHASE_COLORS: Record<string, string> = {
  chaos: '#ff3366',
  discovery: '#00ff88',
  expertise: '#7c3aed',
  creation: '#ff6b35',
  transformation: '#00d4ff',
  evolution: '#ffd700',
  convergence: '#00f5ff',
}

export default function CustomCursor({ colorOverride }: { colorOverride?: string }) {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const phase = useScrollStore((s) => s.phase)
  const [isTouchDevice, setIsTouchDevice] = useState(true) // Default to true to avoid flash on mobile SSR

  useEffect(() => {
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(max-width: 768px)').matches
    
    setIsTouchDevice(isTouch)
  }, [])

  useEffect(() => {
    if (isTouchDevice) return
    const color = colorOverride || PHASE_COLORS[phase] || '#00f5ff'
    if (cursorRef.current) {
      cursorRef.current.style.borderColor = color
      cursorRef.current.style.boxShadow = `0 0 12px ${color}40`
    }
    if (trailRef.current) {
      trailRef.current.style.background = color
    }
  }, [phase, colorOverride, isTouchDevice])

  useEffect(() => {
    if (isTouchDevice) return
    let x = 0, y = 0
    let tx = 0, ty = 0

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      if (trailRef.current) {
        trailRef.current.style.left = `${tx - 3}px`
        trailRef.current.style.top = `${ty - 3}px`
      }
    }

    let rafId: number
    const animate = () => {
      x += (tx - x) * 0.15
      y += (ty - y) * 0.15
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x - 16}px`
        cursorRef.current.style.top = `${y - 16}px`
      }
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [isTouchDevice])

  if (isTouchDevice) return null

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: 32,
          height: 32,
          border: '1px solid #00f5ff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={trailRef}
        style={{
          position: 'fixed',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#00f5ff',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'background 0.4s ease',
        }}
      />
    </>
  )
}

