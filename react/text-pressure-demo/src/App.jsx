import './App.css'
import TextPressure from './TextPressure'
import Dock from './Dock'
import SplashCursor from './SplashCursor'

import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
  VscBell,
  VscSearch
} from 'react-icons/vsc'

function App() {
  const dockItems = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscSearch size={18} />, label: 'Search', onClick: () => alert('Search!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscBell size={18} />, label: 'Notifications', onClick: () => alert('Notifications!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ]

  return (
    <div style={{position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden', background: '#000'}}>
      <SplashCursor
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />
      <div style={{position: 'absolute', inset: 0, zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{position: 'relative', width: '90%', height: '60vh'}}>
          <TextPressure
            text="Hello!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={48}
          />
        </div>
      </div>
      <div style={{position: 'fixed', bottom: '0.5rem', left: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'center', pointerEvents: 'none'}}>
        <div style={{pointerEvents: 'auto'}}>
          <Dock items={dockItems} panelHeight={68} baseItemSize={50} magnification={70} />
        </div>
      </div>
    </div>
  )
}

export default App
