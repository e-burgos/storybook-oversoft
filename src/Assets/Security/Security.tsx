import React from 'react';
import { StyledSvgSecurity } from './Security.styles';
import colors from '../../color-palette';

export interface SecurityProps {
  size?: number;
  color?: string;
}

const Security = ({ size, color }: SecurityProps) => {
  return (
    <StyledSvgSecurity width={size ? size : 15} viewBox="0 0 15 14" data-testid="Security" fill="none">
      <path
        d="M11.9631 4.914V4.08332C11.9631 1.82818 10.1349 0 7.87977 0C5.6246 0 3.79645 1.82818 3.79645 4.08332V4.914C2.7348 5.37734 2.04798 6.42499 2.04645 7.58332V11.0833C2.04836 12.6934 3.35307 13.9981 4.9631 14H10.7964C12.4064 13.9981 13.7112 12.6934 13.7131 11.0833V7.58332C13.7116 6.42499 13.0247 5.37734 11.9631 4.914ZM8.4631 9.91668C8.4631 10.2388 8.20194 10.5 7.87977 10.5C7.55761 10.5 7.29645 10.2388 7.29645 9.91668V8.75C7.29645 8.42784 7.55761 8.16668 7.87977 8.16668C8.20194 8.16668 8.4631 8.42784 8.4631 8.75V9.91668ZM10.7964 4.66668H4.9631V4.08335C4.9631 2.47253 6.26892 1.16668 7.87977 1.16668C9.49062 1.16668 10.7964 2.4725 10.7964 4.08335V4.66668Z"
        fill={color || colors.neutrals.greyLight}
      />
    </StyledSvgSecurity>
  );
};

export default Security;
