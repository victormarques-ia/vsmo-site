import { Container } from 'src/styles/global'
import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 20rem;
`

export const Body = styled(Container)`
  display: grid;
  justify-content: center;
  grid-column-gap: 12rem;
  grid-template-rows: min-content min-content;
  grid-template-columns: 1fr 1fr;

  grid-template-areas:
    'experiencesContent technologiesContent'
    'indicatorContainer indicatorContainer';

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto min-content;
    grid-column-gap: 0;
    grid-row-gap: 8rem;
    grid-template-areas:
      'experiencesContent experiencesContent'
      'technologiesContent technologiesContent'
      'indicatorContainer indicatorContainer';
  }
`

export const LinkToSection = styled.a`
  text-decoration: none;
`

export const ArrowDown = styled.img`
  display: none;
`
export const ScrollDown = styled.img``

export const IndicatorContainer = styled.div`
  grid-area: indicatorContainer;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20rem;

  @media (max-width: 1023px) {
    justify-content: center;

    margin-top: 10rem;

    ${ArrowDown} {
      display: initial !important;
    }

    ${ScrollDown} {
      display: none !important;
    }
  }
`
