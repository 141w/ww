import Navigation from '../components/Navigation'
import StarField from '../components/StarField'
import AuroraGlow from '../components/AuroraGlow'
import CustomCursor from '../components/CustomCursor'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <CustomCursor />
      <StarField />
      <AuroraGlow />
      <div className="noise fixed inset-0 z-[1]" />
      <Navigation />
      <main className="relative z-10">{children}</main>
    </>
  )
}
