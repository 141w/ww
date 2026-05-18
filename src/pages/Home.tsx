import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import TechStack from '../sections/TechStack'
import About from '../sections/About'
import Footer from '../sections/Footer'
import Dock from '../components/Dock'
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from 'react-icons/vsc'

export default function Home() {
  const dockItems = [
    {
      icon: <VscHome size={18} />,
      label: '首页',
      onClick: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      icon: <VscArchive size={18} />,
      label: '项目',
      onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      icon: <VscSettingsGear size={18} />,
      label: '技术栈',
      onClick: () => document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      icon: <VscAccount size={18} />,
      label: '关于',
      onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
    },
  ]

  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <Projects />
      <TechStack />
      <About />
      <Footer />
      <div
        style={{
          position: 'fixed',
          bottom: '0.5rem',
          left: 0,
          right: 0,
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <div style={{ pointerEvents: 'auto' }}>
          <Dock items={dockItems} panelHeight={68} baseItemSize={50} magnification={70} />
        </div>
      </div>
    </>
  )
}
