/* eslint-disable indent */
import React from 'react'

import { useAnimation } from 'framer-motion'
import useDimensions from 'react-use-dimensions'
import useWindowSize from '@utils/useWindowSize'

import { useMotionSlider } from '../MotionSliderContext'

import * as S from './SliderTrack.elements'

import { WithChildren } from '@utils/customTypes'
interface SliderTrackProps {
  children: WithChildren
  padding: number
  gap?: number
  velocity: number
  transition: { stiffness: number; damping: number; mass: number }
  allowSlideToLast: boolean
  style: unknown
}

const SliderTrack: React.FC<SliderTrackProps> = ({
  children,
  padding,
  gap,
  velocity,
  transition,
  allowSlideToLast,
  style
}: SliderTrackProps) => {
  const [trackRef, trackDimensions] = useDimensions({ liveMeasure: false })

  const windowDimensions = useWindowSize()
  const controls = useAnimation()

  const { setActiveItem, state } = useMotionSlider()
  const negativeItems = state.items.map(
    item => item * -1 + trackDimensions.x || 0
  )

  const lastTwo = state.items.slice(-2)
  const lastItem = lastTwo[1] - lastTwo[0]

  const onDragEnd = (event, info) => {
    if (negativeItems.length > 0) {
      const offset = info.offset.x
      const correctedVelocity = info.velocity.x * velocity

      const direction = correctedVelocity < 0 || offset < 0 ? 1 : -1
      const startPosition = info.point.x - offset

      const endOffset =
        direction === 1
          ? Math.min(correctedVelocity, offset)
          : Math.max(correctedVelocity, offset)
      const endPosition = startPosition + endOffset

      const closestPosition = negativeItems.reduce((prev, curr) =>
        Math.abs(curr - endPosition) < Math.abs(prev - endPosition)
          ? curr
          : prev
      )

      const activeSlide = negativeItems.indexOf(closestPosition)
      setActiveItem(activeSlide)

      controls.start({
        x: allowSlideToLast
          ? closestPosition
          : Math.max(
              closestPosition,
              windowDimensions.innerWidth -
                trackDimensions.width -
                (trackDimensions.x + trackDimensions.x)
            ),
        transition: {
          type: 'spring',
          velocity: info.velocity.x,
          stiffness: transition.stiffness,
          damping: transition.damping,
          mass: transition.mass
        }
      })
    }
  }

  return (
    <S.Wrapper
      ref={trackRef}
      style={style}
      padding={padding}
      animate={controls}
      drag="x"
      dragConstraints={{
        left: allowSlideToLast
          ? lastItem + gap - trackDimensions.width
          : windowDimensions.innerWidth -
            trackDimensions.width -
            (trackDimensions.x + trackDimensions.x),
        right: 0
      }}
      onDragEnd={onDragEnd}
    >
      {children}
    </S.Wrapper>
  )
}

export default SliderTrack
