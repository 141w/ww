import { Mail } from 'lucide-react'
import GithubIcon from '../components/GithubIcon'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 text-xs text-dark-400 hover:text-white transition-colors"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 text-xs text-dark-400 hover:text-white transition-colors"
            >
              <Mail size={14} />
              Email
            </a>
          </div>

          <p className="text-xs text-dark-500 font-mono">
            Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
