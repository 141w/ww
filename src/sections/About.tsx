import { motion } from 'motion/react'

const domains = [
  { label: 'AI Agents', desc: '自主推理、工具使用与多 Agent 编排' },
  { label: 'AI 基础设施', desc: 'RAG 管道、pgvector 检索与 LLM 部署' },
  { label: '浏览器运行时', desc: 'Electron 桌面应用、Web 自动化与 Agent 浏览' },
  { label: '安全 AI', desc: '威胁检测、异常评分与入侵防御' },
  { label: '全栈工程', desc: '从 Electron 主进程到 React 组件' },
  { label: '知识管理', desc: 'LLM 持续维护的个人知识操作系统' },
]

export default function About() {
  return (
    <section id="about" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '32px' }}
      >
        <div className="terminal-output" style={{ marginBottom: '4px' }}>
          <span className="terminal-prompt">$</span>{' '}
          <span className="terminal-cmd">cat ~/about.md</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="terminal-window">
            <div className="terminal-bar">
              <div className="terminal-dot" style={{ background: '#ff5f57' }} />
              <div className="terminal-dot" style={{ background: '#febc2e' }} />
              <div className="terminal-dot" style={{ background: '#28c840' }} />
              <span className="terminal-comment" style={{ marginLeft: '8px', fontSize: '0.75rem' }}>
                about.md
              </span>
            </div>

            <div className="terminal-body">
              <div className="terminal-output" style={{ lineHeight: 1.8 }}>
                <p>
                  我做一件事：让 AI 不只是聊天框里的玩具，
                  <br />
                  而是能在真实系统里跑起来的工具。
                </p>

                <p style={{ marginTop: '16px' }}>
                  从让浏览器拥有 Agent 视觉的 Dawn，
                  到 6 个专业 Agent 辩论决策的 Quorum，
                  再到 69 万条流量上训练 LightGBM 的 Phoenix IDS——
                  我的工作始终在同一个交叉点上：
                  系统工程的严谨性和 AI 的可能性。
                </p>

                <p className="terminal-comment" style={{ marginTop: '16px', fontSize: '0.75rem' }}>
                  {'//'} 重庆三峡科技大学 · 计算机科学与技术 2023 级 · 阿克索软件实施实习（2026-08 起）
                </p>

                <p style={{ marginTop: '16px' }}>
                  我相信好的 AI 产品应该像好的基础设施一样——
                  你注意不到它，因为它一直在工作。
                  <br />
                  延迟要低，输出要可靠，出了问题要知道去哪找原因。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="terminal-window" style={{ height: '100%' }}>
            <div className="terminal-bar">
              <div className="terminal-dot" style={{ background: '#ff5f57' }} />
              <div className="terminal-dot" style={{ background: '#febc2e' }} />
              <div className="terminal-dot" style={{ background: '#28c840' }} />
              <span className="terminal-comment" style={{ marginLeft: '8px', fontSize: '0.75rem' }}>
                domains/
              </span>
            </div>

            <div className="terminal-body">
              {domains.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="terminal-output"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: i < domains.length - 1 ? '12px' : 0,
                  }}
                >
                  <span style={{ color: '#6b7280', fontSize: '0.6875rem', paddingTop: '2px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <span className="terminal-cmd" style={{ fontSize: '0.8125rem' }}>
                      {d.label}
                    </span>
                    <p style={{ fontSize: '0.6875rem', color: 'var(--text)', marginTop: '2px' }}>
                      {d.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
