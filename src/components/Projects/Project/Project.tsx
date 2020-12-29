import React from 'react'

import * as S from './Project.elements'

import ShareIcon from '@static/share.svg'

interface ProjectProps {
  projectName: string
  projectIcon: string
  projectUrl: string
}

const Project: React.FC<ProjectProps> = ({
  projectName,
  projectIcon,
  projectUrl
}: ProjectProps) => {
  return (
    <S.Wrapper onClick={() => window.open(projectUrl, '_blank')}>
      <S.Body>
        <S.IconContainer>
          <S.Icon src={projectIcon} />
        </S.IconContainer>
        <S.FooterContainer>
          <S.Name>{projectName}</S.Name>
          <S.GoToProjectIcon>
            <ShareIcon />
          </S.GoToProjectIcon>
        </S.FooterContainer>
      </S.Body>
      <S.BottomLine />
    </S.Wrapper>
  )
}

export default Project
