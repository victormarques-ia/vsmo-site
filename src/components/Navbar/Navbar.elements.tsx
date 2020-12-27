import styled from 'styled-components'
import { Container } from '../../styles/global'

export const NavbarBody = styled.header`
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
export const NavbarContainer = styled(Container)`
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

export const NavbarMenuOptions = styled.div`
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

export const NavbarMenuOption = styled.h2`
  font: ${props => props.theme.fonts.navbar};
  color: ${props => props.theme.colors.text};

  cursor: pointer;
`

export const NavbarMenuLinks = styled.div`
  grid-area: navbarMenuLinks;

  display: grid;
  align-items: center;
  justify-content: flex-end;

  grid-column-gap: 4.2rem;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, min-content);

  @media (max-width: 1023px) {
    justify-content: flex-start;
    align-items: center;
    grid-template-columns: repeat(3, min-content);
  }
`

export const NavbarMenuLink = styled.a`
  text-decoration: none;

  cursor: pointer;
`

export const NavbarGetInTouchButton = styled.button`
  width: 20rem;
  height: 5rem;

  background-color: rgb(16, 16, 16, 0);
  border: 0.1rem solid ${props => props.theme.colors.text};
  border-radius: 5rem;

  outline: none;
  cursor: pointer;

  @media (max-width: 1023px) {
    display: none;
  }
`
