'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const PROJECTS = [
  {
    id: '001',
    name: 'Flirtmetrics',
    tagline: 'Cross-platform dating app with real-time chat',
    description: 'Developed a highly interactive cross-platform mobile dating application featuring custom UI/UX animations and robust message syncing. Integrated real-time chat utilizing WebSockets.',
    stack: ['Flutter', 'Riverpod', 'WebSockets', 'Firebase', 'REST API'],
    metrics: { platforms: 'iOS & Android', states: 'Riverpod', latency: '<200ms' },
    color: '#ff3366',
    status: 'LIVE',
  },
  {
    id: '002',
    name: 'Smart Prop Trader',
    tagline: 'Proprietary property trading web platform',
    description: 'Architected a comprehensive trading dashboard with secure real-time data pipelines. Implemented responsive, dynamic financial charts and detailed user analytics.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'React', 'Tailwind CSS'],
    metrics: { framework: 'Next.js', db: 'MongoDB', type: 'Fintech/Prop' },
    color: '#00ff88',
    status: 'LIVE',
  },
  {
    id: '003',
    name: 'Student Square',
    tagline: 'Educational management web portal',
    description: 'Engineered an enterprise-grade school management platform for students and teachers in Bangladesh. Designed optimized database schemas and secure REST API services for academic tracking.',
    stack: ['React', 'Express.js', 'MySQL', 'Node.js', 'Bootstrap'],
    metrics: { users: 'Teachers & Students', backend: 'Express.js', database: 'MySQL' },
    color: '#00d4ff',
    status: 'DEPLOYED',
  },
]

function BuildingAnimation({ color }: { color: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-end',
      gap: '2px',
      height: 30,
    }}>
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            height: [4, 8 + Math.random() * 20, 4],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1 + Math.random(),
            repeat: Infinity,
            delay: i * 0.08,
            ease: 'easeInOut',
          }}
          style={{
            width: 3,
            background: color,
            borderRadius: '1px 1px 0 0',
          }}
        />
      ))}
    </div>
  )
}

function ProjectCard({ project, delay }: { project: typeof PROJECTS[0]; delay: number }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      onClick={() => setExpanded(!expanded)}
      style={{
        background: expanded ? `rgba(${hexToRgb(project.color)}, 0.1)` : 'rgba(2,4,8,0.55)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${expanded ? project.color + '60' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: '2px',
        padding: '2rem',
        cursor: 'pointer',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: '1.5rem',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: project.color,
            letterSpacing: '0.2em',
            marginBottom: '0.5rem',
          }}>
            PROJECT_{project.id} — {project.status}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.8rem',
            color: '#ffffff',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            marginBottom: '0.3rem',
          }}>
            {project.name}
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.4)',
          }}>
            {project.tagline}
          </p>
        </div>
        <BuildingAnimation color={project.color} />
      </div>

      {/* Metrics */}
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {Object.entries(project.metrics).map(([key, val]) => (
          <div key={key}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              color: project.color,
              fontWeight: 300,
            }}>
              {val}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              {key}
            </div>
          </div>
        ))}
      </div>

      {/* Expanded content */}
      <motion.div
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ overflow: 'hidden' }}
      >
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.7,
          marginBottom: '1.5rem',
        }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.stack.map(s => (
            <span key={s} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: project.color,
              padding: '0.2rem 0.6rem',
              border: `1px solid ${project.color}30`,
              background: `${project.color}08`,
              borderRadius: '1px',
            }}>
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6rem',
        color: 'rgba(255,255,255,0.2)',
        marginTop: '1rem',
        textAlign: 'right',
      }}>
        {expanded ? 'COLLAPSE ↑' : 'EXPAND_DETAILS ↓'}
      </div>
    </motion.div>
  )
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : '255,255,255'
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{ minHeight: '100vh', padding: '8rem 3rem' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: '#ff6b35',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            PHASE_04 // CREATION — IDEAS BECOMING PRODUCTS
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            Problems dissolved.
            <br />
            <span style={{ color: '#ff6b35' }}>Products deployed.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  )
}
