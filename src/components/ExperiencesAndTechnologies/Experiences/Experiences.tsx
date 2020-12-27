import React from 'react'

import * as S from './Experiences.elements'

const Experiences: React.FC = () => {
  return (
    <S.Wrapper title="experiences">
      <S.Timeline>
        <S.Container>
          <S.ExperienceContainer sideByLeft={true}>
            <S.Date>2019-now</S.Date>
            <S.Title>Computer Engineering undergraduate at CIn/UFPE</S.Title>
          </S.ExperienceContainer>
          <S.ExperienceContainer sideByLeft={false}>
            <S.Date>2020-now</S.Date>
            <S.Title>Full Stack Developer at CITi</S.Title>
          </S.ExperienceContainer>
          <S.ExperienceContainer sideByLeft={true}>
            <S.Date>2021-now</S.Date>
            <S.Title>Tech Lead at CITi</S.Title>
          </S.ExperienceContainer>
        </S.Container>
      </S.Timeline>
    </S.Wrapper>
  )
}

export default Experiences
