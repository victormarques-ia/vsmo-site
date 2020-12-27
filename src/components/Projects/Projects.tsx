import React from 'react'
import * as S from './Projects.elements'

import Project from './Project/Project'

const Projects: React.FC = () => {
  return (
    <S.Wrapper id="projects">
      <S.Body>
        <S.Section title="projects">
          <S.ProjectsContainer>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </S.ProjectsContainer>
        </S.Section>
      </S.Body>
    </S.Wrapper>
  )
}

export default Projects
