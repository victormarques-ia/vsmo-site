import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #232323;
  max-height: 30rem;
  min-height: 30rem;
  max-width: 30rem;
  padding: 1.2rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  justify-items: center;
  width: 100%;
`

export const IconContainer = styled.div`
  align-self: center;

  svg {
    width: 4.2rem;
    height: 4.2rem;
  }
`

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const GoToProjectIcon = styled.div``

export const Name = styled.h3`
  font: ${props => props.theme.fonts.default};
`
