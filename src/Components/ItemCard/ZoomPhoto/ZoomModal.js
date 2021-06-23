import React from 'react';
import { useGlobalContext } from '../../../Context';
import {
  CloseModalBtn,
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from './ZoomStyle';

const ZoomModal = () => {
  const { state, handleCloseModal } = useGlobalContext();

  return (
    <ModalOverlay onClick={handleCloseModal}>
      <ModalContainer>
        <CloseModalBtn onClick={handleCloseModal} />
        <ModalContent src={state.modalContent} />
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ZoomModal;
