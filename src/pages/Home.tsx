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
          padding: '1.2rem 0',
        }}
      >
        <GooeyNav
          items={navItems}
          particleCount={12}
          particleDistances={[60, 8]}
          particleR={80}
          initialActiveIndex={0}
          animationTime={500}
          timeVariance={200}
          colors={[1, 2, 3, 4]}
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
      </ScrollStack>
      <Footer />
    </>
  )
}
