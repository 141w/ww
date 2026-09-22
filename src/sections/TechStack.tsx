import { motion } from 'motion/react'

const categories = [
  {
    label: 'languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'GLSL'],
  },
  {
    label: 'ai_ml',
    items: ['RAG', 'pgvector', 'FAISS', 'LightGBM', 'SHAP', 'LangGraph'],
  },
  {
    label: 'infra',
    items: ['Three.js', 'Docker', 'PostgreSQL', 'SQLite', 'WebSocket'],
  },
  {
    label: 'frontend',
    items: ['Electron', 'React 19', 'Vue 3', 'TailwindCSS', '微信小程序'],
  },
]

const tools = [
  {
    name: 'Hermes Agent',
    desc: '开源 AI Agent 框架：技能系统 · 持久记忆 · 多平台网关（WeChat / Telegram）· Provider 无关',
  },
  {
    name: 'Ollama',
    desc: '本地 LLM 推理框架，OpenAI 兼容 API，Modelfile 自定义模型',
  },
  {
    name: 'llmfit',
    desc: '硬件适配终端工具：检测 M4 16GB 统一内存，估算 tok/s 并推荐量化格式',
  },
  {
    name: 'conda / Docker / Homebrew',
    desc: '项目级虚拟环境与容器化交付 · ripgrep 全库检索',
  },
]

export default function TechStack() {
  return (
    <section id="stack" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '32px' }}
      >
        <div className="terminal-output" style={{ marginBottom: '4px' }}>
          <span className="terminal-prompt">$</span>{' '}
          <span className="terminal-cmd">cat ~/stack.json</span>
        </div>
        <div className="terminal-output">
          <span className="terminal-prompt">$</span>{' '}
          <span className="terminal-cmd">cat ~/tools.md</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="terminal-window">
          <div className="terminal-bar">
            <div className="terminal-dot" style={{ background: '#ff5f57' }} />
            <div className="terminal-dot" style={{ background: '#febc2e' }} />
            <div className="terminal-dot" style={{ background: '#28c840' }} />
            <span className="terminal-comment" style={{ marginLeft: '8px', fontSize: '0.75rem' }}>
              stack.json
            </span>
          </div>

          <div className="terminal-body" style={{ fontFamily: 'var(--mono)', fontSize: '0.8125rem' }}>
            <div className="terminal-output">
              <span style={{ color: '#6b7280' }}>{'{'}</span>
            </div>

            {categories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.1 }}
                style={{ paddingLeft: '24px', marginBottom: ci < categories.length - 1 ? '16px' : 0 }}
              >
                <div className="terminal-output">
                  <span className="terminal-key">"{cat.label}"</span>
                  <span style={{ color: '#6b7280' }}>: [</span>
                </div>

                <div style={{ paddingLeft: '24px' }}>
                  {cat.items.map((item, ii) => (
                    <div key={item} className="terminal-output">
                      <span style={{ color: '#6b7280' }}>{ii < cat.items.length - 1 ? '├─' : '└─'}</span>{' '}
                      <span className="terminal-string">"{item}"</span>
                      {ii < cat.items.length - 1 && <span style={{ color: '#6b7280' }}>,</span>}
                    </div>
                  ))}
                </div>

                <div className="terminal-output">
                  <span style={{ color: '#6b7280' }}>]</span>
                  {ci < categories.length - 1 && <span style={{ color: '#6b7280' }}>,</span>}
                </div>
              </motion.div>
            ))}

            <div className="terminal-output">
              <span style={{ color: '#6b7280' }}>{'}'}</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="terminal-window">
          <div className="terminal-bar">
            <div className="terminal-dot" style={{ background: '#ff5f57' }} />
            <div className="terminal-dot" style={{ background: '#febc2e' }} />
            <div className="terminal-dot" style={{ background: '#28c840' }} />
            <span className="terminal-comment" style={{ marginLeft: '8px', fontSize: '0.75rem' }}>
              tools.md — local AI toolchain
            </span>
          </div>

          <div className="terminal-body">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="terminal-output"
                style={{
                  marginBottom: i < tools.length - 1 ? '16px' : 0,
                }}
              >
                <div className="terminal-cmd" style={{ fontSize: '0.8125rem', marginBottom: '2px' }}>
                  <span style={{ color: '#6b7280' }}>## </span>
                  {t.name}
                </div>
                <p style={{ fontSize: '0.75rem', lineHeight: 1.7, paddingLeft: '28px' }}>{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
