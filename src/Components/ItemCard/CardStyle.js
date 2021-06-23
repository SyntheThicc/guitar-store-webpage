import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';

export const CardContainer = styled.article`
  min-width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 0.5rem 0.5rem 0;
  overflow: hidden;
  border-radius: 3px;
  -webkit-box-shadow: 5px 5px 15px -4px #000000;
  box-shadow: 5px 5px 15px -4px #000000;
  background-color: ${({ theme }) => theme.primaryColor};
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 80%;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    width: 100%;
  }
`;

export const CardHeader = styled.header`
  position: relative;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: 200;
  border-radius: 3px;
`;
export const CardFooter = styled.footer`
  height: 100%;
  width: 100%;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const ItemBrand = styled.h2`
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 500;
`;
export const ItemName = styled.h4`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textPrimary};
  margin: 1rem 0;
`;

export const ItemPrice = styled.p`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const CardButton = styled(Link)`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.textAccent};
  margin-top: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  &:hover {
    color: #fff;
  }
`;

export const ZoomIcon = styled(BiSearchAlt)`
  position: absolute;
  top: 5px;
  left: 5px;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.textAccent};
  font-weight: 700;
`;
