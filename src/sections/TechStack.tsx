import { motion } from 'motion/react'

const categories = [
  {
    label: 'Languages',
    items: ['Rust', 'Python', 'TypeScript', 'Go', 'C++', 'GLSL'],
  },
  {
    label: 'AI / ML',
    items: ['PyTorch', 'XGBoost', 'FAISS', 'LangChain', 'RAG'],
  },
  {
    label: 'Infra',
    items: ['Three.js', 'Docker', 'PostgreSQL', 'Redis', 'Cloudflare'],
  },
  {
    label: 'Frontend',
    items: ['Electron', 'Framer Motion', 'TailwindCSS', 'Lenis'],
  },
]

export default function TechStack() {
  return (
    <section id="stack" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
          /stack
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-3" style={{ color: 'var(--text-h)' }}>
          技术栈
        </h2>
      </motion.div>

      <div className="space-y-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: ci * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest shrink-0" style={{ color: 'var(--text)' }}>
                {cat.label}
              </span>
              <div className="h-px flex-1" style={{
                background: 'linear-gradient(to right, var(--border), transparent)'
              }} />
            </div>
            <div className="flex flex-wrap gap-2.5">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-sm rounded-xl border transition-all duration-200"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--text)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-border)'
                    e.currentTarget.style.color = 'var(--text-h)'
                    e.currentTarget.style.background = 'var(--accent-bg)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
