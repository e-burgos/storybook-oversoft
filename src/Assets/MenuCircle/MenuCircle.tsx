import React, { useState } from 'react';
import { StyledSvgMenuCircle } from './MenuCircle.styles';
import colors from '../../color-palette';

export interface MenuCircleProps {
  size?: number;
  bgColor?: string;
  iconColor?: string;
  active?: boolean;
  onClick?: () => void;
}

const MenuCircle = ({ size, active, bgColor, iconColor, onClick: handleClick }: MenuCircleProps) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <StyledSvgMenuCircle
      width={size ? size : 30}
      height={size ? size : 30}
      viewBox="0 0 30 30"
      data-testid="MenuCircle"
      fill="none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <circle
        cx="15"
        cy="15"
        r="15"
        data-testid="CircleMenuCircle"
        fill={active ? colors.primary.red : bgColor ? bgColor : hover ? colors.primary.red : colors.neutrals.white}
      />
      <path
        data-testid="PathMenuCircle"
        d="M9.46338 15.459H20.7134"
        stroke={
          active ? colors.neutrals.white : iconColor ? iconColor : hover ? colors.neutrals.white : colors.neutrals.black
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.46338 11.709H20.7134"
        stroke={
          active ? colors.neutrals.white : iconColor ? iconColor : hover ? colors.neutrals.white : colors.neutrals.black
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.46338 19.209H20.7134"
        stroke={
          active ? colors.neutrals.white : iconColor ? iconColor : hover ? colors.neutrals.white : colors.neutrals.black
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvgMenuCircle>
  );
};

export default MenuCircle;
