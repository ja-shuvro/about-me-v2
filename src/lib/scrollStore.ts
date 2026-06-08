import { create } from 'zustand'

export type NarrativePhase =
  | 'chaos'
  | 'discovery'
  | 'expertise'
  | 'creation'
  | 'transformation'
  | 'evolution'
  | 'convergence'

interface ScrollStore {
  scrollProgress: number
  phase: NarrativePhase
  phaseProgress: number
  setScroll: (progress: number) => void
}

const PHASE_BOUNDARIES: { phase: NarrativePhase; start: number; end: number }[] = [
  { phase: 'chaos',          start: 0,      end: 0.14 },
  { phase: 'discovery',      start: 0.14,   end: 0.28 },
  { phase: 'expertise',      start: 0.28,   end: 0.42 },
  { phase: 'creation',       start: 0.42,   end: 0.57 },
  { phase: 'transformation', start: 0.57,   end: 0.71 },
  { phase: 'evolution',      start: 0.71,   end: 0.85 },
  { phase: 'convergence',    start: 0.85,   end: 1.0  },
]

function getPhase(progress: number): { phase: NarrativePhase; phaseProgress: number } {
  if (typeof window !== 'undefined') {
    const mainElement = document.querySelector('main.cinematic-main')
    const sections = mainElement
      ? (Array.from(mainElement.children).filter((el) => el.tagName === 'SECTION') as HTMLElement[])
      : []

    if (sections.length > 0) {
      const scrollTop = window.scrollY
      const viewportHeight = window.innerHeight
      const scrollMiddle = scrollTop + viewportHeight / 2

      let activeIndex = -1
      for (let i = 0; i < sections.length; i++) {
        const sec = sections[i]
        const secTop = sec.offsetTop
        const secHeight = sec.offsetHeight

        if (scrollMiddle >= secTop && scrollMiddle < secTop + secHeight) {
          activeIndex = i
          break
        }
      }

      if (activeIndex !== -1) {
        const phases: NarrativePhase[] = [
          'chaos',
          'discovery',
          'expertise',
          'creation',
          'transformation',
          'evolution',
          'convergence',
        ]
        const activeSection = sections[activeIndex]
        const secTop = activeSection.offsetTop
        const secHeight = activeSection.offsetHeight
        
        let phaseProgress = 0
        if (secHeight > 0) {
          phaseProgress = (scrollTop - secTop) / secHeight
          phaseProgress = Math.max(0, Math.min(1, phaseProgress))
        }

        return {
          phase: phases[activeIndex] || 'chaos',
          phaseProgress,
        }
      }
    }
  }

  // Fallback to static percentage-based boundaries if DOM is not ready or SSR
  const PHASE_BOUNDARIES: { phase: NarrativePhase; start: number; end: number }[] = [
    { phase: 'chaos',          start: 0,      end: 0.14 },
    { phase: 'discovery',      start: 0.14,   end: 0.28 },
    { phase: 'expertise',      start: 0.28,   end: 0.42 },
    { phase: 'creation',       start: 0.42,   end: 0.57 },
    { phase: 'transformation', start: 0.57,   end: 0.71 },
    { phase: 'evolution',      start: 0.71,   end: 0.85 },
    { phase: 'convergence',    start: 0.85,   end: 1.0  },
  ]

  for (const b of PHASE_BOUNDARIES) {
    if (progress >= b.start && progress <= b.end) {
      return {
        phase: b.phase,
        phaseProgress: (progress - b.start) / (b.end - b.start),
      }
    }
  }
  return { phase: 'convergence', phaseProgress: 1 }
}

export const useScrollStore = create<ScrollStore>((set) => ({
  scrollProgress: 0,
  phase: 'chaos',
  phaseProgress: 0,
  setScroll: (progress) => {
    const { phase, phaseProgress } = getPhase(progress)
    set({ scrollProgress: progress, phase, phaseProgress })
  },
}))
