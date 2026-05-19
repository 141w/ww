import { useState, useEffect, useCallback } from 'react'
import BootSequence from '../components/BootSequence'
import InteractiveTerminal from '../components/InteractiveTerminal'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import TechStack from '../sections/TechStack'
import About from '../sections/About'
import Footer from '../sections/Footer'

const navItems = [
  { label: 'home', href: '#hero' },
  { label: 'projects', href: '#projects' },
  { label: 'stack', href: '#stack' },
  { label: 'about', href: '#about' },
]

export default function Home() {
  const [active, setActive] = useState(0)
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    const hasBooted = sessionStorage.getItem('boot-complete')
    if (hasBooted) setBooted(true)
  }, [])

  useEffect(() => {
    if (!booted) return

    const sections = navItems.map(item => document.querySelector(item.href))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [booted])

  const handleTerminalCommand = useCallback((cmd: string) => {
    if (cmd.startsWith('open ')) {
      const name = cmd.split(' ')[1]
      const el = document.querySelector(`#project-${name}`)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
      }
    }
  }, [])

  return (
    <>
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          padding: '1rem 0',
          opacity: booted ? 1 : 0,
          transition: 'opacity 0.5s',
          pointerEvents: booted ? 'auto' : 'none',
        }}
      >
        <div
          className="terminal-window"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 4px',
          }}
        >
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="terminal-prompt"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '8px 12px',
                fontSize: '0.8125rem',
                opacity: active === i ? 1 : 0.4,
                transition: 'opacity 0.2s',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              <span style={{ color: active === i ? 'var(--green)' : 'inherit' }}>
                {active === i ? '❯' : '·'}
              </span>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div
        style={{
          opacity: booted ? 1 : 0,
          transition: 'opacity 0.8s',
        }}
      >
        <div id="hero">
          <Hero />
        </div>

        <div className="section-container section-padding" id="projects">
          <Projects />
        </div>

        <div className="section-container section-padding" id="stack">
          <TechStack />
        </div>

        <div className="section-container section-padding" id="about">
          <About />
        </div>

        <div className="section-container" style={{ paddingBottom: '4rem' }}>
          <Footer />
        </div>
      </div>

      {booted && <InteractiveTerminal onCommand={handleTerminalCommand} />}
    </>
  )
}
