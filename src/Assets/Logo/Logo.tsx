import React from 'react';
import { StyledSvgLogo } from './Logo.styles';
import colors from '../../color-palette';

export interface LogoProps {
  size?: number;
  color?: string;
  secondaryColor?: string;
}

const Logo = ({ size, color, secondaryColor }: LogoProps) => {
  return (
    <StyledSvgLogo width={size ? size : 49} viewBox="0 0 49 49" data-testid="Logo" fill="none">
      <g clipPath="url(#clip0_146_775)">
        <path
          d="M48.3432 12.09V36.3426H36.27V12.09H12.4529V2.06627e-06L36.27 0L48.3432 12.09Z"
          fill={secondaryColor || colors.neutrals.greyLight}
          fillOpacity="0.6"
        />
        <path
          d="M48.3432 12.09V36.3426H36.27V12.09H12.4529V2.06627e-06L36.27 0L48.3432 12.09Z"
          fill={color || colors.primary.red}
        />
        <path
          d="M0.379761 36.3796V12.127H12.4529V36.3796H36.27V48.4696H12.4529L0.379761 36.3796Z"
          fill={secondaryColor || colors.neutrals.greyLight}
          fillOpacity="0.6"
        />
        <path
          d="M0.379761 36.3796V12.127H12.4529V36.3796H36.27V48.4696H12.4529L0.379761 36.3796Z"
          fill={color || colors.primary.red}
        />
      </g>
      <defs>
        <clipPath id="clip0_146_775">
          <rect width="48" height="48.5053" fill="white" transform="translate(0.379761)" />
        </clipPath>
      </defs>
    </StyledSvgLogo>
  );
};

export default Logo;
