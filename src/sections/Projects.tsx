import { motion } from 'motion/react'
import { projects } from '../data/projects'
import { ArrowUpRight } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold" style={{ color: 'var(--text-h)' }}>
                        {project.title}
                      </h3>
                      <p className="text-sm mt-0.5 font-mono" style={{ color: 'var(--accent)' }}>
                        {project.tagline}
                      </p>
                    </div>
                    <ArrowUpRight size={18} className="mt-1 shrink-0 opacity-40" style={{ color: 'var(--text)' }} />
                  </div>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text)' }}>
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 mb-6">
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
      </div>
    </section>
  )
}
