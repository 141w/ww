import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import GithubIcon from '../components/GithubIcon'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="section-container text-center z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse" />
            <span className="text-xs text-dark-300 font-mono">Building the future of intelligent systems</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-gradient">AI-Native</span>
          <br />
          <span className="text-white">Systems Builder</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-base sm:text-lg text-dark-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Building intelligent browsers, AI agents, security systems, and
          retrieval infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-dark-950 text-sm font-medium hover:bg-white/90 transition-all duration-200"
          >
            View Projects
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.12] text-sm font-medium text-dark-200 hover:text-white hover:border-white/[0.25] transition-all duration-200"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border border-white/[0.1] flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-white/30 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
