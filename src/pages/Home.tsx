import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import TechStack from '../sections/TechStack'
import About from '../sections/About'
import Footer from '../sections/Footer'
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'
import GooeyNav from '../components/GooeyNav'

export default function Home() {
  const navItems = [
    { label: '首页', href: '#hero' },
    { label: '项目', href: '#projects' },
    { label: '技术栈', href: '#stack' },
    { label: '关于', href: '#about' },
  ]

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          padding: '1rem 0',
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <GooeyNav
          items={navItems}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </header>

      <div id="hero">
        <Hero />
      </div>
      <ScrollStack
        useWindowScroll={true}
        itemDistance={60}
        itemScale={0.02}
        itemStackDistance={20}
        stackPosition="15%"
        scaleEndPosition="5%"
        baseScale={0.9}
        blurAmount={2}
      >
        <ScrollStackItem>
          <div id="projects">
            <Projects />
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div id="stack">
            <TechStack />
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <div id="about">
            <About />
          </div>
        </ScrollStackItem>
        <ScrollStackItem>
          <Footer />
        </ScrollStackItem>
      </ScrollStack>
    </>
  )
}
