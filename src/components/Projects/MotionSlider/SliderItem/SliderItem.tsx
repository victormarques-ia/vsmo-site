import React, { useEffect } from 'react'

import { MotionValue, useTransform } from 'framer-motion'
import useDimensions from 'react-use-dimensions'

import { useMotionSlider } from '../MotionSliderContext'

import * as S from './SliderItem.elements'

import { WithChildren } from '@utils/customTypes'

interface SliderItemProps {
  children: WithChildren
  padding: number
  gap: number
  index: number
  offset: MotionValue<number>
}

const SliderItem: React.FC<SliderItemProps> = ({
  children,
  gap,
  padding,
  index,
  offset
}: SliderItemProps) => {
  const { addItem } = useMotionSlider()
  const [itemRef, { x }] = useDimensions({ liveMeasure: false })

  const opacity = useTransform(
    offset,
    [(index - 1) * -300, index * -300, (index + 1) * -300],
    [0.2, 1, 0.2]
  )

  const scale = useTransform(
    offset,
    [(index - 1) * -300, index * -300, (index + 1) * -300],
    [0.8, 1, 0.8]
  )

  useEffect(() => {
    if (x !== undefined) {
      addItem(x - padding)
    }
  }, [x, padding])

  return (
    <S.Wrapper ref={itemRef} gap={gap} style={{ opacity, scale }}>
      <S.MotionContainer>{children}</S.MotionContainer>
    </S.Wrapper>
  )
}

export default SliderItem
