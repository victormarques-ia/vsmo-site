import Content from '@components/Content/Content'
import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface TechnologieNameProps
  extends React.DetailsHTMLAttributes<HTMLAttributes<HTMLHeadingElement>> {
  size?: number
}

export const TechnologiesContent = styled(Content)`
  width: 100%;
  grid-area: technologiesContent;
`

export const TechnologieName = styled.h2<TechnologieNameProps>`
  font: ${props => props.theme.fonts.detail};
  color: ${props => props.theme.colors.text};
  font-size: ${props => (props.size ? 2.4 * props.size : 2.4)}rem;

  opacity: 0.7;
  transition: 0.2s;

  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 1023px) {
    font-size: ${props => (props.size ? 1.8 * props.size : 1.8)}rem;
  }

  @media (max-width: 400px) {
    font-size: ${props => (props.size ? 1.4 * props.size : 1.4)}rem;
  }
`

export const TechnologiesContainer = styled.div`
  column-count: 2;
  column-fill: auto;
`
