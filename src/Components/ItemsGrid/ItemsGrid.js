import React, { useEffect, useRef, useState } from 'react';
import Card from '../ItemCard/Card';
import ZoomModal from '../ItemCard/ZoomPhoto/ZoomModal';
import { useGlobalContext } from '../../Context';
import { Button, GridWrapper } from './GridStyle';

const ItemsGrid = () => {
  const { productsData, state } = useGlobalContext();
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  });

  return (
    <>
      {state.isModalOpen && <ZoomModal />}
      <GridWrapper>
        {productsData.map((item, index) => {
          return <Card size={size} {...item} key={index} />;
        })}
      </GridWrapper>
    </>
  );
};

export default ItemsGrid;
