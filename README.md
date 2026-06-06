# Cinematic Developer Portfolio

> A scroll-driven, narrative experience built with Next.js 14, Three.js, and GSAP.

## 🎬 Concept

This is not a portfolio website. It is a cinematic digital experience that tells a single continuous story — the story of how problems become solutions.

The entire experience is driven by one continuous Three.js particle system that **transforms** as you scroll, moving through 7 distinct narrative phases without ever reloading or transitioning between traditional sections.

---

## 🌌 Narrative Architecture

| Phase | Name | Visual Metaphor | Color Palette |
|-------|------|-----------------|---------------|
| 01 | CHAOS | Fragmented particles, error messages, erratic motion | Deep reds, violets |
| 02 | DISCOVERY | Particles converging, scanning animations, data nodes | Teal, signal green |
| 03 | EXPERTISE | Orbital particles, energy networks, activated nodes | Electric purple, cyan |
| 04 | CREATION | Grid-forming particles, structured assembly | Amber, warm orange |
| 05 | TRANSFORMATION | Morphing spectrum, phase-shifting | Full spectrum |
| 06 | EVOLUTION | Expanding universe, spiral motion | Gold, cosmic |
| 07 | CONVERGENCE | All knowledge converging to a point | Pure light, white-blue |

---

## 🛠 Tech Stack

```
Next.js 14 (App Router)
React 18
Three.js + React Three Fiber + Drei
GSAP + @gsap/react
Framer Motion
Lenis (smooth scroll)
Zustand (scroll state management)
TypeScript
Tailwind CSS
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or extract the project
cd cinematic-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main orchestration page
├── components/
│   ├── three/
│   │   ├── SceneCanvas.tsx         # R3F Canvas wrapper
│   │   └── CinematicBackground.tsx # The entire 3D experience
│   ├── sections/
│   │   ├── HeroSection.tsx         # Phase 01: Chaos
│   │   ├── AboutSection.tsx        # Phase 02: Discovery
│   │   ├── ExpertiseSection.tsx    # Phase 03: Expertise
│   │   ├── ProjectsSection.tsx     # Phase 04: Creation
│   │   ├── CaseStudiesSection.tsx  # Phase 05: Transformation
│   │   ├── JourneySection.tsx      # Phase 06: Evolution
│   │   └── ContactSection.tsx      # Phase 07: Convergence
│   └── ui/
│       ├── Navigation.tsx          # Phase-aware nav
│       ├── ScrollIndicator.tsx     # Vertical phase indicator
│       ├── PhaseOverlay.tsx        # Bottom-left phase label
│       └── CustomCursor.tsx        # Phase-colored cursor
├── hooks/
│   └── useSmoothScroll.ts         # Lenis integration
├── lib/
│   ├── scrollStore.ts              # Zustand global state
│   └── shaders.ts                  # Custom GLSL shaders
└── styles/
    └── globals.css                 # Global styles + fonts
```

---

## 🎨 Customization Guide

### Changing Personal Information

**Hero message** → `src/components/sections/HeroSection.tsx`

**About data** → `src/components/sections/AboutSection.tsx`
- Update `DATA_POINTS` array
- Update bio paragraphs
- Update stats grid

**Skills** → `src/components/sections/ExpertiseSection.tsx`
- Update `SKILL_NODES` array with your technologies

**Projects** → `src/components/sections/ProjectsSection.tsx`
- Update `PROJECTS` array

**Case Study** → `src/components/sections/CaseStudiesSection.tsx`
- Update `CASE_STUDY` object

**Career Journey** → `src/components/sections/JourneySection.tsx`
- Update `MILESTONES` array

**Contact** → `src/components/sections/ContactSection.tsx`
- Update email address
- Connect form to your preferred backend (Resend, EmailJS, etc.)

---

## ⚡ Performance Notes

The Three.js experience is optimized with:
- `dpr={[1, 1.5]}` — caps pixel ratio for performance
- `powerPreference: 'high-performance'` — GPU hint
- Additive blending on particles (GPU-efficient)
- Lazy shader compilation
- `Suspense` boundaries for graceful loading

For slower devices, consider reducing `PARTICLE_COUNT` in `CinematicBackground.tsx` (default: 8000).

---

## 🎭 Shader Architecture

The particle system uses custom GLSL shaders (`src/lib/shaders.ts`):

- **particleVertexShader**: Controls position, size, and color of each particle based on scroll phase
- **particleFragmentShader**: Renders soft glow circles with phase-specific star shapes
- **bgFragmentShader**: Full-screen FBM noise background that shifts color per phase

The `phase` uniform is a float 0–7 where each integer represents a narrative section, and the fractional part represents progress through that section.

---

## 🔧 Environment Variables

Create `.env.local` for contact form integration:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 📱 Responsive Notes

The experience is optimized for desktop (the 3D background is the centerpiece). On mobile:
- Three.js canvas still renders but at lower DPR
- Sections stack vertically
- Navigation collapses
- Custom cursor is hidden (touch devices)

For production, add media queries to hide the cursor component on touch devices.

---

## 🏆 Design Philosophy

> "Think like a movie, not a website."

Every design decision serves the narrative:
- **No hero image** — the chaos particles ARE the hero
- **No icon grids** — expertise is shown as energy networks  
- **No card carousels** — projects unfold on click
- **No linear footer links** — contact is shown as a knowledge convergence graph

The user should finish the journey understanding: **I don't build websites — I solve problems through digital experiences.**

---

Built with precision and intentionality.
