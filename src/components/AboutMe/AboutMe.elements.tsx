import styled from 'styled-components'
import Content from '@components/Content/Content'
import { Container } from '../../styles/global'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.section)`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15rem;
`

export const Body = styled(Container)`
  display: grid;

  grid-template-columns: min-content auto 37rem;
  grid-template-rows: minmax(auto, 67rem) min-content;

  grid-template-areas:
    'aboutMeTitleContent aboutMePhotoContainer aboutMeDescriptionContent'
    'indicatorContainer indicatorContainer indicatorContainer';

  @media (max-width: 1023px) {
    align-items: center;
    grid-template-columns: min-content auto;
    grid-template-rows: auto auto auto min-content;
    grid-row-gap: 2rem;
    grid-template-areas:
      'aboutMeTitleContent aboutMePhotoContainer'
      'aboutMeTitleContent aboutMePhotoContainer'
      'aboutMeDescriptionContent aboutMeDescriptionContent'
      'indicatorContainer indicatorContainer';
  }
`

export const TitleContent = styled(Content)`
  grid-area: aboutMeTitleContent;
  z-index: 2;
  align-self: center;
`
export const TitleContainer = styled.div``

export const Title = styled.h1`
  font: ${props => props.theme.fonts.detail};
  font-size: 10.4rem;
  line-height: 96.9%;
  max-width: 70%;
  @media (max-width: 500px) {
    font-size: 6.4rem;
  }
`

export const PhotoContainer = styled(motion.div)`
  grid-area: aboutMePhotoContainer;
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1023px) {
    justify-content: flex-end;
    align-items: center;
  }
`
export const Photo = styled.div`
  position: absolute;

  svg {
    width: 100%;
    min-width: 45rem;
    filter: grayscale(100%);
  }

  @media (max-width: 1023px) {
    svg {
      max-width: 40rem;
    }
  }

  @media (max-width: 500px) {
    svg {
      min-width: 25rem;
    }
  }
`

export const DescriptionContent = styled(Content)`
  grid-area: aboutMeDescriptionContent;
  z-index: 2;
  align-self: center;
`

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: pre-wrap;

  @media (max-width: 1023px) {
    justify-content: flex-end;
    align-items: flex-end;
  }
`

export const Description = styled.p`
  font: ${props => props.theme.fonts.default};
  @media (max-width: 1023px) {
    max-width: 85%;
  }
`

export const LinkToSection = styled.a`
  text-decoration: none;
`

export const ArrowDown = styled.img`
  display: none;
`
export const ScrollDown = styled.img``

export const IndicatorContainer = styled(motion.div)`
  grid-area: indicatorContainer;

  display: flex;
  align-items: center;
  justify-content: flex-end;

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
