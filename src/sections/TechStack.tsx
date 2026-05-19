import { motion } from 'motion/react'

const categories = [
  {
    label: 'languages',
    items: ['Rust', 'Python', 'TypeScript', 'Go', 'C++', 'GLSL'],
  },
  {
    label: 'ai_ml',
    items: ['PyTorch', 'XGBoost', 'FAISS', 'LangChain', 'RAG'],
  },
  {
    label: 'infra',
    items: ['Three.js', 'Docker', 'PostgreSQL', 'Redis', 'Cloudflare'],
  },
  {
    label: 'frontend',
    items: ['Electron', 'Framer Motion', 'TailwindCSS', 'Lenis'],
  },
]

export default function TechStack() {
  return (
    <section id="stack" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '32px' }}
      >
        <div className="terminal-output" style={{ marginBottom: '4px' }}>
          <span className="terminal-prompt">$</span>{' '}
          <span className="terminal-cmd">cat ~/stack.json</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="terminal-window">
          <div className="terminal-bar">
            <div className="terminal-dot" style={{ background: '#ff5f57' }} />
            <div className="terminal-dot" style={{ background: '#febc2e' }} />
            <div className="terminal-dot" style={{ background: '#28c840' }} />
            <span className="terminal-comment" style={{ marginLeft: '8px', fontSize: '0.75rem' }}>
              stack.json
            </span>
          </div>

          <div className="terminal-body" style={{ fontFamily: 'var(--mono)', fontSize: '0.8125rem' }}>
            <div className="terminal-output">
              <span style={{ color: '#6b7280' }}>{'{'}</span>
            </div>

            {categories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.1 }}
                style={{ paddingLeft: '24px', marginBottom: ci < categories.length - 1 ? '16px' : 0 }}
              >
                <div className="terminal-output">
                  <span className="terminal-key">"{cat.label}"</span>
                  <span style={{ color: '#6b7280' }}>: [</span>
                </div>

                <div style={{ paddingLeft: '24px' }}>
                  {cat.items.map((item, ii) => (
                    <div key={item} className="terminal-output">
                      <span style={{ color: '#6b7280' }}>{ii < cat.items.length - 1 ? '├─' : '└─'}</span>{' '}
                      <span className="terminal-string">"{item}"</span>
                      {ii < cat.items.length - 1 && <span style={{ color: '#6b7280' }}>,</span>}
                    </div>
                  ))}
                </div>

                <div className="terminal-output">
                  <span style={{ color: '#6b7280' }}>]</span>
                  {ci < categories.length - 1 && <span style={{ color: '#6b7280' }}>,</span>}
                </div>
              </motion.div>
            ))}

            <div className="terminal-output">
              <span style={{ color: '#6b7280' }}>{'}'}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
