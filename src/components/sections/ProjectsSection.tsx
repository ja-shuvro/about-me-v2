'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const PROJECTS = [
  {
    id: '001',
    name: 'Flirtmetrics',
    tagline: 'Cross-platform dating app with real-time chat',
    description: 'A cross-platform dating application featuring real-time messaging, custom swiping interfaces, and fluid transitions. Engineered with Flutter and Riverpod state management.',
    stack: ['Flutter', 'Riverpod', 'WebSockets', 'Firebase', 'REST API'],
    metrics: { platforms: 'iOS & Android', states: 'Riverpod', latency: '<200ms' },
    color: '#ff3366',
    status: 'LIVE',
    images: [
      '/flirtmetrics/thumbnail.png',
      '/flirtmetrics/slide1.png',
      '/flirtmetrics/slide2.png',
      '/flirtmetrics/slide3.png',
      '/flirtmetrics/slide4.png',
      '/flirtmetrics/slide5.png'
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.flirtmetrics.app',
      appStore: 'https://apps.apple.com/pk/app/flirtmetrics-cold-approach/id6755988541',
      site: 'https://flirtmetrics.com/',
      github: '#'
    }
  },
  {
    id: '002',
    name: 'ERP System',
    tagline: 'Enterprise Resource Planning Platform',
    description: 'A complete enterprise suite for resource planning, inventory tracking, financial auditing, and dealer performance monitoring. Designed with modular widgets and real-time dashboard analytics.',
    stack: ['React', 'Next.js', 'Node.js', 'Vercel', 'Tailwind CSS'],
    metrics: { modules: '10+', speed: 'Fast', database: 'PostgreSQL' },
    color: '#00ff88',
    status: 'LIVE',
    images: [
      '/erp/dashboard.png',
      '/erp/login.png',
      '/erp/report.png',
      '/erp/stock-level.png',
      '/erp/notification.png'
    ],
    links: {
      demo: 'https://erp-client-six.vercel.app/',
      github: '#'
    }
  },
  {
    id: '003',
    name: 'AgriflowBD',
    tagline: 'Smart Agriculture Platform for Bangladesh',
    description: 'An innovative agricultural supply chain and mapping platform connecting growers and distributors. Features real-time price tracking, inventory management, and location mapping.',
    stack: ['React', 'Next.js', 'Laravel', 'Tailwind CSS', 'MySQL'],
    metrics: { sectors: 'Agriculture', geo: 'Bangladesh', type: 'Supply Chain' },
    color: '#ffd700',
    status: 'LIVE',
    images: [
      '/agriflowbd/thumbnail.png'
    ],
    links: {
      site: 'https://www.agriflowbd.com/',
      video: 'https://youtu.be/pbmFSv7RBIQ?si=ARuleYULTeaDqsgc',
      github: '#'
    }
  },
  {
    id: '004',
    name: 'Smart Prop Trader',
    tagline: 'Proprietary property trading web platform',
    description: 'A comprehensive trading dashboard designed for property evaluation and trader tracking. Implemented secure data pipelines, dynamic chart rendering, and detailed user activity analytics.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'React', 'Tailwind CSS'],
    metrics: { framework: 'Next.js', db: 'MongoDB', type: 'Fintech/Prop' },
    color: '#00d4ff',
    status: 'LIVE',
    images: ['/smartproptrader.png'],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    id: '005',
    name: 'Student Square',
    tagline: 'Educational management web portal',
    description: 'An academic portal designed for school systems and student management in Bangladesh. Architected with secure REST APIs, transaction logs, and normalized database schemas.',
    stack: ['React', 'Express.js', 'MySQL', 'Node.js', 'Bootstrap'],
    metrics: { users: 'Teachers & Students', backend: 'Express.js', database: 'MySQL' },
    color: '#7c3aed',
    status: 'DEPLOYED',
    images: ['/studentsquare.png'],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    id: '006',
    name: 'Rent Sale BD',
    tagline: 'Property rental and sales marketplace',
    description: 'A property marketplace platform facilitating rental listings and home sales. Features user profiles, advanced search filtering, and robust relational data management.',
    stack: ['HTML5', 'Express.js', 'MySQL', 'Node.js', 'CSS3'],
    metrics: { listings: '1000+', queries: 'Optimized', type: 'Marketplace' },
    color: '#ff6b35',
    status: 'LIVE',
    images: ['/rentsalebd.png'],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    id: '007',
    name: 'McNeil Estate Planning',
    tagline: 'Professional estate planning portal',
    description: 'A bespoke corporate planning and legal portfolio system designed for clients. Custom WordPress integration with lightweight theme structures for high-performance indexing.',
    stack: ['WordPress', 'Elementor', 'Astra Theme', 'PHP', 'SEO Opt'],
    metrics: { speed: '98/100', SEO: 'Fully Opt', category: 'Corporate' },
    color: '#ff3366',
    status: 'LIVE',
    images: ['/mcneilpstateplanning.png'],
    links: {
      demo: '#',
      github: '#'
    }
  }
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
  const [activeImgIndex, setActiveImgIndex] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const activeImage = project.images[activeImgIndex] || project.images[0]

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
        <div className="project-expanded-grid">
          {/* Left column: Info & actions */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.8rem' }}>
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
            
            {/* Actions */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {project.links.site && (
                <a
                  href={project.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={actionButtonStyle(project.color)}
                  onMouseEnter={hoverAction}
                  onMouseLeave={(e) => leaveAction(e, project.color)}
                >
                  WEBSITE →
                </a>
              )}
              {'demo' in project.links && project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={actionButtonStyle(project.color)}
                  onMouseEnter={hoverAction}
                  onMouseLeave={(e) => leaveAction(e, project.color)}
                >
                  LIVE_DEMO →
                </a>
              )}
              {'playStore' in project.links && project.links.playStore && (
                <a
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={actionButtonStyle(project.color)}
                  onMouseEnter={hoverAction}
                  onMouseLeave={(e) => leaveAction(e, project.color)}
                >
                  PLAY_STORE
                </a>
              )}
              {'appStore' in project.links && project.links.appStore && (
                <a
                  href={project.links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={actionButtonStyle(project.color)}
                  onMouseEnter={hoverAction}
                  onMouseLeave={(e) => leaveAction(e, project.color)}
                >
                  APP_STORE
                </a>
              )}
              {'video' in project.links && project.links.video && (
                <a
                  href={project.links.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={videoButtonStyle()}
                  onMouseEnter={hoverVideo}
                  onMouseLeave={leaveVideo}
                >
                  VIDEO_PREVIEW
                </a>
              )}
              {project.links.github && project.links.github !== '#' && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={secondaryButtonStyle()}
                  onMouseEnter={hoverSecondary}
                  onMouseLeave={leaveSecondary}
                >
                  SOURCE_CODE
                </a>
              )}
            </div>
          </div>

          {/* Right column: Graphic preview with scanline effect */}
          <div>
            <div style={{
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden',
              border: `1px solid ${project.color}45`,
              aspectRatio: '16/10',
              background: 'rgba(0,0,0,0.4)',
            }}>
              {/* Cyber scanline overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.3))',
                backgroundSize: '100% 4px',
                zIndex: 2,
                pointerEvents: 'none',
              }} />
              <img
                src={activeImage}
                alt={project.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.85,
                  transition: 'transform 0.5s ease, opacity 0.5s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.opacity = '1'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.opacity = '0.85'
                }}
              />
            </div>

            {/* Pagination for multi-slide images */}
            {project.images.length > 1 && (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '6px',
                marginTop: '12px',
                position: 'relative',
                zIndex: 10,
              }}>
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImgIndex(idx);
                    }}
                    style={{
                      width: activeImgIndex === idx ? '24px' : '8px',
                      height: '4px',
                      background: activeImgIndex === idx ? project.color : 'rgba(255,255,255,0.2)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
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

/* Button style helpers */
const actionButtonStyle = (color: string) => ({
  fontFamily: 'var(--font-mono)',
  fontSize: '0.65rem',
  color: '#ffffff',
  padding: '0.6rem 1.2rem',
  border: `1px solid ${color}`,
  background: `${color}20`,
  textDecoration: 'none',
  letterSpacing: '0.15em',
  transition: 'all 0.3s ease',
  borderRadius: '1px',
})

const hoverAction = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const borderCol = e.currentTarget.style.borderColor
  e.currentTarget.style.background = borderCol
  e.currentTarget.style.boxShadow = `0 0 15px ${borderCol}80`
}

const leaveAction = (e: React.MouseEvent<HTMLAnchorElement>, color: string) => {
  e.currentTarget.style.background = `${color}20`
  e.currentTarget.style.boxShadow = 'none'
}

const videoButtonStyle = () => ({
  fontFamily: 'var(--font-mono)',
  fontSize: '0.65rem',
  color: '#00f5ff',
  padding: '0.6rem 1.2rem',
  border: '1px solid #00f5ff',
  background: 'rgba(0, 245, 255, 0.12)',
  textDecoration: 'none',
  letterSpacing: '0.15em',
  transition: 'all 0.3s ease',
  borderRadius: '1px',
})

const hoverVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.background = '#00f5ff'
  e.currentTarget.style.color = '#020408'
  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 245, 255, 0.6)'
}

const leaveVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.background = 'rgba(0, 245, 255, 0.12)'
  e.currentTarget.style.color = '#00f5ff'
  e.currentTarget.style.boxShadow = 'none'
}

const secondaryButtonStyle = () => ({
  fontFamily: 'var(--font-mono)',
  fontSize: '0.65rem',
  color: 'rgba(255,255,255,0.6)',
  padding: '0.6rem 1.2rem',
  border: '1px solid rgba(255,255,255,0.1)',
  background: 'transparent',
  textDecoration: 'none',
  letterSpacing: '0.15em',
  transition: 'all 0.3s ease',
  borderRadius: '1px',
})

const hoverSecondary = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
  e.currentTarget.style.color = '#ffffff'
}

const leaveSecondary = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
  e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
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
