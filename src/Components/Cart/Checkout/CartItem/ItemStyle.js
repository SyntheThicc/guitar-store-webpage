import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { ListRow, ListColumn } from '../CheckoutStyle';

export const ItemRow = styled(ListRow)`
  position: relative;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
`;
export const ItemColumn = styled(ListColumn)`
  width: 100%;
  height: 100%;
  text-align: center;
  p {
    font-size: 0.9rem;
    font-weight: 400;
    color: ${({ theme }) => theme.textSecondary};
    @media ${({ theme }) => theme.breakpoints.sm} {
      font-size: 0.7rem;
    }
  }
  span {
    color: ${({ theme }) => theme.textAccent};
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0 0.5rem;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    padding: 0;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.deleteBtn ? 'red' : '#fff')};
  border: ${(props) => (props.deleteBtn ? 'none' : '1px solid gray')};
  background-color: transparent;
  font-size: ${(props) => (props.deleteBtn ? '1.3rem' : '1rem')};
  margin: 0 0.3rem;
`;

export const TrashIcon = styled(FaTimes)`
  font-size: 1.4rem;
  color: red;
  position: absolute;
  right: 1px;
  top: 1px;
`;
