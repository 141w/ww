import { FC, ReactNode } from 'react'

interface ScrollStackItemProps {
  children?: ReactNode
  itemClassName?: string
}

declare const ScrollStackItem: FC<ScrollStackItemProps>

interface ScrollStackProps {
  children?: ReactNode
  className?: string
  itemDistance?: number
  itemScale?: number
  itemStackDistance?: number
  stackPosition?: string
  scaleEndPosition?: string
  baseScale?: number
  scaleDuration?: number
  rotationAmount?: number
  blurAmount?: number
  useWindowScroll?: boolean
  onStackComplete?: () => void
}

declare const ScrollStack: FC<ScrollStackProps>

export { ScrollStackItem }
export default ScrollStack
