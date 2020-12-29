import React, { HTMLAttributes } from 'react'

import styled from 'styled-components'
import { useMotionValue } from 'framer-motion'

import { MotionContextProvider } from './MotionSliderContext'

import SliderTrack from './SliderTrack/SliderTrack'
import SliderItem from './SliderItem/SliderItem'

import { WithChildren } from '@utils/customTypes'

interface MotionSliderWrapperProps
  extends React.DetailsHTMLAttributes<HTMLAttributes<HTMLDivElement>> {
  overflow?: string
}

const Wrapper = styled.div<MotionSliderWrapperProps>`
  overflow: ${props => props.overflow};
`

interface MotionSliderProps {
  children: Array<WithChildren>
  padding?: number
  gap?: number
  velocity?: number
  transition?: { stiffness: number; damping: number; mass: number }
  allowSlideToLast?: boolean
  overflow?: string
}

const MotionSlider: React.FC<MotionSliderProps> = ({
  children,
  padding = 40,
  gap = 40,
  velocity = 0.3,
  transition = { stiffness: 300, damping: 600, mass: 3 },
  allowSlideToLast = false,
  overflow = 'visible'
}: MotionSliderProps) => {
  const x = useMotionValue(0)

  return (
    <MotionContextProvider>
      <Wrapper overflow={overflow}>
        <SliderTrack
          padding={padding}
          velocity={velocity}
          transition={transition}
          allowSlideToLast={allowSlideToLast}
          style={{ x }}
        >
          {children.map((child, i) => (
            <SliderItem
              key={i}
              gap={gap}
              padding={padding}
              index={i}
              offset={x}
            >
              {child}
            </SliderItem>
          ))}
        </SliderTrack>
      </Wrapper>
    </MotionContextProvider>
  )
}

export default MotionSlider
