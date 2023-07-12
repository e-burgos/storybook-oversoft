import React, { useState } from 'react';
import { StyledSvgFilterCircle } from './FilterCircle.styles';
import colors from '../../color-palette';

export interface FilterCircleProps {
  size?: number;
  bgColor?: string;
  iconColor?: string;
  active?: boolean;
  onClick?: () => void;
}

const FilterCircle = ({ size, active, bgColor, iconColor, onClick: handleClick }: FilterCircleProps) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <StyledSvgFilterCircle
      width={size ? size : 30}
      viewBox="0 0 30 30"
      data-testid="FilterCircle"
      fill="none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <circle
        cx="15"
        cy="15"
        r="15"
        data-testid="CircleFilterCircle"
        fill={active ? colors.primary.red : bgColor ? bgColor : hover ? colors.primary.red : colors.neutrals.white}
      />
      <path
        d="M16.112 22.5975C16.0013 22.5975 15.8936 22.5616 15.8051 22.4951L13.7589 20.9606C13.6954 20.9129 13.6439 20.8511 13.6083 20.7801C13.5728 20.7091 13.5543 20.6308 13.5543 20.5513V17.6766L9.96546 13.6391C9.71058 13.3515 9.54416 12.9965 9.4862 12.6167C9.42825 12.2368 9.48122 11.8483 9.63876 11.4978C9.7963 11.1474 10.0517 10.8499 10.3743 10.6411C10.6968 10.4322 11.0728 10.321 11.4571 10.3208H18.7208C19.105 10.3213 19.4809 10.4326 19.8033 10.6416C20.1257 10.8505 20.381 11.1481 20.5384 11.4986C20.6957 11.8491 20.7485 12.2376 20.6904 12.6174C20.6323 12.9972 20.4658 13.3522 20.2108 13.6396L16.6235 17.6766V22.0859C16.6235 22.2216 16.5696 22.3517 16.4737 22.4476C16.3777 22.5436 16.2476 22.5975 16.112 22.5975Z"
        data-testid="PathFilterCircle"
        fill={
          active ? colors.neutrals.white : iconColor ? iconColor : hover ? colors.neutrals.white : colors.neutrals.black
        }
      />
    </StyledSvgFilterCircle>
  );
};

export default FilterCircle;
