'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import CinematicBackground from './CinematicBackground'

export default function SceneCanvas() {
  const [dpr, setDpr] = useState<number | [number, number]>([1, 1.5])

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) {
      setDpr(1)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        background: '#020408',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 14], fov: 60, near: 0.1, far: 200 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          toneMapping: 3, // ACESFilmic
          toneMappingExposure: 1.2,
        }}
        dpr={dpr}
      >
        <Suspense fallback={null}>
          <CinematicBackground />
        </Suspense>
      </Canvas>
    </div>
  )
}

