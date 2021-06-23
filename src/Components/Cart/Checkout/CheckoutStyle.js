import styled, { css } from 'styled-components';

export const Container = styled.article`
  max-width: 1100px;
  padding: 0 1rem;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  position: relative;
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    padding: 0rem 0.2rem;
    height: calc(100vh - 4rem);
    border: none;
  }
`;

export const ListHeader = styled.div`
  width: 100%;
`;
export const ListContent = styled.div`
  overflow-y: ${(props) => (props.scroll ? 'scroll' : 'none')};
  width: 100%;
  min-height: 25rem;
  height: 100%;
`;

export const ListRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
  margin-bottom: 0.5rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.8rem;
  }
`;
export const ListColumn = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.textPrimary};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CartTitle = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.textPrimary};
  letter-spacing: 2px;
  text-align: center;
  transform: translateY(30%);
`;

export const ListFooter = styled.footer`
  position: relative;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.secondaryColor};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem;
  color: ${({ theme }) => theme.textPrimary};
  span {
    color: ${({ theme }) => theme.textAccent};
  }
`;

export const TextGroup = styled.div`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
`;

export const ButtonGroup = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  /* border: 1px solid #fff; */
`;
export const FooterText = styled.p`
  margin-bottom: 0.5rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.8rem;
  }
`;
export const TotalText = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1rem;
  }
`;
