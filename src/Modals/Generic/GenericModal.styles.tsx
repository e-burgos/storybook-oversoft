import styled from 'styled-components';

export const BackDropModalShadow = styled.div<{ isOpen: boolean }>`
  display: flex;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100%;
  margin: 0px;
  top: 0;
  left: 0;
  z-index: 900;
  transition: opacity 0.2s ease-in;
`;

export const ModalWrapper = styled.div<{ size: 'S' | 'M' | 'L' }>`
  width: ${(props) => (props.size === 'M' ? '70%' : props.size === 'S' ? '35%' : '90%')};
  background: #eee;
  box-shadow: 1px 1px 5px grey;
  max-height: 90%;
  border-radius: 8px;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0px;
  margin: 0px;
`;

export const ModalContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 80vh;
  width: 100%;
  margin: 0%;
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 25px;
  color: #bbb;
  cursor: pointer;
  font-weight: lighter;
  &:before {
    content: '✖';
  }
`;

export const ModalTitle = styled.h1`
  color: var(--oversoft-total-black, #1a1b1e);
  font-family: Rubik;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  padding: 10px;
`;
