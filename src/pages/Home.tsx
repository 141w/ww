import { useState, useEffect } from 'react'
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

  useEffect(() => {
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
  }, [])

  return (
    <>
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
    </>
  )
}
