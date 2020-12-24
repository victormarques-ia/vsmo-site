import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: ${props => props.theme.fonts.default};
  }

  @media (max-width: 1023px) {
    :root {
      font-size: 60%;
    }
  }

`
