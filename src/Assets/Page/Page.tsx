import React from 'react';
import { StyledSvgPage } from './Page.styles';
import colors from '../../color-palette';

export interface PageProps {
  size?: number;
  color?: string;
}

const Page = ({ size, color }: PageProps) => {
  return (
    <StyledSvgPage width={size ? size : 13} viewBox="0 0 13 12" data-testid="Page" fill="none">
      <g clipPath="url(#clip0_20_710)">
        <path
          d="M10 -0.000244141H3C1.62 -0.000244141 0.5 1.11976 0.5 2.49976V9.49976C0.5 10.8798 1.62 11.9998 3 11.9998H10C11.38 11.9998 12.5 10.8798 12.5 9.49976V2.49976C12.5 1.11976 11.38 -0.000244141 10 -0.000244141ZM11.5 9.49976C11.5 10.3248 10.825 10.9998 10 10.9998H3C2.175 10.9998 1.5 10.3248 1.5 9.49976V2.49976C1.5 1.67476 2.175 0.999756 3 0.999756H10C10.825 0.999756 11.5 1.67476 11.5 2.49976V9.49976ZM3 4.99976C3 4.72476 3.225 4.49976 3.5 4.49976H8C8.275 4.49976 8.5 4.72476 8.5 4.99976C8.5 5.27476 8.275 5.49976 8 5.49976H3.5C3.225 5.49976 3 5.27476 3 4.99976ZM3 2.99976C3 2.72476 3.225 2.49976 3.5 2.49976H6.5C6.775 2.49976 7 2.72476 7 2.99976C7 3.27476 6.775 3.49976 6.5 3.49976H3.5C3.225 3.49976 3 3.27476 3 2.99976ZM10 6.99976C10 7.27476 9.775 7.49976 9.5 7.49976H3.5C3.225 7.49976 3 7.27476 3 6.99976C3 6.72476 3.225 6.49976 3.5 6.49976H9.5C9.775 6.49976 10 6.72476 10 6.99976ZM5.5 8.99976C5.5 9.27476 5.275 9.49976 5 9.49976H3.5C3.225 9.49976 3 9.27476 3 8.99976C3 8.72476 3.225 8.49976 3.5 8.49976H5C5.275 8.49976 5.5 8.72476 5.5 8.99976Z"
          fill={color || colors.neutrals.greyLight}
        />
      </g>
      <defs>
        <clipPath id="clip0_20_710">
          <rect
            width="12"
            height="12"
            fill={color || colors.neutrals.greyLight}
            transform="translate(0.5 -0.000244141)"
          />
        </clipPath>
      </defs>
    </StyledSvgPage>
  );
};

export default Page;
