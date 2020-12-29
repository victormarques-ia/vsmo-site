import styled from 'styled-components'

export const Wrapper = styled.div`
  opacity: 0.7;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
  cursor: pointer;

  @media (max-width: 767px) {
    opacity: 1;
  }
`

export const Body = styled.div`
  background-color: #232323;
  max-height: 30rem;
  min-height: 30rem;
  max-width: 30rem;
  padding: 1.2rem 1.2rem 0 1.2rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  justify-items: center;
  width: 100%;

  @media (max-width: 767px) {
    max-height: 40rem;
    width: 30rem;
    height: 40rem;
  }
`

export const BottomLine = styled.div`
  background-color: ${props => props.theme.colors.detail};
  padding: 0.2rem;
`

export const IconContainer = styled.div`
  align-self: center;
`

export const Icon = styled.img`
  width: 6.4rem;
  height: 6.4rem;
`

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`
export const GoToProjectIcon = styled.div``

export const Name = styled.h3`
  font: ${props => props.theme.fonts.default};
`
