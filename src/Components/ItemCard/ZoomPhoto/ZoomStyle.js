import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ModalContainer = styled.div`
  max-width: 50rem;
  height: auto;
  position: relative;
  z-index: 2000;
`;
export const ModalContent = styled.img`
  width: 100%;
  height: 100%;
`;

export const CloseModalBtn = styled(FaTimes)`
  position: absolute;
  left: 5px;
  top: 5px;
  font-size: 1.5rem;
  cursor: pointer;
`;
