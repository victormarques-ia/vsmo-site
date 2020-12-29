import React from 'react'

import * as S from './Experiences.elements'

const experiencesData = [
  {
    id: 1,
    title: 'Computer Engineering undergraduate at CIn/UFPE',
    date: '2019-now'
  },
  {
    id: 2,
    title: 'Full Stack Developer at CITi',
    date: '2020-2020'
  },
  {
    id: 3,
    title: 'Tech Lead at CITi',
    date: '2021-now'
  }
]

const Experiences: React.FC = () => {
  let position = false
  return (
    <S.Wrapper title="experiences">
      <S.Timeline>
        <S.Container>
          {experiencesData?.map(experience => (
            <S.ExperienceContainer key={experience.id} sideByLeft={position}>
              {(position = !position)}
              <S.Date>{experience.date}</S.Date>
              <S.Title>{experience.title}</S.Title>
            </S.ExperienceContainer>
          ))}
        </S.Container>
      </S.Timeline>
    </S.Wrapper>
  )
}

export default Experiences
