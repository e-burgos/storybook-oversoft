import React from 'react';
import { StyledSvgLeftMenuArrow } from './LeftMenuArrow.styles';
import colors from '../../color-palette';

export interface LeftMenuArrowProps {
  size?: number;
  color?: string;
}

const LeftMenuArrow = ({ size, color }: LeftMenuArrowProps) => {
  return (
    <StyledSvgLeftMenuArrow width={size ? size : 15} viewBox="0 0 15 14" data-testid="LeftMenuArrow" fill="none">
      <path
        d="M9.43994 10.5L5.93994 7L9.43994 3.5"
        stroke={color || colors.neutrals.greyLight}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvgLeftMenuArrow>
  );
};

export default LeftMenuArrow;
