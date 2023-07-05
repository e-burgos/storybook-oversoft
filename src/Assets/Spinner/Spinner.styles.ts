import styled from 'styled-components';
import IconAttrs from '../utils/IconAttrs.styles';

interface StyledCircleProps {
  color?: string;
}
interface StyledSpinnerProps {
  margin?: string;
}

export const StyledSpinner = styled(IconAttrs)<StyledSpinnerProps>`
  margin: ${(props) => props.margin};
  animation: rotate 2s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export const StyledCircle = styled.circle<StyledCircleProps>`
  stroke: ${(props) => props.color};
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
`;
