import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Tag from './Tag'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--mouse-x', `${x}%`)
    card.style.setProperty('--mouse-y', `${y}%`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="glow-card group relative glass glass-hover rounded-2xl p-6 sm:p-8 h-full flex flex-col"
      >
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-accent-blue transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-accent-blue/80 font-mono mt-0.5">
                {project.tagline}
              </p>
            </div>
            <ArrowUpRight
              size={18}
              className="text-dark-500 group-hover:text-white transition-colors duration-300 mt-1 shrink-0"
            />
          </div>

          <p className="text-sm text-dark-300 leading-relaxed mb-5">
            {project.description}
          </p>

          <ul className="space-y-1.5 mb-6">
            {project.highlights.slice(0, 3).map((h) => (
              <li
                key={h}
                className="text-xs text-dark-400 flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-dark-600 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <a
          href={project.links.github}
          className="inline-flex items-center gap-1.5 text-xs text-dark-400 hover:text-white transition-colors group/link"
        >
          View Details
          <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}
