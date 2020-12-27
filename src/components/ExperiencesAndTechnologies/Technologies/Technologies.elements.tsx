import Content from '@components/Content/Content'
import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface TechnologieNameProps
  extends React.DetailsHTMLAttributes<HTMLAttributes<HTMLHeadingElement>> {
  size?: number
  position?: boolean // true == flex-start, false == flex-end
}

export const TechnologiesContent = styled(Content)`
  grid-area: technologiesContent;
  width: 100%;

  @media (max-width: 1023px) {
    max-width: 70%;
    margin: 0 30%;
  }
`

export const TechnologieName = styled.h2<TechnologieNameProps>`
  font: ${props => props.theme.fonts.detail};
  color: ${props => props.theme.colors.text};
  font-size: ${props => (props.size ? 2.4 * props.size : 2.4)}rem;
  padding: 0.5rem 0;

  opacity: 0.7;
  transition: 0.2s;

  align-self: ${props => (props.position ? 'flex-start' : 'flex-end')};

  margin-left: ${props => (props.position ? props.size * 2 : 0)}rem;
  margin-right: ${props => (!props.position ? props.size * 2 : 0)}rem;

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
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    margin: 0 auto;
    width: 60%;
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`
