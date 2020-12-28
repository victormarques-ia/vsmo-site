import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/global'

interface NavbarMenuOptionProps
  extends React.DetailsHTMLAttributes<HTMLAttributes<HTMLLinkElement>> {
  active?: number // 0 == about_me, 1 == experiences_and_technologies, 2 == projects
}
export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;

  width: 100%;
  top: 0;
  z-index: 100;
  padding-top: 6rem;

  backdrop-filter: blur(0.1rem);
  -webkit-backdrop-filter: blur(0.1rem);
`
export const Body = styled(Container)`
  display: grid;
  align-items: center;

  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, auto);
  grid-template-areas: 'navbarMenuOptions navbarMenuLinks';

  @media (max-width: 1023px) {
    align-items: flex-start !important;
    grid-template-areas: 'navbarMenuLinks navbarMenuOptions';
    grid-column-gap: 2rem;
  }
`

export const MenuOptions = styled.div`
  grid-area: navbarMenuOptions;

  display: grid;

  grid-column-gap: 4.2rem;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, min-content);

  @media (max-width: 1023px) {
    grid-row-gap: 2.1rem;
    justify-content: flex-end;

    text-align: right;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
  }
`

export const MenuOption = styled.a<NavbarMenuOptionProps>`
  font: ${props => props.theme.fonts.navbar};
  color: ${props => props.theme.colors.text};

  opacity: ${props => (props.active === Number(props.id) ? 1 : 0.25)};

  text-decoration: none;

  cursor: pointer;
`

export const MenuLinks = styled.div`
  grid-area: navbarMenuLinks;

  display: grid;
  align-items: center;
  justify-content: flex-end;

  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, min-content);
  grid-column-gap: 4.2rem;

  @media (max-width: 1023px) {
    justify-content: flex-start;
    align-items: center;
    grid-template-columns: repeat(4, min-content);
    grid-column-gap: 3.2rem;
  }
`

export const MenuLink = styled.a`
  display: ${props => (props.id === 'email_icon' ? 'none' : 'initial')};
  text-decoration: none;

  cursor: pointer;

  svg {
    width: 2.4rem;
    path {
      fill: ${props => props.theme.colors.text};
    }
  }

  @media (max-width: 1023px) {
    display: initial;
  }
`

export const GetInTouchButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 5rem;

  background-color: rgb(16, 16, 16, 0);
  border: 0.1rem solid ${props => props.theme.colors.text};
  border-radius: 5rem;

  outline: none;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 1023px) {
    display: none;
  }
`
