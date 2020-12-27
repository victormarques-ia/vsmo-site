import React from 'react'

import {
  AboutMeBody,
  AboutMeContainer,
  AboutMeDescriptionContent,
  AboutMeDescription,
  AboutMeDescriptionContainer,
  AboutMePhoto,
  AboutMePhotoContainer,
  AboutMeTitleContent,
  AboutMeTitle,
  AboutMeTitleContainer,
  AboutMeWrapper,
  IndicatorContainer,
  ScrollDown,
  ArrowDown
} from './AboutMe.elements'

import Photo from '@static/photo.svg'

const AboutMe: React.FC = () => {
  return (
    <AboutMeWrapper id="about_me">
      <AboutMeBody>
        <AboutMeContainer>
          <AboutMeTitleContent title="developer">
            <AboutMeTitleContainer>
              <AboutMeTitle>Victor Silva</AboutMeTitle>
            </AboutMeTitleContainer>
          </AboutMeTitleContent>
          <AboutMePhotoContainer>
            <AboutMePhoto>
              <Photo />
            </AboutMePhoto>
          </AboutMePhotoContainer>
          <AboutMeDescriptionContent title="about me" className="about-me">
            <AboutMeDescriptionContainer>
              <AboutMeDescription>
                I am a person passionate about challenges, and that has been
                what moves me in a year of experience in software development.{' '}
                {'\n \n'}I have experience in web and mobile development, for
                this, using mainly React, React Native and Node.js.
              </AboutMeDescription>
            </AboutMeDescriptionContainer>
          </AboutMeDescriptionContent>
          <IndicatorContainer>
            <ArrowDown src="/arrow_down.svg" />
            <ScrollDown src="/scroll_down.svg" />
          </IndicatorContainer>
        </AboutMeContainer>
      </AboutMeBody>
    </AboutMeWrapper>
  )
}

export default AboutMe
