import { motion } from 'framer-motion'

const domains = [
  {
    label: 'AI Agents',
    description: 'Autonomous reasoning, tool-use, and multi-agent orchestration systems.',
  },
  {
    label: 'AI Infrastructure',
    description: 'RAG pipelines, vector stores, embedding services, and LLM serving.',
  },
  {
    label: 'Browser Runtime',
    description: 'Headless browsers, web automation, DOM intelligence, and agentic browsing.',
  },
  {
    label: 'Security AI',
    description: 'ML-driven threat detection, anomaly scoring, and intrusion prevention.',
  },
  {
    label: 'Full Stack Engineering',
    description: 'Systems design from GPU kernels to React components.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-accent-blue tracking-widest uppercase">
            /about
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Systems Engineer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base text-dark-300 leading-relaxed">
              I build AI-native systems — from browser runtimes that give
              agents eyes and hands, to intrusion detection engines that hunt
              zero-days, to RAG infrastructure that makes LLMs actually useful.
            </p>
            <p className="text-base text-dark-300 leading-relaxed mt-4">
              My work lives at the intersection of systems engineering and
              applied AI. I care about latency, reliability, and shipping
              products that feel like they think.
            </p>
          </motion.div>

          <div className="space-y-5">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4 group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.06] bg-white/[0.02] shrink-0 mt-0.5 group-hover:border-accent-blue/20 group-hover:bg-accent-blue/[0.03] transition-colors duration-200">
                  <span className="text-xs font-mono text-dark-500 group-hover:text-accent-blue transition-colors duration-200">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white group-hover:text-accent-blue transition-colors duration-200">
                    {domain.label}
                  </h3>
                  <p className="text-xs text-dark-400 mt-1">{domain.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
