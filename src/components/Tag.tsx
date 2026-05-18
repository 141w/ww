import { motion } from 'framer-motion'

interface TagProps {
  label: string
  variant?: 'default' | 'accent'
}

export default function Tag({ label, variant = 'default' }: TagProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`inline-block px-3 py-1.5 text-xs font-medium rounded-full border transition-colors duration-200 ${
        variant === 'accent'
          ? 'border-accent-blue/20 text-accent-blue bg-accent-blue/5 hover:bg-accent-blue/10 hover:border-accent-blue/30'
          : 'border-white/[0.08] text-dark-300 bg-white/[0.03] hover:bg-white/[0.06] hover:text-white hover:border-white/[0.15]'
      }`}
    >
      {label}
    </motion.span>
  )
}
