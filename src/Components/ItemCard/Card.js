import React from 'react';

import {
  CardContainer,
  CardFooter,
  CardHeader,
  CardImage,
  ItemName,
  ItemPrice,
  ItemBrand,
  CardButton,
  ZoomIcon,
  Span,
} from './CardStyle';
import { useGlobalContext } from '../../Context';

const Card = ({ brand, model, price, images, id }) => {
  const { handleOpenModal } = useGlobalContext();
  return (
    <CardContainer>
      <CardHeader>
        <ZoomIcon onClick={() => handleOpenModal(id)} />
        <CardImage src={images[0]} />
      </CardHeader>
      <CardFooter>
        <ItemBrand>{brand}</ItemBrand>
        <ItemName>{model}</ItemName>
        <ItemPrice>
          <Span>$</Span>
          {price}
        </ItemPrice>
        <CardButton to={`/product/${id}`}>Details</CardButton>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
