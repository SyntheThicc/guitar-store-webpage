import React from 'react';
import styled from 'styled-components';

import {
  ModalContainer,
  ModalOverlay,
} from '../../ItemCard/ZoomPhoto/ZoomStyle';
export const Overlay = styled(ModalOverlay)``;

export const Container = styled(ModalContainer)`
  max-width: 25rem;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryColor};
  -webkit-box-shadow: 5px 5px 15px -4px #000000;
  box-shadow: 5px 5px 15px -4px #000000;
  height: 10rem;
  position: relative;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
`;
export const Content = styled.h4`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.5rem;
  font-weight: 700;
`;

const NotificationModal = () => {
  return (
    <Overlay>
      <Container>
        <Content>Item Added To The Cart !</Content>
      </Container>
    </Overlay>
  );
};

export default NotificationModal;
