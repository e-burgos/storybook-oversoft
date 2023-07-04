import React from 'react';
import { StyledSvgRightArrow } from './RightArrow.styles';

export interface RightArrowProps {
  size?: number;
}

const RightArrow = ({ size }: RightArrowProps) => {
  return (
    <StyledSvgRightArrow
      width={size ? size : 45}
      height={size ? size : 45}
      viewBox="0 0 45 45"
      data-testid="RightArrow"
      fill="none"
    >
      <line x1="27.5356" y1="22.4646" x2="20.4646" y2="29.5357" stroke="black" strokeWidth="2" strokeLinecap="round" />
      <line x1="20.4644" y1="15.4646" x2="27.5355" y2="22.5356" stroke="black" strokeWidth="2" strokeLinecap="round" />
      <rect x="0.5" y="0.5" width="44" height="44" rx="22" stroke="#EEEEEE" />
    </StyledSvgRightArrow>
  );
};

export default RightArrow;
