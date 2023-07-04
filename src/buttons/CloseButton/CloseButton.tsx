import React from 'react';
import { StyledCloseButton } from './CloseButton.styles';

export interface CloseButtonProps {
  onClick: () => void;
  'aria-label'?: string;
}

const CloseButton = ({ onClick: clickHandler, 'aria-label': ariaLabel }: CloseButtonProps) => {
  return (
    <StyledCloseButton
      data-testid="ModalCloseButton"
      aria-label={ariaLabel ? ariaLabel : 'Cerrar'}
      onClick={clickHandler}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="19.5356"
          y1="12.4645"
          x2="12.4646"
          y2="19.5355"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="12.4645"
          y1="12.4645"
          x2="19.5356"
          y2="19.5355"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#EEEEEE" />
      </svg>
    </StyledCloseButton>
  );
};

export default CloseButton;
