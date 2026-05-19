import { motion } from 'motion/react'
import { projects } from '../data/projects'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export default function Projects() {
  const featured = projects.find(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-10"
        style={{ willChange: 'transform, opacity' }}
      >
        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
          /projects
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-3" style={{ color: 'var(--text-h)' }}>
          精选项目
        </h2>
        <p className="mt-2 max-w-lg" style={{ color: 'var(--text)' }}>
          AI、系统和基础设施交叉领域的开源项目。
        </p>
      </motion.div>

      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={14} style={{ color: 'var(--accent)' }} />
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
              Featured
            </span>
          </div>
          <div className="glass-card rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 border border-white/[0.08]" style={{
            background: 'linear-gradient(135deg, rgba(192,132,252,0.06) 0%, rgba(255,255,255,0.03) 50%, rgba(56,189,248,0.04) 100%)',
          }}>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--text-h)' }}>
                    {featured.title}
                  </h3>
                  <p className="text-sm mt-1 font-mono" style={{ color: 'var(--accent)' }}>
                    {featured.tagline}
                  </p>
                </div>
                <ArrowUpRight size={22} className="mt-1 shrink-0 opacity-40" style={{ color: 'var(--text)' }} />
              </div>

              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text)' }}>
                {featured.description}
              </p>

              <div className="inline-block px-4 py-2 rounded-lg mb-5" style={{
                background: 'rgba(192,132,252,0.08)',
                border: '1px solid rgba(192,132,252,0.15)',
              }}>
                <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                  {featured.conclusion}
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {featured.highlights.map((h) => (
                  <li key={h} className="text-sm flex items-center gap-2" style={{ color: 'var(--text)' }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-5">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1.5 text-xs font-medium rounded-full border"
                    style={{
                      borderColor: 'var(--accent-border)',
                      color: 'var(--text)',
                      background: 'var(--accent-bg)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={featured.links.github}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:gap-2.5"
                style={{ color: 'var(--accent)' }}
              >
                查看详情
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {others.length > 0 && (
        <>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />
            <span className="text-xs font-mono tracking-widest" style={{ color: 'var(--text)' }}>其他项目</span>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="glass-card glass-card-hover rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold" style={{ color: 'var(--text-h)' }}>
                          {project.title}
                        </h3>
                        <p className="text-sm mt-0.5 font-mono" style={{ color: 'var(--accent)' }}>
                          {project.tagline}
                        </p>
                      </div>
                      <ArrowUpRight size={18} className="mt-1 shrink-0 opacity-40" style={{ color: 'var(--text)' }} />
                    </div>

                    <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text)' }}>
                      {project.description}
                    </p>

                    <div className="px-3 py-2 rounded-lg mb-3" style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.04)',
                    }}>
                      <p className="text-xs" style={{ color: 'var(--text)' }}>
                        {project.conclusion}
                      </p>
                    </div>

                    <ul className="space-y-1.5 mb-4">
                      {project.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="text-xs flex items-center gap-2" style={{ color: 'var(--text)' }}>
                          <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--text)' }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1.5 text-xs font-medium rounded-full border"
                        style={{
                          borderColor: 'var(--border)',
                          color: 'var(--text)',
                          background: 'var(--accent-bg)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.links.github}
                    className="inline-flex items-center gap-1.5 text-xs transition-colors"
                    style={{ color: 'var(--text)' }}
                  >
                    查看详情
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
