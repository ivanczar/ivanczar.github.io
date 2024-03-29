import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { DarkTheme } from '../../themes';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.nav};

  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const NavLogo = styled(LinkS)`
  color: ${DarkTheme.colors.white};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 25px;
    margin-right: 25px;
    transform: translate (-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 6rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 3rem;
  height: 100%;
  font-family: ${DarkTheme.fonts.roboto};
  cursor: pointer;

  &:hover {
    color: ${DarkTheme.colors.purple};
  }

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.text};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled.a`
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.navButton};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${DarkTheme.fonts.roboto};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.1s ease-in-out;
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.navButton};
  }
`;

export const ExternalLinkIcon = styled(FaExternalLinkAlt)`
  margin-left: 10px;
  margin-bottom: -2px;
`;
