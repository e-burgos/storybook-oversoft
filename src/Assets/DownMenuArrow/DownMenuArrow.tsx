import React from 'react';
import { StyledSvgDownMenuArrow } from './DownMenuArrow.styles';
import colors from '../../color-palette';

export interface DownMenuArrowProps {
  size?: number;
  color?: string;
}

const DownMenuArrow = ({ size, color }: DownMenuArrowProps) => {
  return (
    <StyledSvgDownMenuArrow width={size ? size : 15} viewBox="0 0 15 14" data-testid="DownMenuArrow" fill="none">
      <path
        d="M11.1899 5.25L7.68994 8.75L4.18994 5.25"
        stroke={color || colors.neutrals.greyLight}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvgDownMenuArrow>
  );
};

export default DownMenuArrow;
