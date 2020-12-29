import styled from 'styled-components'
import { motion, MotionProps } from 'framer-motion'
interface SliderTrackWrapperProps extends MotionProps {
  padding: number
}

export const Wrapper = styled(motion.div)<SliderTrackWrapperProps>`
  display: flex;
  flex-wrap: nowrap;
  min-width: min-content;

  padding: ${props => props.padding}px;

  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`
