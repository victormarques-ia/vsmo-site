import React, { useState, useEffect } from 'react'

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
  const [selectedSection, setSelectedSection] = useState(0)
  const elementInViewport = el => {
    const elTop = el.offsetTop
    const elHeight = el.offsetHeight
    const pageTop = window.pageYOffset

    if (pageTop > elTop - 100 && pageTop < elTop + elHeight - 100) {
      return true
    }
    return false
  }

  const handleScroll = () => {
    ;['about_me', 'experiences_and_technologies', 'projects'].forEach(
      (sectionName, index) => {
        const el = document.getElementById(sectionName)
        if (elementInViewport(el)) {
          setSelectedSection(index)
        }
      }
    )
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.addEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <NavbarBody>
      <NavbarContainer>
        <NavbarMenuOptions>
          <NavbarMenuOption id="0" href="#about_me" active={selectedSection}>
            {'<home>'}
          </NavbarMenuOption>
          <NavbarMenuOption
            id="1"
            href="#experiences_and_technologies"
            active={selectedSection}
          >
            {'<experiences>'}
          </NavbarMenuOption>
          <NavbarMenuOption id="2" href="#projects" active={selectedSection}>
            {'<projects>'}
          </NavbarMenuOption>
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
            <NavbarMenuOption style={{ opacity: 1 }}>
              get in touch
            </NavbarMenuOption>
          </NavbarGetInTouchButton>
        </NavbarMenuLinks>
      </NavbarContainer>
    </NavbarBody>
  )
}

export default Navbar
