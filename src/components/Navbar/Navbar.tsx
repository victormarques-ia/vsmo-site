/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'

import * as S from './Navbar.elements'

import { container, textVerticalAnimation } from '@utils/animations'

import GithubIcon from '@static/github.svg'
import LinkedinIcon from '@static/linkedin.svg'
import EmailIcon from '@static/email.svg'
import DevIcon from '@static/dev.svg'
import useWindowSize from '@utils/useWindowSize'

const navbarData = {
  githubUrl: 'https://github.com/victormarques-ia',
  linkedinUrl: 'https://www.linkedin.com/in/victor-silva-6764111a1/',
  devToUrl: 'https://dev.to/victormarquesia',
  email: 'victormarques.ia@gmail.com'
}

const Navbar: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState(0)
  const windowDimensions = useWindowSize()
  const elementInViewport = el => {
    const elTop = el.offsetTop
    const elHeight = el.offsetHeight
    const pageTop = window.pageYOffset

    if (pageTop > elTop - 150 && pageTop < elTop + elHeight - 100) {
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
    <S.Wrapper variants={container} initial="hidden" animate="visible">
      <S.Body>
        <S.MenuOptions>
          <S.MenuOption id="0" href="#about_me" active={selectedSection}>
            {'<home>'}
          </S.MenuOption>
          <S.MenuOption
            id="1"
            href="#experiences_and_technologies"
            active={selectedSection}
          >
            {'<experiences>'}
          </S.MenuOption>
          <S.MenuOption id="2" href="#projects" active={selectedSection}>
            {'<projects>'}
          </S.MenuOption>
        </S.MenuOptions>
        <S.MenuLinks>
          <S.MenuLink
            href={navbarData?.githubUrl}
            target="_blank"
            variants={textVerticalAnimation}
          >
            <GithubIcon />
          </S.MenuLink>
          <S.MenuLink
            href={navbarData?.linkedinUrl}
            target="_blank"
            variants={textVerticalAnimation}
          >
            <LinkedinIcon />
          </S.MenuLink>
          <S.MenuLink
            id="dev_icon"
            href={navbarData.devToUrl}
            target="_blank"
            variants={textVerticalAnimation}
          >
            <DevIcon />
          </S.MenuLink>
          {windowDimensions.innerWidth < 1023 ? (
            <S.MenuLink
              href={`mailto:${navbarData.email}?Subject=Hello%20Victor`}
              target="_top"
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1.33
                  }
                }
              }}
            >
              <EmailIcon />
            </S.MenuLink>
          ) : (
            <S.GetInTouchButton
              href={`mailto:${navbarData.email}?Subject=Hello%20Victor`}
              target="_top"
              style={{ opacity: 1 }}
              variants={{
                hidden: { opacity: 0 },

                visible: {
                  opacity: 1,
                  scale: [1, 1.3, 1],
                  transition: {
                    duration: 0.6,
                    ease: 'easeInOut'
                  }
                }
              }}
            >
              get in touch
            </S.GetInTouchButton>
          )}
        </S.MenuLinks>
      </S.Body>
    </S.Wrapper>
  )
}

export default Navbar
