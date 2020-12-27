import React from 'react'
import {
  ProjectsBody,
  ProjectsContainer,
  ProjectsContent,
  ProjectsWrapper
} from './Projects.elements'

import Project from './Project/Project'

const Projects: React.FC = () => {
  return (
    <ProjectsBody>
      <ProjectsContainer>
        <ProjectsContent title="projects">
          <ProjectsWrapper>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </ProjectsWrapper>
        </ProjectsContent>
      </ProjectsContainer>
    </ProjectsBody>
  )
}

export default Projects
