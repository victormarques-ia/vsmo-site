import React from 'react'

import * as S from './Project.elements'

import ShareIcon from '@static/share.svg'

const Project: React.FC = () => {
  return (
    <S.Wrapper>
      <S.IconContainer>
        <ShareIcon />
      </S.IconContainer>
      <S.FooterContainer>
        <S.Name>Sistema CB</S.Name>
        <S.GoToProjectIcon>
          <ShareIcon />
        </S.GoToProjectIcon>
      </S.FooterContainer>
    </S.Wrapper>
  )
}

export default Project
