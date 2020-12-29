import React from 'react'
import * as S from './Footer.elements'

const footerData = {
  developerEmail: 'victormarques.ia@gmail.com',
  designerName: 'José Cordeiro',
  designerLink: 'https://www.behance.net/josneto6',
  year: '2020'
}

const Footer: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Body>
        <S.Text>{footerData?.developerEmail}</S.Text>
        <S.Text>
          <S.LinkToDesigner href={footerData?.designerLink} target="_blank">
            designed by {footerData?.designerName}
          </S.LinkToDesigner>{' '}
          {`// copyright © ${footerData?.year}`}
        </S.Text>
      </S.Body>
    </S.Wrapper>
  )
}

export default Footer
