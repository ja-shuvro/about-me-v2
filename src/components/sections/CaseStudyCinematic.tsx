'use client'
import Link from 'next/link'
import { useState } from 'react'
import CustomCursor from '@/components/ui/CustomCursor'
import { CaseStudy } from '@/lib/projectData'

export default function CaseStudyCinematic({ data }: { data: CaseStudy }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0)
  const activeImage = data.images[activeImgIndex] || data.images[0]

  return (
    <main className="case-study-page cinematic-main" style={{ position: 'relative', zIndex: 10 }}>
      {/* Custom cursor matching case study accent color */}
      <CustomCursor colorOverride={data.color} />
      
      {/* Background ambient light */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '25%',
        width: '50%',
        height: '400px',
        background: `radial-gradient(circle, ${data.color}15 0%, transparent 70%)`,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Back Link */}
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.4)',
          textDecoration: 'none',
          letterSpacing: '0.15em',
          marginBottom: '3rem',
          transition: 'color 0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.color = data.color}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
        >
          ← RETURN_TO_SYSTEM
        </Link>

        {/* Phase Header */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: data.color,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          CASE_STUDY_REPORT // SYSTEM_ANALYSIS
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 300,
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em'
        }}>
          {data.name}
          <br />
          <span style={{ color: data.color, fontSize: '0.7em' }}>{data.tagline}</span>
        </h1>

        {/* Grid Metadata */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          padding: '1.5rem',
          background: 'rgba(2,4,8,0.55)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '2px',
          marginBottom: '3rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem'
        }}>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.3)', marginBottom: '0.2rem' }}>CLIENT</div>
            <div style={{ color: '#fff' }}>{data.client}</div>
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.3)', marginBottom: '0.2rem' }}>TIMELINE</div>
            <div style={{ color: '#fff' }}>{data.timeline}</div>
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.3)', marginBottom: '0.2rem' }}>ROLE</div>
            <div style={{ color: '#fff' }}>{data.role}</div>
          </div>
        </div>

        {/* Key Metrics */}
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.6rem',
          fontWeight: 300,
          marginBottom: '1.5rem',
          color: '#fff'
        }}>
          Measurable Transformation Metrics
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '4rem'
        }}>
          {data.metrics.map((m, idx) => (
            <div key={idx} style={{
              padding: '1.5rem',
              background: 'rgba(2,4,8,0.5)',
              backdropFilter: 'blur(8px)',
              border: `1px solid ${data.color}35`,
              borderRadius: '2px'
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.2rem',
                color: data.color,
                fontWeight: 300
              }}>{m.value}</div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
                marginTop: '0.4rem',
                letterSpacing: '0.05em'
              }}>{m.label}</div>
              <div style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.3)',
                marginTop: '0.2rem'
              }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Report Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '4rem' }}>
          <div>
            <h3 style={sectionTitleStyle}>01 / Executive Summary</h3>
            <p style={paragraphStyle}>{data.overview}</p>
          </div>

          <div>
            <h3 style={sectionTitleStyle}>02 / The Challenge</h3>
            <p style={paragraphStyle}>{data.problem}</p>
          </div>

          <div>
            <h3 style={sectionTitleStyle}>03 / Implementation & Solution</h3>
            <p style={paragraphStyle}>{data.solution}</p>
          </div>

          <div>
            <h3 style={sectionTitleStyle}>04 / Architecture & Strategy</h3>
            <p style={paragraphStyle}>{data.architecture}</p>
          </div>

          <div>
            <h3 style={sectionTitleStyle}>05 / Diagnostics & Challenges</h3>
            <p style={paragraphStyle}>{data.challenges}</p>
          </div>

          <div>
            <h3 style={sectionTitleStyle}>06 / Key System Features</h3>
            <ul style={{ ...paragraphStyle, paddingLeft: '1.2rem', margin: '0.5rem 0' }}>
              {data.features.map((f, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={sectionTitleStyle}>07 / Outcome & Result</h3>
            <p style={paragraphStyle}>{data.result}</p>
          </div>

          <div>
            <h3 style={sectionTitleStyle}>08 / Future Improvements</h3>
            <ul style={{ ...paragraphStyle, paddingLeft: '1.2rem', margin: '0.5rem 0' }}>
              {data.futureImprovements.map((imp, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{imp}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={sectionTitleStyle}>09 / Technology Pipeline Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              {data.tech.map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: data.color,
                  padding: '0.3rem 0.8rem',
                  border: `1px solid ${data.color}35`,
                  background: `${data.color}08`,
                  borderRadius: '1px'
                }}>{t}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 style={sectionTitleStyle}>10 / Project Integrations & Repos</h3>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              {!data.links.github.startsWith('http') ? (
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'rgba(255, 255, 255, 0.4)',
                  padding: '0.4rem 0.8rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}>
                  {data.links.github}
                </span>
              ) : (
                <a href={data.links.github} target="_blank" rel="noopener noreferrer" style={repoLinkStyle(data.color)}>
                  [GitHub Repository]
                </a>
              )}
              
              {data.links.demo && (
                <a href={data.links.demo} target="_blank" rel="noopener noreferrer" style={repoLinkStyle(data.color)}>
                  [Live Demo]
                </a>
              )}
              {data.links.site && (
                <a href={data.links.site} target="_blank" rel="noopener noreferrer" style={repoLinkStyle(data.color)}>
                  [Website]
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Screenshots Showcase */}
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.6rem',
          fontWeight: 300,
          marginBottom: '1.5rem',
          color: '#fff',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '3rem'
        }}>
          System Visualizations
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {data.images.map((img, index) => (
            <div key={index} style={{
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              aspectRatio: '16/10',
              background: 'rgba(0,0,0,0.4)'
            }}>
              <img
                src={img}
                alt={`${data.name} visual representation ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.8,
                  transition: 'transform 0.5s, opacity 0.5s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.opacity = '1'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.opacity = '0.8'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

const sectionTitleStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.75rem',
  color: 'rgba(255,255,255,0.4)',
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  marginBottom: '1rem',
  borderBottom: '1px solid rgba(255,255,255,0.04)',
  paddingBottom: '0.4rem'
}

const paragraphStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  color: 'rgba(255,255,255,0.7)',
  lineHeight: 1.8,
  letterSpacing: '0.01em'
}

const repoLinkStyle = (color: string) => ({
  fontFamily: 'var(--font-mono)',
  fontSize: '0.7rem',
  color: color,
  textDecoration: 'none',
  padding: '0.4rem 0.8rem',
  border: `1px solid ${color}45`,
  background: `${color}08`,
  transition: 'all 0.3s ease'
})
