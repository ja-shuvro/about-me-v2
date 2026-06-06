'use client'
import { useRef, useMemo, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollStore } from '@/lib/scrollStore'
import {
  particleVertexShader,
  particleFragmentShader,
  bgFragmentShader,
  bgVertexShader,
} from '@/lib/shaders'


function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

// Background plane
function BackgroundPlane({ phase }: { phase: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const uniformsRef = useRef({
    uTime: { value: 0 },
    uPhase: { value: 0 },
    uResolution: { value: new THREE.Vector2(1, 1) },
  })

  useFrame(({ clock }) => {
    uniformsRef.current.uTime.value = clock.getElapsedTime()
    uniformsRef.current.uPhase.value = lerp(
      uniformsRef.current.uPhase.value,
      phase,
      0.02
    )
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -20]}>
      <planeGeometry args={[120, 80]} />
      <shaderMaterial
        vertexShader={bgVertexShader}
        fragmentShader={bgFragmentShader}
        uniforms={uniformsRef.current}
        depthWrite={false}
      />
    </mesh>
  )
}

// Particle system
function ParticleField({ phase }: { phase: number }) {
  const meshRef = useRef<THREE.Points>(null)
  const uniformsRef = useRef({
    uTime: { value: 0 },
    uScrollProgress: { value: 0 },
    uPhase: { value: 0 },
  })

  const [particleCount, setParticleCount] = useState(8000)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) {
      setParticleCount(2000)
    }
  }, [])

  const { positions, sizes, velocities, phaseOffsets, lifetimes } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const velocities = new Float32Array(particleCount * 3)
    const phaseOffsets = new Float32Array(particleCount)
    const lifetimes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      // Sphere distribution
      const r = Math.random() * 18 + 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = r * Math.cos(phi)

      velocities[i3] = (Math.random() - 0.5) * 2
      velocities[i3 + 1] = (Math.random() - 0.5) * 2
      velocities[i3 + 2] = (Math.random() - 0.5) * 2

      sizes[i] = Math.random() * 3 + 0.5
      phaseOffsets[i] = Math.random()
      lifetimes[i] = Math.random() * 0.5 + 0.5
    }

    return { positions, sizes, velocities, phaseOffsets, lifetimes }
  }, [particleCount])

  const scrollProgress = useScrollStore((s) => s.scrollProgress)

  useFrame(({ clock }) => {
    uniformsRef.current.uTime.value = clock.getElapsedTime()
    uniformsRef.current.uScrollProgress.value = scrollProgress
    uniformsRef.current.uPhase.value = lerp(
      uniformsRef.current.uPhase.value,
      phase,
      0.02
    )
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aVelocity" args={[velocities, 3]} />
        <bufferAttribute attach="attributes-aPhaseOffset" args={[phaseOffsets, 1]} />
        <bufferAttribute attach="attributes-aLifetime" args={[lifetimes, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={particleVertexShader}
        fragmentShader={particleFragmentShader}
        uniforms={uniformsRef.current}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Connection lines that appear in discovery/expertise phases
function ConnectionLines({ phase }: { phase: number }) {
  const linesRef = useRef<THREE.LineSegments>(null)
  const [lineCount, setLineCount] = useState(200)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) {
      setLineCount(50)
    }
  }, [])

  const { positions, colors } = useMemo(() => {
    const count = lineCount
    const positions = new Float32Array(count * 6)
    const colors = new Float32Array(count * 6)

    for (let i = 0; i < count; i++) {
      const i6 = i * 6
      const angle1 = Math.random() * Math.PI * 2
      const angle2 = angle1 + (Math.random() - 0.5) * 1.5
      const r1 = Math.random() * 8 + 2
      const r2 = Math.random() * 8 + 2

      positions[i6] = Math.cos(angle1) * r1
      positions[i6 + 1] = Math.sin(angle1) * r1
      positions[i6 + 2] = (Math.random() - 0.5) * 6

      positions[i6 + 3] = Math.cos(angle2) * r2
      positions[i6 + 4] = Math.sin(angle2) * r2
      positions[i6 + 5] = (Math.random() - 0.5) * 6

      const c = new THREE.Color()
      c.setHSL(Math.random() * 0.3 + 0.5, 1, 0.6)
      colors[i6] = c.r; colors[i6 + 1] = c.g; colors[i6 + 2] = c.b
      colors[i6 + 3] = c.r; colors[i6 + 4] = c.g; colors[i6 + 5] = c.b
    }

    return { positions, colors }
  }, [lineCount])

  useFrame(({ clock }) => {
    if (!linesRef.current) return
    const t = clock.getElapsedTime()
    // Animate line opacity based on phase
    const opacity = phase >= 1 && phase <= 4
      ? Math.sin((phase - 1) * Math.PI / 3) * 0.4
      : 0
    ;(linesRef.current.material as THREE.LineBasicMaterial).opacity = opacity
    linesRef.current.rotation.z = t * 0.02
    linesRef.current.rotation.y = t * 0.01
  })

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  )
}

