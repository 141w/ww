import { motion } from 'motion/react'
import { projects } from '../data/projects'
import { ArrowUpRight } from 'lucide-react'

export default function Projects() {
  const featured = projects.find(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '32px' }}
      >
        <div className="terminal-output" style={{ marginBottom: '4px' }}>
          <span className="terminal-prompt">$</span>{' '}
          <span className="terminal-cmd">ls -la ~/projects/</span>
        </div>
        <div className="terminal-comment" style={{ fontSize: '0.75rem' }}>
          AI、系统和基础设施交叉领域的开源项目
        </div>
      </motion.div>

      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '32px' }}
          id={`project-${featured.id}`}
        >
          <div className="terminal-window">
            <div className="terminal-bar">
              <div className="terminal-dot" style={{ background: '#ff5f57' }} />
              <div className="terminal-dot" style={{ background: '#febc2e' }} />
              <div className="terminal-dot" style={{ background: '#28c840' }} />
              <span className="terminal-comment" style={{ marginLeft: '8px', fontSize: '0.75rem' }}>
                ⭐ featured — {featured.title.toLowerCase().replace(/\s+/g, '-')}
              </span>
            </div>

            <div className="terminal-body">
              <div className="terminal-output" style={{ marginBottom: '12px' }}>
                <span className="terminal-prompt">❯</span>{' '}
                <span className="terminal-cmd" style={{ color: 'var(--accent)' }}>
                  {featured.title}
                </span>
                <span style={{ marginLeft: '8px', color: '#6b7280' }}>
                  — {featured.tagline}
                </span>
              </div>

              <p className="terminal-output" style={{ marginBottom: '16px', lineHeight: 1.7 }}>
                {featured.description}
              </p>

              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '4px',
                  background: 'rgba(192,132,252,0.06)',
                  border: '1px solid rgba(192,132,252,0.12)',
                  marginBottom: '16px',
                }}
              >
                <p className="terminal-output" style={{ color: 'var(--accent)', fontSize: '0.8125rem' }}>
                  → {featured.conclusion}
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                {featured.highlights.map((h) => (
                  <div key={h} className="terminal-output" style={{ marginBottom: '2px' }}>
                    <span style={{ color: '#6b7280' }}>  ├─</span> {h}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="terminal-output"
                    style={{
                      padding: '2px 10px',
                      borderRadius: '3px',
                      border: '1px solid var(--accent-border)',
                      background: 'var(--accent-bg)',
                      fontSize: '0.6875rem',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={featured.links.github}
                className="terminal-prompt"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.8125rem',
                  textDecoration: 'none',
                }}
              >
                查看详情 <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {others.length > 0 && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="terminal-comment"
            style={{
              fontSize: '0.75rem',
              textAlign: 'center',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            other projects
            <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {others.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={`project-${project.id}`}
              >
                <div className="terminal-window" style={{ height: '100%' }}>
                  <div className="terminal-bar">
                    <div className="terminal-dot" style={{ background: '#ff5f57' }} />
                    <div className="terminal-dot" style={{ background: '#febc2e' }} />
                    <div className="terminal-dot" style={{ background: '#28c840' }} />
                    <span className="terminal-comment" style={{ marginLeft: '8px', fontSize: '0.75rem' }}>
                      {project.id}
                    </span>
                  </div>

                  <div className="terminal-body">
                    <div className="terminal-output" style={{ marginBottom: '8px' }}>
                      <span className="terminal-cmd" style={{ color: 'var(--accent)' }}>
                        {project.title}
                      </span>
                      <span style={{ marginLeft: '8px', color: '#6b7280', fontSize: '0.75rem' }}>
                        — {project.tagline}
                      </span>
                    </div>

                    <p className="terminal-output" style={{ marginBottom: '12px', fontSize: '0.75rem', lineHeight: 1.6 }}>
                      {project.description}
                    </p>

                    <div
                      style={{
                        padding: '8px 12px',
                        borderRadius: '3px',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.04)',
                        marginBottom: '12px',
                      }}
                    >
                      <p className="terminal-output" style={{ fontSize: '0.6875rem' }}>
                        → {project.conclusion}
                      </p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="terminal-output"
                          style={{
                            padding: '2px 8px',
                            borderRadius: '3px',
                            border: '1px solid var(--border)',
                            background: 'rgba(255,255,255,0.02)',
                            fontSize: '0.625rem',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.links.github}
                      className="terminal-prompt"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.75rem',
                        textDecoration: 'none',
                      }}
                    >
                      查看详情 <ArrowUpRight size={10} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
