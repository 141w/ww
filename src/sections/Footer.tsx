import { Mail } from 'lucide-react'
import { VscGithubInverted } from 'react-icons/vsc'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)' }} className="py-12">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 text-xs transition-colors"
              style={{ color: 'var(--text)' }}
            >
              <VscGithubInverted size={14} />
              GitHub
            </a>
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 text-xs transition-colors"
              style={{ color: 'var(--text)' }}
            >
              <Mail size={14} />
              邮箱
            </a>
          </div>

          <p className="text-xs font-mono" style={{ color: 'var(--text)' }}>
            Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
