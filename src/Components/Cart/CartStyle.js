import styled, { css } from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
export const CartIcon = styled(FaShoppingCart)`
  font-size: 2rem;
  transform: translate(-5%, 5%);
`;

export const activeStyles = `
  visibility:visible;
  opacity:100%;
  transform:translateX(0);
`;

export const CartContainer = styled.div`
  cursor: pointer;
  height: 3rem;
  width: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};
  visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
`;

export const CartCounter = styled.span`
  width: 1.4rem;
  height: 1.4rem;
  background-color: red;
  position: absolute;
  border-radius: 50%;
  top: 0;
  right: -0.3rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

export const CartItemsWrapper = styled.div`
  visibility: hidden;
  opacity: 0;
  transform: translateX(5px);
  overflow: hidden;
  transition: 0.2s;
  position: absolute;
  width: 35rem;
  height: auto;
  top: 4.5rem;
  right: 0.5rem;
  flex-direction: column;
  border-radius: 3px;
  ${(props) =>
    props.active
      ? css`
          ${activeStyles}
        `
      : ''}
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  -webkit-box-shadow: 5px 5px 15px -4px #000000;
  box-shadow: 5px 5px 15px -4px #000000;
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 95%;
    left: 0.5rem;
  }
`;

export const CartListContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.scroll ? '20rem' : '100%')};
  overflow-y: ${(props) => (props.scroll ? 'scroll' : 'none')};
`;

export const CartList = styled.ul`
  width: 100%;
  height: auto;
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.2s;
`;

export const CartItem = styled.li`
  color: ${({ theme }) => theme.textPrimary};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 3px;
  transition: 0.2s;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.primaryColor};
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const CartItemImg = styled.div`
  height: 100%;
  width: 4.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: #000;
  border-radius: 3px;
`;
export const ItemImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CartItemPrice = styled.h5`
  color: ${({ theme }) => theme.textAccent};
  font-size: 1rem;
`;
export const CartItemModel = styled.p`
  margin: 0 0.5rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.secondaryColor};
  padding: 1.5rem 1rem;
`;

export const ItemsTotal = styled.h4`
  color: ${({ theme }) => theme.textSecondary};
`;

export const Notification = styled.p`
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
`;
