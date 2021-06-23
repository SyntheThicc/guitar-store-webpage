import React from 'react';
// import { useParams } from 'react-router';
import DetailsCard from '../Components/ItemDetails/DetailsCard';
import { Section } from './pageStyles';

const ItemDetailsPage = () => {
  // const { id } = useParams();

  return (
    <Section>
      <DetailsCard />
    </Section>
  );
};

export default ItemDetailsPage;
