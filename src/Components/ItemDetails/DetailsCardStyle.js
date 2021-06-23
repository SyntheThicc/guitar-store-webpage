import styled from 'styled-components';

export const DetailsContainer = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  -webkit-box-shadow: 5px 5px 15px -4px #000000;
  box-shadow: 5px 5px 15px -4px #000000;
  max-width: 55rem;
  border-radius: 3px;
  padding: 1.5rem;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.xsm} {
    justify-content: space-around;
    border: none;
    padding: 1rem 0.5rem;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding-bottom: 1rem;
`;

export const HeaderTitle = styled.h2`
  letter-spacing: 1px;
  color: ${({ theme }) => theme.textAccent};
  font-size: 1.5rem;
  @media ${({ theme }) => theme.breakpoints.xsm} {
    font-size: 1.3rem;
  }
`;

export const DetailsContent = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto;
  align-items: center;
  justify-items: space-around;
  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Images = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  border-radius: 3px;
  overflow: hidden;
  height: 100%;
`;

export const MainImgWrapper = styled.div`
  min-width: 40rem;
  height: 27rem;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #000;
  margin-bottom: 1rem;
  overflow: hidden;
  -webkit-box-shadow: 5px 5px 15px -4px #000000;
  box-shadow: 5px 5px 15px -4px #000000;
  @media ${({ theme }) => theme.breakpoints.lg} {
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    min-width: 100%;
    height: 22rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 20rem;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    height: 15rem;
  }
`;

export const MainImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: fill;
`;

export const ImgGroup = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
`;

export const SideImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 5px 5px 15px -4px #000000;
  box-shadow: 5px 5px 15px -4px #000000;
  &:not(:nth-of-type(4)) {
    margin-right: 0.5rem;
  }
`;

export const SideImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const TextContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 1rem;
  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 0;
  }
`;

export const ProductSpecs = styled.p`
  width: 100%;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  font-weight: 500;
  @media ${({ theme }) => theme.breakpoints.xsm} {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;

export const SpecsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const Price = styled.h3`
  font-size: 1.2rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2rem;
`;
