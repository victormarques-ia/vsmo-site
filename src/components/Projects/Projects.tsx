/* eslint-disable multiline-ternary */
import React from 'react'
import dynamic from 'next/dynamic'
import * as S from './Projects.elements'

import Project from './Project/Project'

import useWindowSize from '@utils/useWindowSize'

import Icon from './icons'
const projectsData = [
  {
    id: 1,
    name: 'My site',
    icon: Icon.site,
    url: 'https://github.com/victormarques-ia/vsmo-site'
  },
  {
    id: 2,
    name: 'React Chat App',
    icon: Icon.chat,
    url: 'https://github.com/victormarques-ia/react-chat-app-v1'
  },
  {
    id: 3,
    name: 'Mongo Chat App',
    icon: Icon.mongo,
    url: 'https://github.com/victormarques-ia/mongo-chat-app'
  },
  {
    id: 4,
    name: 'Responsive Web Page',
    icon: Icon.site,
    url: 'https://github.com/victormarques-ia/react-responsive-web-page'
  },
  {
    id: 5,
    name: 'Jump Game',
    icon: Icon.game,
    url: 'https://github.com/victormarques-ia/pta-game-challenge-js'
  },
  {
    id: 6,
    name: 'Game Streaming App',
    icon: Icon.video,
    url: 'https://github.com/victormarques-ia/game_streaming_flutter'
  }
]

const MotionSlider = dynamic(() => import('./MotionSlider'), {
  ssr: false
})

const Projects: React.FC = () => {
  const windowDimensions = useWindowSize()

  return (
    <S.Wrapper id="projects">
      <S.Body>
        <S.Section title="projects">
          <S.ProjectsContainer>
            {windowDimensions.innerWidth > 767 ? (
              <>
                {projectsData?.map(project => (
                  <Project
                    key={project.id}
                    projectName={project.name}
                    projectIcon={project.icon}
                    projectUrl={project.url}
                  />
                ))}
              </>
            ) : (
              <MotionSlider padding={30} gap={30}>
                {projectsData?.map(project => (
                  <Project
                    key={project.id}
                    projectName={project.name}
                    projectIcon={project.icon}
                    projectUrl={project.url}
                  />
                ))}
              </MotionSlider>
            )}
          </S.ProjectsContainer>
        </S.Section>
      </S.Body>
    </S.Wrapper>
  )
}

export default Projects
