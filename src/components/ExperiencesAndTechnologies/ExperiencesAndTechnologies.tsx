import React from 'react'
import {
  ExperiencesAndTechnologiesBody,
  ExperiencesAndTechnologiesContainer,
  ArrowDown,
  IndicatorContainer,
  ScrollDown
} from './ExperiencesAndTechnologies.elements'

import Experiences from './Experiences/Experiences'
import Technologies from './Technologies/Technologies'
const ExperiencesAndTechnologies: React.FC = () => {
  return (
    <ExperiencesAndTechnologiesBody>
      <ExperiencesAndTechnologiesContainer>
        <Experiences />
        <Technologies />
        <IndicatorContainer>
          <ArrowDown src="/arrow_down.svg" />
          <ScrollDown src="/scroll_down.svg" />
        </IndicatorContainer>
      </ExperiencesAndTechnologiesContainer>
    </ExperiencesAndTechnologiesBody>
  )
}

export default ExperiencesAndTechnologies
