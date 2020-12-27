import Content from '@components/Content/Content'
import styled from 'styled-components'
import { Container } from '../../styles/global'

export const AboutMeWrapper = styled.div`
  width: 100%;
`

export const AboutMeBody = styled.section`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AboutMeContainer = styled(Container)`
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

export const AboutMeTitleContent = styled(Content)`
  grid-area: aboutMeTitleContent;

  align-self: center;
`
export const AboutMeTitleContainer = styled.div``

export const AboutMeTitle = styled.h1`
  font: ${props => props.theme.fonts.detail};
  font-size: 10.4rem;
  line-height: 96.9%;
  max-width: 70%;
  @media (max-width: 500px) {
    font-size: 6.4rem;
  }
`

export const AboutMePhotoContainer = styled.div`
  grid-area: aboutMePhotoContainer;

  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1023px) {
    justify-content: flex-end;
    align-items: center;
  }
`
export const AboutMePhoto = styled.div`
  position: absolute;
  z-index: -5;

  transition: all 0.5s ease;

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

export const AboutMeDescriptionContent = styled(Content)`
  grid-area: aboutMeDescriptionContent;

  align-self: center;
`

export const AboutMeDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: pre-wrap;

  @media (max-width: 1023px) {
    justify-content: flex-end;
    align-items: flex-end;
  }
`

export const AboutMeDescription = styled.p`
  font: ${props => props.theme.fonts.default};
  @media (max-width: 1023px) {
    max-width: 85%;
  }
`

export const ArrowDown = styled.img`
  display: none;
`
export const ScrollDown = styled.img``

export const IndicatorContainer = styled.div`
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

export const BgContainer = styled.div`
  position: fixed;

  width: 100%;
  height: 100%;
  z-index: -50;

  top: -8rem;
`

export const BgImage = styled.img`
  position: absolute;

  min-width: 100%;
`
