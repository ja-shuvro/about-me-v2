'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILL_NODES = [
  {
    category: 'MOBILE RUNTIME',
    color: '#7c3aed',
    skills: ['Flutter', 'Android SDK', 'Riverpod', 'GetX', 'State Management'],
    level: 95,
  },
  {
    category: 'FRONTEND SYSTEMS',
    color: '#00d4ff',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    level: 93,
  },
  {
    category: 'BACKEND ENGINE',
    color: '#ff6b35',
    skills: ['Laravel', 'Express.js', 'NestJS', 'REST API', 'PHP'],
    level: 94,
  },
  {
    category: 'DATA LAYER',
    color: '#00ff88',
    skills: ['MongoDB', 'MySQL', 'Prisma', 'Sequelize', 'Mongoose'],
    level: 90,
  },
  {
    category: 'CMS & INTEGRATION',
    color: '#ffd700',
    skills: ['WordPress', 'Plugin Customization', 'Bespoke Themes', 'APIs'],
    level: 88,
  },
  {
    category: 'DEV TOOLS',
    color: '#ff3366',
    skills: ['Git', 'GitHub', 'CI/CD (basic)', 'Vercel'],
    level: 91,
  },
]

function SkillNode({ node, delay, index }: {
  node: typeof SKILL_NODES[0]; delay: number; index: number
}) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, type: 'spring', bounce: 0.3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: hovered ? `rgba(${hexToRgb(node.color)}, 0.12)` : 'rgba(2,4,8,0.55)',
        backdropFilter: 'blur(8px)',
        border: `1px solid ${hovered ? node.color : 'rgba(255,255,255,0.1)'}`,
        borderRadius: '2px',
        padding: '1.5rem',
        cursor: 'default',
        transition: 'all 0.4s ease',
        boxShadow: hovered ? `0 0 30px ${node.color}20, inset 0 0 30px ${node.color}05` : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Energy pulse on hover */}
      {hovered && (
        <motion.div
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: node.color,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Category header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          color: node.color,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>
          {node.category}
        </span>
        <div style={{ display: 'flex', gap: '2px' }}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: i < Math.round(node.level / 20) ? 1 : 0.15 } : {}}
              transition={{ delay: delay + 0.1 * i }}
              style={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: node.color,
                boxShadow: i < Math.round(node.level / 20) ? `0 0 4px ${node.color}` : 'none',
              }}
            />
          ))}
        </div>
      </div>

      {/* Level bar */}
      <div style={{
        height: 1,
        background: 'rgba(255,255,255,0.06)',
        marginBottom: '1.2rem',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${node.level}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: node.color,
            boxShadow: `0 0 8px ${node.color}`,
          }}
        />
      </div>

      {/* Skills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {node.skills.map((skill, si) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.1 * si + 0.4 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.6)',
              padding: '0.2rem 0.5rem',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '1px',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {skill}
          </motion.span>
        ))}
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

export default function ExpertiseSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{
      minHeight: '100vh',
      padding: '8rem 3rem',
      position: 'relative',
    }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: '#7c3aed',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            PHASE_03 // EXPERTISE — CAPABILITIES ONLINE
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}>
            Intelligence
            <br />
            <span style={{ color: '#7c3aed' }}>activated.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.4)',
            maxWidth: '500px',
            lineHeight: 1.7,
          }}>
            Not a list of technologies. A network of interconnected capabilities — 
            each node amplifying the others, forming systems greater than their parts.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          marginBottom: '4rem',
        }}>
          {SKILL_NODES.map((node, i) => (
            <SkillNode key={node.category} node={node} delay={i * 0.12} index={i} />
          ))}
        </div>

        {/* Philosophy statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          style={{
            textAlign: 'center',
            padding: '3rem',
            border: '1px solid rgba(124,58,237,0.15)',
            background: 'rgba(124,58,237,0.03)',
            borderRadius: '2px',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.6,
            fontWeight: 300,
          }}>
            &ldquo;The best technology is <span style={{ color: '#7c3aed' }}>invisible</span>. 
            It solves problems so elegantly that users never notice the engineering beneath.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
