/// <reference types="vite/client" />

declare module '../components/TextPressure' {
  import { FC } from 'react'
  interface TextPressureProps {
    text?: string
    fontFamily?: string
    fontUrl?: string
    width?: boolean
    weight?: boolean
    italic?: boolean
    alpha?: boolean
    flex?: boolean
    stroke?: boolean
    scale?: boolean
    textColor?: string
    strokeColor?: string
    className?: string
    minFontSize?: number
  }
  const TextPressure: FC<TextPressureProps>
  export default TextPressure
}

declare module '../components/Dock' {
  import { FC, ReactNode } from 'react'
  interface DockItem {
    icon: ReactNode
    label: string
    onClick?: () => void
    className?: string
  }
  interface DockProps {
    items: DockItem[]
    className?: string
    spring?: { mass: number; stiffness: number; damping: number }
    magnification?: number
    distance?: number
    panelHeight?: number
    dockHeight?: number
    baseItemSize?: number
  }
  const Dock: FC<DockProps>
  export default Dock
}
