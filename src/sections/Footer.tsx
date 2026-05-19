import { Mail, ArrowUpRight } from 'lucide-react'
import { VscGithubInverted } from 'react-icons/vsc'

export default function Footer() {
  return (
    <footer>
      <div className="terminal-window" style={{ marginBottom: '24px' }}>
        <div className="terminal-bar">
          <div className="terminal-dot" style={{ background: '#ff5f57' }} />
          <div className="terminal-dot" style={{ background: '#febc2e' }} />
          <div className="terminal-dot" style={{ background: '#28c840' }} />
          <span className="terminal-comment" style={{ marginLeft: '8px', fontSize: '0.75rem' }}>
            contact
          </span>
        </div>

        <div className="terminal-body">
          <div className="terminal-output" style={{ marginBottom: '12px' }}>
            <span className="terminal-prompt">$</span>{' '}
            <span className="terminal-cmd">echo "有想法？一起聊聊。"</span>
          </div>

          <div className="terminal-comment" style={{ fontSize: '0.75rem', marginBottom: '16px' }}>
            无论是项目合作、技术咨询还是开源贡献，欢迎联系。
          </div>

          <a
            href="mailto:wweiqi77@163.com?subject=合作咨询"
            className="terminal-prompt"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '4px',
              border: '1px solid var(--accent-border)',
              background: 'var(--accent-bg)',
              fontSize: '0.8125rem',
              textDecoration: 'none',
            }}
          >
            <Mail size={12} />
            wweiqi77@163.com
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        <div className="terminal-output" style={{ display: 'flex', gap: '16px', fontSize: '0.75rem' }}>
          <a
            href="https://github.com/141w"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}
          >
            <VscGithubInverted size={12} />
            GitHub
          </a>
          <a
            href="mailto:wweiqi77@163.com"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}
          >
            <Mail size={12} />
            邮箱
          </a>
        </div>

        <div className="terminal-comment" style={{ fontSize: '0.6875rem' }}>
          Three.js GLSL Shader · Lenis · 可变字体 · Framer Motion
        </div>
      </div>
    </footer>
  )
}
