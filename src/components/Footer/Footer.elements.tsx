import { Container } from 'src/styles/global'
import styled from 'styled-components'
export const FooterBody = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-bottom: 6rem;

  @media (max-width: 1023px) {
    margin-bottom: 4rem;
  }
`
export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  opacity: 0.4;

  @media (max-width: 1023px) {
    flex-direction: column;
    justify-content: initial;

    h3:nth-child(1) {
      margin-bottom: 0.8rem;
    }
  }
`

export const FooterText = styled.h3`
  font: ${props => props.theme.fonts.default};
  color: ${props => props.theme.colors.text};
`
export const LinkToDesigner = styled.a`
  font: ${props => props.theme.fonts.default};
  color: ${props => props.theme.colors.text};
  text-decoration: none !important;
`
