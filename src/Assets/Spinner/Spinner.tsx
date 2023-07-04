import { StyledCircle, StyledSpinner } from './Spinner.styles';
import colors from '../../color-palette';
import React from 'react';

export interface SpinnerProps {
  size?: number;
  iconColor?: string;
  margin?: string;
}

const Spinner = ({ size, iconColor, margin }: SpinnerProps) => {
  return (
    <StyledSpinner
      viewBox="0 0 50 50"
      width={size ? size : 26}
      height={size ? size : 26}
      data-testid="Spinner"
      margin={margin ? margin : '0px'}
    >
      <StyledCircle
        data-testid="Circle"
        color={iconColor ? iconColor : colors.primary.red}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="6"
      />
    </StyledSpinner>
  );
};

export default Spinner;
