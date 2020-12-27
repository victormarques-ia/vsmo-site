import styled from 'styled-components'
import Content from '@components/Content/Content'
import { HTMLAttributes } from 'react'

interface ExperienceContainerProps
  extends React.DetailsHTMLAttributes<HTMLAttributes<HTMLDivElement>> {
  sideByLeft?: boolean // false == left: 0, true == left: 50%
}

export const ExperiencesContent = styled(Content)`
  width: 100%;
`

export const ExperiencesTimeline = styled.div`
  position: relative;
  min-height: 40vh;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    border: 2px solid ${props => props.theme.colors.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: 0.4rem;
  }
`

export const ExperiencesContainer = styled.div`
  display: grid;

  margin-top: 2rem;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 1rem;
`

export const ExperienceContainer = styled.div<ExperienceContainerProps>`
  position: relative;
  width: 100%;
  display: grid;

  grid-template-columns: min-content;
  grid-row-gap: 0.2rem;
  grid-template-rows: min-content min-content;
  grid-template-areas:
    'experienceDate'
    'experienceTitle';

  left: ${props => (props.sideByLeft ? 70 : -65)}%;
  z-index: 10;
  justify-content: ${props => (props.sideByLeft ? 'flex-start' : 'flex-end')};
  text-align: ${props => (props.sideByLeft ? 'left' : 'right')};

  &::before {
    content: '';
    top: 0.5rem;

    position: absolute;
    z-index: 10;
    left: ${props => (!props.sideByLeft ? 16.05 : -2.9)}rem; // 15.4 -2.1
    width: 1.4rem;
    height: 1.4rem;

    background-color: ${props => props.theme.colors.primary};
    transform: rotate(-45deg);
  }
`

export const ExperienceDate = styled.h3`
  grid-area: experienceDate;
  min-width: 10rem;
  font: ${props => props.theme.fonts.detail};
  color: ${props => props.theme.colors.primary};
`
export const ExperienceTitle = styled.h2`
  grid-area: experienceTitle;
  min-width: 10rem;
  font: ${props => props.theme.fonts.detail};
`
