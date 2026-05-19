import { Mail, ArrowUpRight } from 'lucide-react'
import { VscGithubInverted } from 'react-icons/vsc'

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="glass-card rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-h)' }}>
              有想法？一起聊聊。
            </h3>
            <p className="text-sm" style={{ color: 'var(--text)' }}>
              无论是项目合作、技术咨询还是开源贡献，欢迎联系。
            </p>
          </div>
          <a
            href="mailto:wweiqi77@163.com?subject=合作咨询"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 border"
            style={{
              borderColor: 'var(--accent-border)',
              color: 'var(--accent)',
              background: 'var(--accent-bg)',
            }}
          >
            <Mail size={14} />
            wweiqi77@163.com
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/141w"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs transition-colors"
            style={{ color: 'var(--text)' }}
          >
            <VscGithubInverted size={14} />
            GitHub
          </a>
          <a
            href="mailto:wweiqi77@163.com"
            className="flex items-center gap-2 text-xs transition-colors"
            style={{ color: 'var(--text)' }}
          >
            <Mail size={14} />
            邮箱
          </a>
        </div>

        <p className="text-xs font-mono" style={{ color: 'var(--text)' }}>
          Three.js GLSL Shader · Lenis · 可变字体 · Framer Motion
        </p>
      </div>
    </footer>
  )
}
