import React from 'react'

import {
  NavbarBody,
  NavbarContainer,
  NavbarMenuOptions,
  NavbarMenuOption,
  NavbarMenuLinks,
  NavbarGetInTouchButton,
  NavbarMenuLink
} from './Navbar.elements'

import GithubIcon from '@static/github.svg'
import LinkedinIcon from '@static/linkedin.svg'
import EmailIcon from '@static/email.svg'

const Navbar: React.FC = () => {
  return (
    <NavbarBody>
      <NavbarContainer>
        <NavbarMenuOptions>
          <NavbarMenuOption>{'<home>'}</NavbarMenuOption>
          <NavbarMenuOption>{'<experiences>'}</NavbarMenuOption>
          <NavbarMenuOption>{'<projects>'}</NavbarMenuOption>
        </NavbarMenuOptions>
        <NavbarMenuLinks>
          <NavbarMenuLink
            href={'https://github.com/victormarques-ia'}
            target="_blank"
          >
            <GithubIcon />
          </NavbarMenuLink>
          <NavbarMenuLink
            href={'https://www.linkedin.com/in/victor-silva-6764111a1/'}
            target="_blank"
          >
            <LinkedinIcon />
          </NavbarMenuLink>
          <NavbarMenuLink href={'#'} target="_blank">
            <EmailIcon />
          </NavbarMenuLink>
          <NavbarGetInTouchButton>
            <NavbarMenuOption>get in touch</NavbarMenuOption>
          </NavbarGetInTouchButton>
        </NavbarMenuLinks>
      </NavbarContainer>
    </NavbarBody>
  )
}

export default Navbar
