import React from 'react'

import {
  ProjectContainer,
  ProjectIconContainer,
  ProjectFooterContainer,
  ProjectName,
  ProjectGoToProjectIcon
} from './Project.elements'

import ShareIcon from '@static/share.svg'

const Project: React.FC = () => {
  return (
    <ProjectContainer>
      <ProjectIconContainer>
        <ShareIcon />
      </ProjectIconContainer>
      <ProjectFooterContainer>
        <ProjectName>Sistema CB</ProjectName>
        <ProjectGoToProjectIcon>
          <ShareIcon />
        </ProjectGoToProjectIcon>
      </ProjectFooterContainer>
    </ProjectContainer>
  )
}

export default Project
