import Dither from '../components/Dither'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
