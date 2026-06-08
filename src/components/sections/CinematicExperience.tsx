'use client'
import dynamic from 'next/dynamic'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Navigation from '@/components/ui/Navigation'
import ScrollIndicator from '@/components/ui/ScrollIndicator'
import PhaseOverlay from '@/components/ui/PhaseOverlay'
import CustomCursor from '@/components/ui/CustomCursor'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ExpertiseSection from '@/components/sections/ExpertiseSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import JourneySection from '@/components/sections/JourneySection'
import ContactSection from '@/components/sections/ContactSection'

import { useScrollStore } from '@/lib/scrollStore'

// Dynamically import Three.js canvas to avoid SSR issues
const SceneCanvas = dynamic(() => import('@/components/three/SceneCanvas'), {
  ssr: false,
})

export default function CinematicExperience() {
  useSmoothScroll()
  const { phase } = useScrollStore()
  const isLatePhase = phase === 'evolution' || phase === 'convergence'

  return (
    <>
      {/* Fixed 3D background */}
      <SceneCanvas />

      {/* Ambient overlay to improve text readability */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          background: isLatePhase
            ? 'radial-gradient(circle at center, rgba(2, 4, 8, 0.25) 0%, rgba(2, 4, 8, 0.95) 90%), rgba(2, 4, 8, 0.7)'
            : 'radial-gradient(circle at center, transparent 20%, rgba(2, 4, 8, 0.85) 100%), rgba(2, 4, 8, 0.45)',
          backdropFilter: isLatePhase ? 'blur(4px)' : 'none',
          transition: 'background 0.8s ease, backdrop-filter 0.8s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Fixed UI overlays */}
      <Navigation />
      <ScrollIndicator />
      <PhaseOverlay />

      {/* Scrollable content for human experience */}
      <main className="cinematic-main" style={{ position: 'relative', zIndex: 10 }}>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <CaseStudiesSection />
        <JourneySection />
        <ContactSection />

        {/* Minimal Premium Footer */}
        <footer className="site-footer">
          <p className="footer-text">
            © 2026 J.A. SHUVRO — BUILT WITH NEXT.JS · THREE.JS · FRAMER MOTION · GSAP
          </p>
        </footer>
      </main>
    </>
  )
}
