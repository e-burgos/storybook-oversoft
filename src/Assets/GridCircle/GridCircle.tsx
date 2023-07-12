import React, { useState } from 'react';
import { StyledSvgGridCircle } from './GridCircle.styles';
import colors from '../../color-palette';

export interface GridCircleProps {
  size?: number;
  bgColor?: string;
  iconColor?: string;
  active?: boolean;
  onClick?: () => void;
}

const GridCircle = ({ size, active, bgColor, iconColor, onClick: handleClick }: GridCircleProps) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <StyledSvgGridCircle
      width={size ? size : 30}
      height={size ? size : 30}
      viewBox="0 0 30 30"
      data-testid="GridCircle"
      fill="none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <circle
        cx="15"
        cy="15"
        r="15"
        data-testid="CircleGridCircle"
        fill={active ? colors.primary.red : bgColor ? bgColor : hover ? colors.primary.red : colors.neutrals.white}
      />

      <g clipPath="url(#clip0_30_758)">
        <path
          d="M12.3384 18.209H9.08838V19.959C9.08838 20.3568 9.24641 20.7383 9.52772 21.0196C9.80902 21.3009 10.1906 21.459 10.5884 21.459H12.3384V18.209Z"
          data-testid="PathGridCircle"
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
        <path
          d="M21.0884 18.209H17.8384V21.459H19.5884C19.9862 21.459 20.3677 21.3009 20.649 21.0196C20.9303 20.7383 21.0884 20.3568 21.0884 19.959V18.209Z"
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
        <path
          d="M12.3384 13.834H9.08838V17.084H12.3384V13.834Z"
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
        <path
          d="M21.0884 13.834H17.8384V17.084H21.0884V13.834Z"
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
        <path
          d="M12.3384 9.45898H10.5884C10.1906 9.45898 9.80902 9.61702 9.52772 9.89832C9.24641 10.1796 9.08838 10.5612 9.08838 10.959V12.709H12.3384V9.45898Z"
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
        <path
          d="M16.7134 18.209H13.4634V21.459H16.7134V18.209Z"
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
        <path
          d="M16.7134 13.834H13.4634V17.084H16.7134V13.834Z"
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
        <path
          d="M16.7134 9.45898H13.4634V12.709H16.7134V9.45898Z"
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
        <path
          d="M19.5884 9.45898H17.8384V12.709H21.0884V10.959C21.0884 10.5612 20.9303 10.1796 20.649 9.89832C20.3677 9.61702 19.9862 9.45898 19.5884 9.45898Z"
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
        <clipPath id="clip0_30_758">
          <rect width="12" height="12" fill="white" transform="translate(9.08838 9.45898)" />
        </clipPath>
      </defs>
    </StyledSvgGridCircle>
  );
};

export default GridCircle;
