import { motion } from 'motion/react'
import TextPressure from '../components/TextPressure'
import GooeyButton from '../components/GooeyButton'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="section-container text-center z-10 pt-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse" />
            <span className="text-xs font-mono" style={{ color: 'var(--text)' }}>全栈 · AI 系统构建者</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          style={{ width: '100%', height: '25vh', margin: '0 auto', maxWidth: 900 }}
        >
          <TextPressure
            text="HELLO"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={48}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ color: 'var(--text)' }}
        >
          构建 AI 浏览器、智能代理、安全检测与检索基础设施。
          <br />
          关注延迟、可靠性与交付有思考能力的产品。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GooeyButton
            href="#projects"
            particleCount={8}
            particleDistances={[50, 6]}
            particleR={60}
            animationTime={400}
            timeVariance={150}
          >
            查看项目
            <ArrowDown size={14} />
          </GooeyButton>
          <GooeyButton
            href="#about"
            particleCount={8}
            particleDistances={[50, 6]}
            particleR={60}
            animationTime={400}
            timeVariance={150}
          >
            关于我
          </GooeyButton>
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