// Camera rig that moves based on scroll
function CameraRig({ phase }: { phase: number }) {
  const { camera } = useThree()
  const targetRef = useRef({ x: 0, y: 0, z: 8, lookX: 0, lookY: 0 })

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouch) return

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.lookX = (e.clientX / window.innerWidth - 0.5) * 2
      targetRef.current.lookY = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Camera positions per phase
    let targetZ = 14
    let targetX = 0
    let targetY = 0
    let fov = 60

    if (phase < 1) {
      // CHAOS: slightly wide, erratic
      targetZ = 16
      targetX = Math.sin(t * 0.1) * 0.5
      targetY = Math.cos(t * 0.13) * 0.3
      fov = 65
    } else if (phase < 2) {
      // DISCOVERY: zoom in, scanning
      targetZ = lerp(16, 10, phase - 1)
      targetX = Math.sin(t * 0.15) * 1
      fov = lerp(65, 55, phase - 1)
    } else if (phase < 3) {
      // EXPERTISE: circular orbit
      const p = phase - 2
      targetX = Math.sin(t * 0.08) * 3 * p
      targetZ = lerp(10, 12, p)
      fov = 55
    } else if (phase < 4) {
      // CREATION: top-down drift
      targetZ = lerp(12, 14, phase - 3)
      targetY = lerp(0, 2, phase - 3)
      fov = 50
    } else if (phase < 5) {
      // TRANSFORMATION: close, intimate
      targetZ = 10
      fov = 50
    } else if (phase < 6) {
      // EVOLUTION: pull back wide
      targetZ = lerp(10, 20, phase - 5)
      fov = lerp(50, 75, phase - 5)
    } else {
      // CONVERGENCE: center, forward
      targetZ = lerp(20, 12, phase - 6)
      fov = lerp(75, 55, phase - 6)
    }

    camera.position.x += (targetX + targetRef.current.lookX * 0.5 - camera.position.x) * 0.03
    camera.position.y += (targetY + targetRef.current.lookY * 0.3 - camera.position.y) * 0.03
    camera.position.z += (targetZ - camera.position.z) * 0.02

    camera.lookAt(
      targetRef.current.lookX * 0.3,
      targetRef.current.lookY * 0.2,
      0
    )

    if ('fov' in camera) {
      const perspCam = camera as THREE.PerspectiveCamera
      perspCam.fov += (fov - perspCam.fov) * 0.02
      perspCam.updateProjectionMatrix()
    }
  })

  return null
}

// Central attractor / node that changes shape per phase
function CentralNode({ phase }: { phase: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.rotation.x = t * 0.3
    meshRef.current.rotation.y = t * 0.5
    meshRef.current.rotation.z = t * 0.2

    // Scale pulsing
    const pulse = 1 + 0.1 * Math.sin(t * 2)
    meshRef.current.scale.setScalar(pulse)

    // Opacity based on phase
    const mat = meshRef.current.material as THREE.MeshStandardMaterial
    if (phase >= 1 && phase <= 5) {
      mat.opacity = Math.sin((phase - 1) * Math.PI / 4) * 0.6
    } else {
      mat.opacity = 0
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        color="#00f5ff"
        emissive="#004466"
        wireframe
        transparent
        opacity={0}
      />
    </mesh>
  )
}

// Ambient light that changes color per phase
function DynamicLighting({ phase }: { phase: number }) {
  const lightRef = useRef<THREE.PointLight>(null)

  const phaseColors = [
    '#1a0030', // chaos - deep purple/void
    '#003322', // discovery - deep teal
    '#200050', // expertise - deep violet
    '#402000', // creation - deep amber
    '#003040', // transformation - teal-blue
    '#302000', // evolution - gold
    '#001030', // convergence - deep blue
  ]

  useFrame(({ clock }) => {
    if (!lightRef.current) return
    const t = clock.getElapsedTime()
    const phaseIndex = Math.min(Math.floor(phase), 6)
    const color = new THREE.Color(phaseColors[phaseIndex])
    lightRef.current.color.lerp(color, 0.02)
    lightRef.current.intensity = 2 + Math.sin(t * 0.5) * 0.5
  })

  return (
    <>
      <ambientLight intensity={0.1} color="#050510" />
      <pointLight ref={lightRef} position={[0, 0, 5]} intensity={2} distance={30} />
      <pointLight position={[10, 10, -5]} intensity={0.3} color="#0088ff" />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#ff4400" />
    </>
  )
}

export default function CinematicBackground() {
  const { phase, phaseProgress, scrollProgress } = useScrollStore()

  // Convert phase string to numeric
  const phaseMap: Record<string, number> = {
    chaos: 0,
    discovery: 1,
    expertise: 2,
    creation: 3,
    transformation: 4,
    evolution: 5,
    convergence: 6,
  }

  const numericPhase = phaseMap[phase] + phaseProgress

  return (
    <>
      <CameraRig phase={numericPhase} />
      <DynamicLighting phase={numericPhase} />
      <BackgroundPlane phase={numericPhase} />
      <ParticleField phase={numericPhase} />
      <ConnectionLines phase={numericPhase} />
      <CentralNode phase={numericPhase} />
    </>
  )
}
