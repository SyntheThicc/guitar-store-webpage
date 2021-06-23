import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
// NAV
export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 5000;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryColor};
  -webkit-box-shadow: 5px 5px 15px -4px #000000;
  box-shadow: 5px 5px 15px -4px #000000;
`;

export const NavCenter = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  height: 4rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: relative;
`;

export const LinksContainer = styled.div`
  height: inherit;
  @media ${({ theme }) => theme.breakpoints.md} {
    position: fixed;
    height: 100%;
    width: ${(props) => (props.active ? '100%' : '0')};
    background-color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    top: 4rem;
    left: 0;
    height: 100vh;
    z-index: -5;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
  }
`;

export const NavLinks = styled.ul`
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.3s;
  border-radius: 3px;
  z-index: 1000;
  background-color: ${({ theme }) => theme.primaryColor};
  @media ${({ theme }) => theme.breakpoints.md} {
    width: ${(props) => (props.active ? '70%' : '0')};
    top: 0.1em;
    left: 0rem;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
export const NavItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  @media ${({ theme }) => theme.breakpoints.md} {
    height: 4rem;
  }
`;

export const NavLink = styled(Link)`
  color: ${(props) =>
    props.active ? props.theme.textAccent : props.theme.textPrimary};
  font-size: 1.2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  width: 100%;
  height: inherit;
  transition: 0.2s;
  padding: 0 1rem;
  position: relative;
  &:before {
    transition: 0.2s;
    content: '';
    position: absolute;
    width: ${(props) => (props.active ? '50%' : '0')};
    height: 3px;
    background-color: ${({ theme }) => theme.textAccent};
    bottom: 0;
  }
  &:hover {
    color: ${(props) => (props.active ? null : props.theme.textSecondary)};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    color: ${(props) =>
      props.active ? props.theme.textSecondary : props.theme.textPrimary};
    background-color: ${(props) =>
      props.active ? props.theme.hoverColor : props.theme.primaryColor};
    justify-content: flex-start;
    &:before {
      height: 0;
    }
    &:hover {
      background-color: ${({ theme }) => theme.hoverColor};
    }
  }
`;
// NAV
