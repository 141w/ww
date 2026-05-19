import { FC, MouseEvent, ReactNode } from 'react'

interface GooeyButtonProps {
  children?: ReactNode
  onClick?: (e: MouseEvent) => void
  href?: string
  animationTime?: number
  particleCount?: number
  particleDistances?: number[]
  particleR?: number
  timeVariance?: number
  colors?: number[]
  className?: string
}

declare const GooeyButton: FC<GooeyButtonProps>

export default GooeyButton
