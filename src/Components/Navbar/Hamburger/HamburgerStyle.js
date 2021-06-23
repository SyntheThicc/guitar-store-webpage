import styled from 'styled-components';

export const HamburgerBtn = styled.div`
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 2px;
  position: relative;
  background-color: ${({ theme }) => theme.textSecondary};
  &::before {
    position: absolute;
    content: '';
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: inherit;
    transform: translateY(-0.6rem);
    z-index: 1000;
  }
  &::after {
    position: absolute;
    content: '';
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: inherit;
    transform: translateY(0.6rem);
    z-index: 1000;
  }
`;
