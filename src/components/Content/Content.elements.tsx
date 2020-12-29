import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: min-content min-content min-content;
  grid-row-gap: 0.2rem;
`

const DefaultTitle = styled.h3`
  font: ${props => props.theme.fonts.detail};
  color: ${props => props.theme.colors.primary};

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`

export const OpenTitle = styled(DefaultTitle)``
export const CloseTitle = styled(DefaultTitle)`
  display: flex;
  justify-content: flex-end;
`
