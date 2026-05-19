import { motion } from 'motion/react'
import { ArrowDown, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="section-container w-full pt-24 pb-16">
        <div className="terminal-window max-w-3xl mx-auto">
          <div className="terminal-bar">
            <div className="terminal-dot" style={{ background: '#ff5f57' }} />
            <div className="terminal-dot" style={{ background: '#febc2e' }} />
            <div className="terminal-dot" style={{ background: '#28c840' }} />
            <span className="terminal-comment" style={{ marginLeft: '8px', fontSize: '0.75rem' }}>
              ~/portfolio
            </span>
          </div>

          <div className="terminal-body" style={{ padding: '24px 20px' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="terminal-output" style={{ marginBottom: '8px' }}>
                <span className="terminal-prompt">$</span>{' '}
                <span className="terminal-cmd">whoami</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ marginBottom: '24px' }}
            >
              <h1
                className="terminal-cmd"
                style={{
                  fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  color: 'var(--text-h)',
                }}
              >
                AI 系统构建者 — 让 AI Agent 在浏览器里自主运行
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ marginBottom: '8px' }}
            >
              <div className="terminal-output">
                <span className="terminal-prompt">$</span>{' '}
                <span className="terminal-cmd">cat mission.txt</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="terminal-output"
              style={{
                marginBottom: '32px',
                paddingLeft: '16px',
                borderLeft: '2px solid var(--border)',
              }}
            >
              <p>
                我构建在浏览器里运行的 AI Agent——
                <br />
                让安全分析、自动化和学习工具真正可用。
              </p>
              <p style={{ marginTop: '8px' }}>
                从赋予 Agent 视觉能力的浏览器运行时，到狩猎零日漏洞的入侵检测引擎，
                我关注延迟、可靠性，以及交付有思考能力的产品。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="terminal-output"
              style={{ marginBottom: '8px' }}
            >
              <span className="terminal-prompt">$</span>{' '}
              <span className="terminal-cmd">ls domains/</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="terminal-output"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '32px',
              }}
            >
              {['AI Agents', '安全 AI', '浏览器运行时', 'RAG 基础设施', '全栈工程'].map((d) => (
                <span
                  key={d}
                  style={{
                    padding: '4px 12px',
                    borderRadius: '4px',
                    border: '1px solid var(--border)',
                    background: 'rgba(255,255,255,0.02)',
                    fontSize: '0.75rem',
                    color: 'var(--text)',
                  }}
                >
                  {d}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
            >
              <a
                href="#projects"
                className="terminal-prompt"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: '1px solid var(--green-dim)',
                  background: 'rgba(74, 222, 128, 0.08)',
                  fontSize: '0.8125rem',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                查看项目 <ArrowDown size={12} />
              </a>
              <a
                href="mailto:wweiqi77@163.com?subject=合作咨询"
                className="terminal-prompt"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: '1px solid var(--border)',
                  background: 'rgba(255,255,255,0.02)',
                  fontSize: '0.8125rem',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                聊聊合作 <Mail size={12} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="terminal-output"
              style={{ marginTop: '24px' }}
            >
              <span className="terminal-prompt">$</span>{' '}
              <span className="cursor-blink" />
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="flex justify-center mt-12"
        >
          <div
            className="terminal-output"
            style={{ fontSize: '0.6875rem', opacity: 0.4 }}
          >
            ↓ scroll
          </div>
        </motion.div>
      </div>
    </section>
  )
}
