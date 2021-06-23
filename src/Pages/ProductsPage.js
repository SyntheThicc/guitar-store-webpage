import React from 'react';
import { Section, SectionTitle } from './pageStyles';
import ItemsGrid from '../Components/ItemsGrid/ItemsGrid';
import LoadingSpinner from '../Components/Loader/LoadingSpinner';
import { useGlobalContext } from '../Context';
const ProductsPage = () => {
  const { isLoading } = useGlobalContext();
  return (
    <Section>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <ItemsGrid />}
    </Section>
  );
};

export default ProductsPage;
