import React from 'react';
import { useHistory } from 'react-router';
import { useGlobalContext } from '../../../Context';
import CartItem from './CartItem/CartItem';
import { data } from '../../../Data/data';

import {
  CartTitle,
  Container,
  ListColumn,
  ListHeader,
  ListRow,
  ListContent,
  ListFooter,
  FooterText,
  TotalText,
  TextGroup,
  ButtonGroup,
} from './CheckoutStyle';
import { FaTrash, FaArrowLeft } from 'react-icons/fa';
import { Button } from '../../../Pages/pageStyles';
const CheckoutList = () => {
  const shipping = 20;
  const { cartItems, cartTotal, startLoading, setProductsData, clearCart } =
    useGlobalContext();
  const history = useHistory();

  const continueShopping = () => {
    startLoading();
    setProductsData(data);
    history.push('/products');
  };
  return (
    <Container>
      {/* LABEL ROW */}
      <ListHeader>
        {' '}
        <ListRow>
          <ListColumn>PRODUCT</ListColumn>
          <ListColumn>PRICE</ListColumn>
          <ListColumn>QUANTITY</ListColumn>
          <ListColumn>TOTAL</ListColumn>
        </ListRow>
      </ListHeader>

      {/* LABEL ROW */}
      {/* CART ITEMS */}
      <ListContent scroll={cartItems.length > 5 ? true : false}>
        {cartItems.length === 0 ? (
          <CartTitle>Your Cart Is Empty</CartTitle>
        ) : (
          cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })
        )}
      </ListContent>
      {/* CART ITEMS */}
      <ListFooter>
        <ButtonGroup>
          <Button onClick={continueShopping}>
            Return <FaArrowLeft style={{ marginLeft: '5px' }} />
          </Button>
          <Button onClick={clearCart}>
            Clear Cart {''} <FaTrash style={{ marginLeft: '5px' }} />
          </Button>
        </ButtonGroup>
        <TextGroup visible={cartItems.length === 0 ? false : true}>
          <FooterText>Cart Items total: ${cartTotal.toFixed(2)}</FooterText>
          <FooterText>Shipping: ${shipping}</FooterText>
          <TotalText>
            Total: <span>${(cartTotal + shipping).toFixed(2)}</span>
          </TotalText>
          <Button checkout>Checkout</Button>
        </TextGroup>
      </ListFooter>
    </Container>
  );
};
export default CheckoutList;
