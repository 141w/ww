import { motion } from 'framer-motion'
import { tagCategories } from '../data/tags'

export default function TechStack() {
  return (
    <section id="stack" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-accent-blue tracking-widest uppercase">
            /stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Toolchain
          </h2>
          <p className="text-dark-300 mt-2 max-w-lg">
            Technologies I work with across the full stack.
          </p>
        </motion.div>

        <div className="space-y-10">
          {tagCategories.map((category, catIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-mono text-dark-500 uppercase tracking-widest shrink-0">
                  {category.label}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/[0.06] to-transparent" />
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: itemIndex * 0.03 }}
                    className="group relative px-4 py-2 text-sm rounded-xl border border-white/[0.06] bg-white/[0.02] text-dark-300 hover:text-white hover:border-accent-blue/20 hover:bg-accent-blue/[0.03] transition-all duration-200 cursor-default"
                  >
                    {item}
                    <span className="absolute inset-0 rounded-xl bg-accent-blue/0 group-hover:bg-accent-blue/[0.02] transition-colors duration-200" />
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
