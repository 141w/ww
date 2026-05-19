import { motion } from 'motion/react'

const domains = [
  { label: 'AI Agents', desc: '自主推理、工具使用与多 Agent 编排' },
  { label: 'AI 基础设施', desc: 'RAG 管道、向量数据库与 LLM 部署' },
  { label: '浏览器运行时', desc: '无头浏览器、Web 自动化与 Agent 浏览' },
  { label: '安全 AI', desc: '威胁检测、异常评分与入侵防御' },
  { label: '全栈工程', desc: '从 GPU kernel 到 React 组件' },
]

export default function About() {
  return (
    <section id="about" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
          /about
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-3" style={{ color: 'var(--text-h)' }}>
          系统工程师
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base leading-relaxed" style={{ color: 'var(--text)' }}>
            我做一件事：让 AI 不只是聊天框里的玩具，而是能在真实系统里跑起来的工具。
          </p>
          <p className="text-base leading-relaxed mt-4" style={{ color: 'var(--text)' }}>
            从写 Rust 静态分析工具扫描 crates.io 的 unsafe 代码，到用 XGBoost 做入侵检测把误报率压下来，再到给浏览器赋予 Agent 视觉——我的工作始终在同一个交叉点上：系统工程的严谨性和 AI 的可能性。
          </p>
          <p className="text-base leading-relaxed mt-4" style={{ color: 'var(--text)' }}>
            我相信好的 AI 产品应该像好的基础设施一样——你注意不到它，因为它一直在工作。延迟要低，输出要可靠，出了问题要知道去哪找原因。
          </p>
        </motion.div>

        <div className="space-y-4">
          {domains.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg border shrink-0 mt-0.5"
                style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.02)' }}
              >
                <span className="text-xs font-mono" style={{ color: 'var(--text)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-medium" style={{ color: 'var(--text-h)' }}>{d.label}</h3>
                <p className="text-xs mt-1" style={{ color: 'var(--text)' }}>{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
