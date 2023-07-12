import styled from 'styled-components';
import MediaQueryRulesEnum from '../../mediaQueryRules';

export const BackDropModalShadow = styled.div<{ $isOpen: boolean }>`
  display: flex;
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
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

export const ModalWrapper = styled.div<{ width: number; maxHeight: number }>`
  width: 95%;
  background: #eee;
  box-shadow: 1px 1px 5px grey;
  max-height: 95%;
  border-radius: 8px;
  @media (min-width: ${MediaQueryRulesEnum.mobile}) {
    width: ${(props) => props.width}%;
    max-height: ${(props) => props.maxHeight}%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0px;
  margin: 0px;
`;

export const ModalContent = styled.div`
  font-family: Rubik;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 80vh;
  width: 100%;
  margin: 0%;
  padding: 10px;
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
