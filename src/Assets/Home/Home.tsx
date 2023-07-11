import React from 'react';
import { StyledSvgHome } from './Home.styles';
import colors from '../../color-palette';

export interface HomeProps {
  size?: number;
  color?: string;
}

const Home = ({ size, color }: HomeProps) => {
  return (
    <StyledSvgHome width={size ? size : 15} viewBox="0 0 15 14" data-testid="Home" fill="none">
      <g clipPath="url(#clip0_146_748)">
        <path
          d="M13.7131 3.33894V1.16661C13.7131 0.844606 13.4523 0.583273 13.1298 0.583273C12.8072 0.583273 12.5464 0.844606 12.5464 1.16661V2.54677L9.51134 0.49869C8.52026 -0.169811 7.23926 -0.169811 6.24818 0.49869L2.16484 3.25436C1.36043 3.79744 0.879761 4.70102 0.879761 5.67227V11.0833C0.879761 12.6915 2.18818 13.9999 3.79643 13.9999H4.96309C5.28568 13.9999 5.54643 13.7386 5.54643 13.4166V8.16661C5.54643 7.84519 5.80776 7.58327 6.12976 7.58327H9.62976C9.95176 7.58327 10.2131 7.84519 10.2131 8.16661V13.4166C10.2131 13.7386 10.4738 13.9999 10.7964 13.9999H11.9631C13.5713 13.9999 14.8798 12.6915 14.8798 11.0833V5.67227C14.8798 4.75002 14.4458 3.88844 13.7131 3.33894Z"
          fill={color || colors.neutrals.greyLight}
        />
      </g>
      <defs>
        <clipPath id="clip0_146_748">
          <rect width="14" height="14" fill="white" transform="translate(0.879761)" />
        </clipPath>
      </defs>
    </StyledSvgHome>
  );
};

export default Home;
