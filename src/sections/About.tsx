import { motion } from 'motion/react'

const domains = [
  { label: 'AI Agents', desc: '自主推理、工具使用与多 Agent 编排系统' },
  { label: 'AI 基础设施', desc: 'RAG 管道、向量数据库、Embedding 服务与 LLM 部署' },
  { label: '浏览器运行时', desc: '无头浏览器、Web 自动化、DOM 智能与 Agent 浏览' },
  { label: '安全 AI', desc: '基于机器学习的威胁检测、异常评分与入侵防御' },
  { label: '全栈工程', desc: '从 GPU kernel 到 React 组件的系统设计' },
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
              我构建 AI 原生系统——从赋予 Agent 视觉和操作能力的浏览器运行时，到狩猎零日漏洞的入侵检测引擎，再到让 LLM 真正有用的 RAG 基础设施。
            </p>
            <p className="text-base leading-relaxed mt-4" style={{ color: 'var(--text)' }}>
              我的工作位于系统工程与 AI 应用的交叉点。我在乎延迟、可靠性，以及交付有思考能力的产品。
            </p>
          </motion.div>

          <div className="space-y-5">
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
      </div>
    </section>
  )
}
