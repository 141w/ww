import { motion } from 'motion/react'

interface TimelineEntry {
  period: string
  title: string
  org: string
  points: string[]
}

const timeline: TimelineEntry[] = [
  {
    period: '2026.08 — 至今',
    title: '软件实施实习生',
    org: '重庆阿克索信息科技 · Akso eGMP · 雏鹰计划',
    points: [
      '四阶段培养体系：配置学习 → 导师带教 → 在岗实践 → 骨干成长',
      'Gaia 平台配置与实施：工作流、权限、报表、生命周期管理',
      '沉淀 11 类客户高频问题排查清单：变更控制编号 / 签批去重 / 批记录打印等',
    ],
  },
  {
    period: '2023.09 — 至今',
    title: '计算机科学与技术 · 本科',
    org: '重庆三峡科技大学 · 2023 级',
    points: [
      '专业排名前 10%，多次获校级特等 / 一等 / 二等奖学金',
      '大学生数学竞赛三等奖 · 担任学习委员',
      '主修：数据结构、操作系统、计算机网络、计算机信息安全技术',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '32px' }}
      >
        <div className="terminal-output" style={{ marginBottom: '4px' }}>
          <span className="terminal-prompt">$</span>{' '}
          <span className="terminal-cmd">tail -n 2 ~/experience.log
          </span>
        </div>
        <div className="terminal-comment" style={{ fontSize: '0.75rem' }}>
          实习与教育经历
        </div>
      </motion.div>

      <div className="terminal-window">
        <div className="terminal-bar">
          <div className="terminal-dot" style={{ background: '#ff5f57' }} />
          <div className="terminal-dot" style={{ background: '#febc2e' }} />
          <div className="terminal-dot" style={{ background: '#28c840' }} />
          <span className="terminal-comment" style={{ marginLeft: '8px', fontSize: '0.75rem' }}>
            experience.log
          </span>
        </div>

        <div className="terminal-body">
          {timeline.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                paddingLeft: '20px',
                borderLeft: '2px solid var(--border)',
                marginBottom: i < timeline.length - 1 ? '28px' : 0,
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: '-5px',
                  top: '6px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--green)',
                }}
              />

              <div className="terminal-comment" style={{ fontSize: '0.6875rem', marginBottom: '4px' }}>
                # {entry.period}
              </div>

              <div className="terminal-cmd" style={{ fontSize: '0.875rem', marginBottom: '2px' }}>
                {entry.title}
              </div>

              <div className="terminal-output" style={{ fontSize: '0.75rem', marginBottom: '12px' }}>
                <span className="terminal-key">{entry.org}</span>
              </div>

              {entry.points.map((p) => (
                <div
                  key={p}
                  className="terminal-output"
                  style={{ fontSize: '0.75rem', lineHeight: 1.8, display: 'flex', gap: '8px' }}
                >
                  <span style={{ color: '#6b7280' }}>├─</span>
                  <span>{p}</span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
