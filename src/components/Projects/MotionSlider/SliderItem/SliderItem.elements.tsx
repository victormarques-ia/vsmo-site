import { motion, MotionProps } from 'framer-motion'
import styled from 'styled-components'

interface SliderItemWrapperProps extends MotionProps {
  gap: number
}

export const Wrapper = styled(motion.div)<SliderItemWrapperProps>`
  flex: 0 0 auto;

  &:not(:last-child) {
    margin-right: ${props => props.gap}px;
  }
`

export const MotionContainer = styled(motion.div)``
