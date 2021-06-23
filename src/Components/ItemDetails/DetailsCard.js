import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import { useGlobalContext } from '../../Context';
import NotificationModal from './NotificationModal/NotificationModal';
import { data } from '../../Data/data';
import {
  DetailsContainer,
  DetailsContent,
  Images,
  TextContainer,
  MainImg,
  ImgGroup,
  SideImg,
  HeaderTitle,
  ProductSpecs,
  MainImgWrapper,
  SideImgContainer,
  SpecsWrapper,
  Price,
  BtnContainer,
  TitleContainer,
} from './DetailsCardStyle';

import { Button, Span } from '../../Pages/pageStyles';

const DetailsCard = () => {
  const { addToCart, showNotification, startLoading, setProductsData } =
    useGlobalContext();
  const { id } = useParams();
  const [currentImg, setCurrentImg] = useState(0);
  const [product, setProduct] = useState(
    data.find((item) => item.id === parseInt(id))
  );
  const history = useHistory();
  const continueShopping = () => {
    startLoading();
    setProductsData(data);
    history.push('/products');
  };

  return (
    <DetailsContainer>
      {showNotification && <NotificationModal />}
      <TitleContainer>
        <HeaderTitle>
          {product.brand} {product.model}
        </HeaderTitle>
      </TitleContainer>
      <DetailsContent>
        <Images>
          <MainImgWrapper>
            <MainImg src={product.images[currentImg]} />
          </MainImgWrapper>
          <ImgGroup>
            {product.images.map((img, index) => {
              return (
                <SideImgContainer
                  onClick={() => setCurrentImg(index)}
                  key={index}
                >
                  <SideImg src={img} />
                </SideImgContainer>
              );
            })}
          </ImgGroup>
        </Images>
        <TextContainer>
          <SpecsWrapper>
            <ProductSpecs>
              <Span>Model:</Span> {product.model}
            </ProductSpecs>
            <ProductSpecs>
              <Span>Pickups:</Span> {product.pickups}
            </ProductSpecs>
            <ProductSpecs>
              <Span>Body:</Span>Mahogany
            </ProductSpecs>
            <ProductSpecs>
              <Span>Top:</Span>Maple
            </ProductSpecs>
            <ProductSpecs>
              <Span>Neck:</Span>Maple
            </ProductSpecs>
            <ProductSpecs>
              <Span>Frets:</Span>24
            </ProductSpecs>
            <ProductSpecs>
              <Span>Scale:</Span>648mm
            </ProductSpecs>
            <Price>
              <Span>$</Span>
              {product.price}
            </Price>
          </SpecsWrapper>
          <BtnContainer>
            <Button onClick={() => addToCart(product)}>Add To Cart</Button>
            <Button onClick={continueShopping}>Return</Button>
          </BtnContainer>
        </TextContainer>
      </DetailsContent>
    </DetailsContainer>
  );
};

export default DetailsCard;
