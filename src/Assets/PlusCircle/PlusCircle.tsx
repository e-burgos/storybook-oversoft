import React, { useState } from 'react';
import { StyledSvgPlusCircle } from './PlusCircle.styles';
import colors from '../../color-palette';

export interface PlusCircleProps {
  size?: number;
  bgColor?: string;
  iconColor?: string;
  active?: boolean;
  onClick?: () => void;
}

const PlusCircle = ({ size, active, bgColor, iconColor, onClick: handleClick }: PlusCircleProps) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <StyledSvgPlusCircle
      width={size ? size : 30}
      viewBox="0 0 30 30"
      data-testid="PlusCircle"
      fill="none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <circle
        cx="15"
        cy="15"
        r="15"
        data-testid="CirclePlusCircle"
        fill={active ? colors.primary.red : bgColor ? bgColor : hover ? colors.primary.red : colors.neutrals.white}
      />
      <path
        d="M18.375 13.875H16.125V11.625C16.125 11.3266 16.0065 11.0405 15.7955 10.8295C15.5845 10.6185 15.2984 10.5 15 10.5C14.7016 10.5 14.4155 10.6185 14.2045 10.8295C13.9935 11.0405 13.875 11.3266 13.875 11.625V13.875H11.625C11.3266 13.875 11.0405 13.9935 10.8295 14.2045C10.6185 14.4155 10.5 14.7016 10.5 15C10.5 15.2984 10.6185 15.5845 10.8295 15.7955C11.0405 16.0065 11.3266 16.125 11.625 16.125H13.875V18.375C13.875 18.6734 13.9935 18.9595 14.2045 19.1705C14.4155 19.3815 14.7016 19.5 15 19.5C15.2984 19.5 15.5845 19.3815 15.7955 19.1705C16.0065 18.9595 16.125 18.6734 16.125 18.375V16.125H18.375C18.6734 16.125 18.9595 16.0065 19.1705 15.7955C19.3815 15.5845 19.5 15.2984 19.5 15C19.5 14.7016 19.3815 14.4155 19.1705 14.2045C18.9595 13.9935 18.6734 13.875 18.375 13.875Z"
        data-testid="PathPlusCircle"
        fill={
          active ? colors.neutrals.white : iconColor ? iconColor : hover ? colors.neutrals.white : colors.neutrals.black
        }
      />
    </StyledSvgPlusCircle>
  );
};

export default PlusCircle;
