import SplashCursor from '../components/SplashCursor'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <SplashCursor
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </>
  )
}
