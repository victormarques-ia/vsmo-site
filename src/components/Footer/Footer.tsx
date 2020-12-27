import React from 'react'
import {
  FooterBody,
  FooterContainer,
  FooterText,
  LinkToDesigner
} from './Footer.elements'

const Footer: React.FC = () => {
  return (
    <FooterBody>
      <FooterContainer>
        <FooterText>victormarques.ia@gmail.com</FooterText>
        <FooterText>
          <LinkToDesigner href="https://www.behance.net/josneto6">
            designed by José Cordeiro
          </LinkToDesigner>{' '}
          {'// copyright © 2020'}
        </FooterText>
      </FooterContainer>
    </FooterBody>
  )
}

export default Footer
