import React from 'react'
import * as S from './AboutMe.elements'

import Photo from '@static/photo.svg'

import {
  container,
  photoAnimation,
  textVerticalAnimation
} from '@utils/animations'

const aboutMeData = {
  title: 'Victor Silva',
  description: `I am a person passionate about challenges, and that has been what
moves me in a year of experience in software development.
\nI have experience in web and mobile development, for
this, using mainly React, React Native and Node.js.`
}

const AboutMe: React.FC = () => {
  return (
    <S.Wrapper
      id="about_me"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <S.Body>
        <S.TitleContent title="developer" itemAnimation={textVerticalAnimation}>
          <S.TitleContainer>
            <S.Title>{aboutMeData?.title}</S.Title>
          </S.TitleContainer>
        </S.TitleContent>
        <S.PhotoContainer variants={photoAnimation}>
          <S.Photo>
            <Photo />
          </S.Photo>
        </S.PhotoContainer>
        <S.DescriptionContent
          title="about me"
          className="about-me"
          itemAnimation={textVerticalAnimation}
        >
          <S.DescriptionContainer>
            <S.Description>{aboutMeData?.description}</S.Description>
          </S.DescriptionContainer>
        </S.DescriptionContent>
        <S.IndicatorContainer variants={photoAnimation}>
          <S.LinkToSection href="#experiences_and_technologies">
            <S.ArrowDown src="/arrow_down.svg" />
          </S.LinkToSection>
          <S.ScrollDown src="/scroll_down.svg" />
        </S.IndicatorContainer>
      </S.Body>
    </S.Wrapper>
  )
}

export default AboutMe
