import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: ${props => props.theme.fonts.default};
    overflow-x: hidden;

  }

  @media (max-width: 1023px) {
    :root {
      font-size: 58%;
    }
  }

  @media (max-width: 500px) {
    :root {
      font-size: 48%;
    }
  }

`
export const Container = styled.div`
  width: 90vw;
  max-width: 1280px;
`
