import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useGlobalContext } from '../../Context';
import {
  CartContainer,
  CartIcon,
  CartCounter,
  CartItemsWrapper,
  CartListContainer,
  CartList,
  CartItem,
  BtnContainer,
  CartWrapper,
  ItemsTotal,
  CartItemImg,
  CartItemModel,
  CartItemPrice,
  ItemImg,
  Wrapper,
  Notification,
} from './CartStyle';

import { Button, Span } from '../../Pages/pageStyles';
const Cart = () => {
  const history = useHistory();
  const {
    isCartOpen,
    handleCart,
    cartItems,
    cartTotal,
    startLoading,
    setIsCartOpen,
    cartCounter,
  } = useGlobalContext();

  const location = useLocation();

  const goToCheckout = () => {
    setIsCartOpen(false);
    startLoading();
    history.push('/checkout');
  };

  return (
    <>
      <CartContainer
        hide={location.pathname === '/checkout'}
        onClick={handleCart}
        active={cartItems.length === 0 ? false : true}
      >
        <CartIcon />
        <CartCounter>{cartCounter}</CartCounter>
      </CartContainer>
      <CartItemsWrapper active={isCartOpen}>
        <CartListContainer scroll={cartItems.length > 4 ? true : false}>
          <CartList>
            {cartItems.map((item) => {
              return (
                <CartItem key={item.id}>
                  <Wrapper>
                    <CartItemImg>
                      <ItemImg src={item.images[0]} />
                    </CartItemImg>
                    <CartItemModel>
                      <Span>{item.brand}</Span> {item.model}{' '}
                      <Span> x{item.quantity}</Span>
                    </CartItemModel>
                  </Wrapper>
                  <CartItemPrice>
                    ${item.price.toFixed(3) * item.quantity}
                  </CartItemPrice>
                </CartItem>
              );
            })}
          </CartList>
        </CartListContainer>
        <BtnContainer>
          {cartItems.length === 0 ? (
            <Notification>Your Cart Is Empty</Notification>
          ) : (
            <>
              <ItemsTotal>
                <Span>Cart total :</Span> ${cartTotal.toFixed(2)}
              </ItemsTotal>
              <Button onClick={goToCheckout}>Checkout</Button>
            </>
          )}
        </BtnContainer>
      </CartItemsWrapper>
    </>
  );
};

export default Cart;
