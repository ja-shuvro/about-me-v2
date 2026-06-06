'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const KNOWLEDGE_NODES = [
  { label: 'System Architecture', x: 20, y: 30, color: '#7c3aed' },
  { label: 'User Research', x: 70, y: 20, color: '#00ff88' },
  { label: 'Engineering', x: 80, y: 60, color: '#ff6b35' },
  { label: 'Design Systems', x: 30, y: 70, color: '#00d4ff' },
  { label: 'AI Integration', x: 55, y: 45, color: '#ffd700' },
  { label: 'Performance', x: 15, y: 55, color: '#ff3366' },
]

export default function ContactSection() {
  const [focused, setFocused] = useState('')
  const [sent, setSent] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section style={{ minHeight: '100vh', padding: '8rem 3rem', display: 'flex', alignItems: 'center' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            PHASE_07 // CONVERGENCE — ALL KNOWLEDGE READY
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            marginBottom: '1.5rem',
          }}>
            Let's build the
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #00f5ff, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              next solution.
            </span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.4)',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            A new unresolved node has appeared in the network. 
            That's your problem. Let's connect it to the solution.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Knowledge convergence visual */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            style={{
              position: 'relative',
              height: '350px',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '2px',
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.01)',
            }}
          >
            {/* Connection lines to center */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              {KNOWLEDGE_NODES.map((node, i) => (
                <motion.line
                  key={i}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2="50%"
                  y2="50%"
                  stroke={node.color}
                  strokeWidth={0.5}
                  strokeOpacity={0.3}
                  initial={{ pathLength: 0 }}
                  animate={inView ? {
                    pathLength: 1,
                    strokeOpacity: [0.1, 0.4, 0.1],
                  } : {}}
                  transition={{ duration: 2, delay: 0.5 + i * 0.1, repeat: Infinity }}
                />
              ))}
              {/* New unknown node */}
              <motion.circle
                cx="75%"
                cy="80%"
                r="5"
                fill="#ff3366"
                animate={{ r: [4, 7, 4], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.line
                x1="75%"
                y1="80%"
                x2="50%"
                y2="50%"
                stroke="#ff3366"
                strokeWidth={0.8}
                strokeDasharray="4 4"
                animate={{ strokeDashoffset: [0, -8] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
              />
            </svg>

            {/* Nodes */}
            {KNOWLEDGE_NODES.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                style={{
                  position: 'absolute',
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: node.color,
                  boxShadow: `0 0 8px ${node.color}`,
                }} />
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.5rem',
                  color: node.color,
                  whiteSpace: 'nowrap',
                  opacity: 0.7,
                }}>
                  {node.label}
                </div>
              </motion.div>
            ))}

            {/* Center node - converged knowledge */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0,245,255,0.3)',
                  '0 0 40px rgba(0,245,255,0.6)',
                  '0 0 20px rgba(0,245,255,0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: '#00f5ff',
                border: '2px solid rgba(0,245,255,0.5)',
              }}
            />

            {/* Unknown node label */}
            <div style={{
              position: 'absolute',
              left: '75%',
              top: '85%',
              transform: 'translate(-50%, 0)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.5rem',
              color: '#ff3366',
              whiteSpace: 'nowrap',
            }}>
              YOUR_PROBLEM_?
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            {!sent ? (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {[
                    { name: 'name', label: 'YOUR_NAME', type: 'text', placeholder: 'Alex Johnson' },
                    { name: 'email', label: 'CONTACT_VECTOR', type: 'email', placeholder: 'alex@company.com' },
                    { name: 'problem', label: 'DESCRIBE_THE_PROBLEM', type: 'textarea', placeholder: 'We need to...' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        color: focused === field.name ? '#00f5ff' : 'rgba(255,255,255,0.3)',
                        letterSpacing: '0.2em',
                        marginBottom: '0.5rem',
                        transition: 'color 0.3s ease',
                      }}>
                        {field.label}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused('')}
                          rows={4}
                          placeholder={field.placeholder}
                          style={{
                            width: '100%',
                            background: focused === field.name ? 'rgba(0,245,255,0.04)' : 'rgba(255,255,255,0.02)',
                            border: `1px solid ${focused === field.name ? 'rgba(0,245,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
                            borderRadius: '2px',
                            padding: '0.8rem 1rem',
                            color: 'rgba(255,255,255,0.8)',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.9rem',
                            resize: 'vertical',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            boxSizing: 'border-box',
                          }}
                        />
                      ) : (
                        <input
                          type={field.type}
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused('')}
                          placeholder={field.placeholder}
                          style={{
                            width: '100%',
                            background: focused === field.name ? 'rgba(0,245,255,0.04)' : 'rgba(255,255,255,0.02)',
                            border: `1px solid ${focused === field.name ? 'rgba(0,245,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
                            borderRadius: '2px',
                            padding: '0.8rem 1rem',
                            color: 'rgba(255,255,255,0.8)',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.9rem',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            boxSizing: 'border-box',
                          }}
                        />
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(0,245,255,0.4)',
                      borderRadius: '2px',
                      padding: '1rem 2rem',
                      color: '#00f5ff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={e => {
                      (e.target as HTMLElement).style.background = 'rgba(0,245,255,0.08)'
                      ;(e.target as HTMLElement).style.boxShadow = '0 0 20px rgba(0,245,255,0.2)'
                    }}
                    onMouseLeave={e => {
                      (e.target as HTMLElement).style.background = 'transparent'
                      ;(e.target as HTMLElement).style.boxShadow = 'none'
                    }}
                  >
                    INITIALIZE_CONNECTION →
                  </button>

                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    color: 'rgba(255,255,255,0.2)',
                    textAlign: 'center',
                  }}>
                    OR REACH DIRECTLY: hello@alexchen.dev
                  </div>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '3rem' }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  style={{ fontSize: '2rem', marginBottom: '1rem' }}
                >
                  ◎
                </motion.div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: '#00f5ff',
                  letterSpacing: '0.2em',
                  marginBottom: '1rem',
                }}>
                  NODE_CONNECTED
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  color: 'rgba(255,255,255,0.5)',
                }}>
                  Your problem has been added to the network. Expect a response within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
