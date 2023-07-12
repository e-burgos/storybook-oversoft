import React, { useState } from 'react';
import { StyledSvgSettingCircle } from './SettingCircle.styles';
import colors from '../../color-palette';

export interface SettingCircleProps {
  size?: number;
  bgColor?: string;
  iconColor?: string;
  active?: boolean;
  onClick?: () => void;
}

const SettingCircle = ({ size, active, bgColor, iconColor, onClick: handleClick }: SettingCircleProps) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <StyledSvgSettingCircle
      width={size ? size : 30}
      viewBox="0 0 30 30"
      data-testid="SettingCircle"
      fill="none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <circle
        cx="15"
        cy="15"
        r="15"
        data-testid="CircleSettingCircle"
        fill={active ? colors.primary.red : bgColor ? bgColor : hover ? colors.primary.red : colors.neutrals.white}
      />
      <g clipPath="url(#clip0_30_760)">
        <path
          data-testid="PathSettingCircle"
          d="M8.52581 18.6074C9.00832 19.4449 10.0784 19.7326 10.9158 19.2501C10.9164 19.2497 10.9169 19.2494 10.9175 19.2491L11.1771 19.0991C11.6671 19.5184 12.2303 19.8435 12.8384 20.0581V20.3574C12.8384 21.3239 13.6219 22.1074 14.5884 22.1074C15.5549 22.1074 16.3384 21.3239 16.3384 20.3574V20.0582C16.9466 19.8432 17.5098 19.5177 17.9997 19.098L18.2605 19.2485C19.0981 19.7317 20.1689 19.4445 20.6521 18.6068C21.1354 17.7692 20.8481 16.6984 20.0105 16.2151L19.7515 16.0658C19.8681 15.4314 19.8681 14.7811 19.7515 14.1466L20.0105 13.9973C20.8481 13.5141 21.1354 12.4433 20.6521 11.6056C20.1689 10.768 19.0981 10.4807 18.2605 10.964L18.0009 11.1139C17.5104 10.6952 16.9468 10.3707 16.3384 10.1567V9.85742C16.3384 8.89093 15.5549 8.10742 14.5884 8.10742C13.6219 8.10742 12.8384 8.89093 12.8384 9.85742V10.1567C12.2302 10.3717 11.667 10.6972 11.1771 11.1168L10.9163 10.9658C10.0787 10.4825 9.00788 10.7698 8.52464 11.6074C8.04139 12.445 8.32866 13.5159 9.16631 13.9991L9.42531 14.1484C9.30872 14.7828 9.30872 15.4332 9.42531 16.0676L9.16631 16.2169C8.33099 16.7015 8.04464 17.7702 8.52581 18.6074ZM14.5884 12.7741C15.877 12.7741 16.9217 13.8188 16.9217 15.1074C16.9217 16.3961 15.877 17.4407 14.5884 17.4407C13.2997 17.4407 12.2551 16.3961 12.2551 15.1074C12.2551 13.8188 13.2997 12.7741 14.5884 12.7741Z"
          fill={
            active
              ? colors.neutrals.white
              : iconColor
              ? iconColor
              : hover
              ? colors.neutrals.white
              : colors.neutrals.black
          }
        />
      </g>
      <defs>
        <clipPath id="clip0_30_760">
          <rect width="14" height="14" fill="white" transform="translate(7.58838 8.10742)" />
        </clipPath>
      </defs>
    </StyledSvgSettingCircle>
  );
};

export default SettingCircle;
