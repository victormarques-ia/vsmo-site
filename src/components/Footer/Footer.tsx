import React from 'react'
import * as S from './Footer.elements'

const Footer: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Body>
        <S.Text>victormarques.ia@gmail.com</S.Text>
        <S.Text>
          <S.LinkToDesigner href="https://www.behance.net/josneto6">
            designed by José Cordeiro
          </S.LinkToDesigner>{' '}
          {'// copyright © 2020'}
        </S.Text>
      </S.Body>
    </S.Wrapper>
  )
}

export default Footer
