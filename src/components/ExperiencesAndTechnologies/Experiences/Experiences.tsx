import React from 'react'

import {
  ExperiencesContainer,
  ExperienceContainer,
  ExperienceDate,
  ExperienceTitle,
  ExperiencesContent,
  ExperiencesTimeline
} from './Experiences.elements'

const Experiences: React.FC = () => {
  return (
    <ExperiencesContent title="experiences">
      <ExperiencesTimeline>
        <ExperiencesContainer>
          <ExperienceContainer sideByLeft={true}>
            <ExperienceDate>2019-now</ExperienceDate>
            <ExperienceTitle>
              Computer Engineering undergraduate at CIn/UFPE
            </ExperienceTitle>
          </ExperienceContainer>
          <ExperienceContainer sideByLeft={false}>
            <ExperienceDate>2020-now</ExperienceDate>
            <ExperienceTitle>Full Stack Developer at CITi</ExperienceTitle>
          </ExperienceContainer>
          <ExperienceContainer sideByLeft={true}>
            <ExperienceDate>2021-now</ExperienceDate>
            <ExperienceTitle>Tech Lead at CITi</ExperienceTitle>
          </ExperienceContainer>
        </ExperiencesContainer>
      </ExperiencesTimeline>
    </ExperiencesContent>
  )
}

export default Experiences
