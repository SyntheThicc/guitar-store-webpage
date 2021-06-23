import React from 'react';
import { useGlobalContext } from '../Context';
import { Section } from './pageStyles';
import CheckoutList from '../Components/Cart/Checkout/CheckoutList';
import LoadingSpinner from '../Components/Loader/LoadingSpinner';
const CheckoutPage = () => {
  const { isLoading } = useGlobalContext();
  return (
    <Section>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <CheckoutList />}
    </Section>
  );
};

export default CheckoutPage;
