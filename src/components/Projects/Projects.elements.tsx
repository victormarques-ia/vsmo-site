import styled from 'styled-components'
import { Container } from 'src/styles/global'
import Content from '@components/Content/Content'

export const ProjectsBody = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const ProjectsContainer = styled(Container)``

export const ProjectsContent = styled(Content)`
  @media (max-width: 1023px) {
    position: relative;
  }
`

export const ProjectsWrapper = styled.div`
  overflow-x: auto;

  margin: 1.2rem 0;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-gap: 2.4rem;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 30rem));

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    grid-auto-flow: column;
  }
`
