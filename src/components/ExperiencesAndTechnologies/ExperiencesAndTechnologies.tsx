import React from 'react'
import * as S from './ExperiencesAndTechnologies.elements'

import Experiences from './Experiences/Experiences'
import Technologies from './Technologies/Technologies'
const ExperiencesAndTechnologies: React.FC = () => {
  return (
    <S.Wrapper id="experiences_and_technologies">
      <S.Body>
        <Experiences />
        <Technologies />
        <S.IndicatorContainer>
          <S.LinkToSection href="#projects">
            <S.ArrowDown src="/arrow_down.svg" />
          </S.LinkToSection>
          <S.ScrollDown src="/scroll_down.svg" />
        </S.IndicatorContainer>
      </S.Body>
    </S.Wrapper>
  )
}

export default ExperiencesAndTechnologies
