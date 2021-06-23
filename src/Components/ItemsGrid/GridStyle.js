import styled from 'styled-components';

export const GridWrapper = styled.div`
  align-self: center;
  margin: 3rem 0;
  height: auto;
  width: auto;
  max-width: 1500px;
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 3rem;
  padding: 0 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  @media ${({ theme }) => theme.breakpoints.xl} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`;
