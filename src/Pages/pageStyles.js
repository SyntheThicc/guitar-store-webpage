import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export const Section = styled.section`
  min-height: calc(100vh - 4rem);
  width: 100%;
  background: ${({ theme }) => theme.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const SectionTitle = styled.h1`
  margin-top: 5rem;
  font-size: 2rem;
  letter-spacing: 2px;
  color: gold;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BgImg = styled.img`
  max-width: 50%;
  height: auto;
  margin-bottom: 2rem;
`;

export const AlertText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 2.5rem;
`;
export const Button = styled.button`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: 1rem;
  max-width: 15rem;
  min-width: 6rem;
  padding: 0.5rem;
  letter-spacing: 1px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryColor};
  color: #fff;
  background-color: ${({ theme }) => theme.textAccent};
  cursor: pointer;
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.8rem;
  }
`;

export const LinkBtn = styled(Link)`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: 1rem;
  max-width: 15rem;
  min-width: 8rem;
  padding: 0.8rem 0.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.textAccent};
  cursor: pointer;
`;

export const ArrowRight = styled(FaArrowRight)`
  margin: 2px 0 0 3px;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.textAccent};
  font-weight: 600;
  margin-right: 3px;
`;

// CHECKOUT STYLES
