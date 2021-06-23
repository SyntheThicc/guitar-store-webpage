import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const activeStyles = `
  visibility:visible;
  opacity:100%;
  transform:translateX(0);
`;

export const DropdownContainer = styled.div`
  -webkit-box-shadow: 5px 5px 15px -4px #000000;
  box-shadow: 5px 5px 15px -4px #000000;
  height: auto;
  width: 120%;
  background-color: ${({ theme }) => theme.primaryColor};
  position: absolute;
  top: 4.5rem;
  left: 0;
  z-index: 10000;
  visibility: hidden;
  opacity: 0;
  transform: translateX(5px);
  overflow: hidden;
  transition: 0.2s;
  border-radius: 3px;
  ${(props) =>
    props.active
      ? css`
          ${activeStyles}
        `
      : ''}
  @media ${({ theme }) => theme.breakpoints.md} {
    background-color: ${({ theme }) => theme.secondaryColor};
    height: auto;
    top: 100%;
    width: 100%;
    left: 0rem;
  }
`;

export const DropdownList = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  position: relative;
`;

export const DropdownItem = styled.li`
  width: 100%;
  height: 3.5rem;
  transition: 0.2s;
  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 3rem;
  }
`;

export const DropdownLink = styled(Link)`
  color: ${({ theme }) => theme.textPrimary};
  letter-spacing: 1px;
  height: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  transition: 0.2s;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
    color: ${({ theme }) => theme.textSecondary};
  }
`;
