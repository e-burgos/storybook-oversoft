import styled from 'styled-components';
import { neutrals } from '../../color-palette';

export const StyledHeadingOne = styled.h1`
  font-family: 'Rubik-Medium';
  font-size: 32px;
  letter-spacing: 0.02em;
  font-weight: 700;
  color: ${() => neutrals.black};
`;

export const StyledHeadingTwo = styled.h2`
  font-family: 'Rubik-Medium';
  font-size: 26px;
  letter-spacing: 0.02em;
  font-weight: 700;
  color: ${() => neutrals.black};
`;

export const StyledHeadingThree = styled.h3`
  font-family: 'Rubik-Medium';
  font-size: 20px;
  letter-spacing: 0.02em;
  font-weight: 400;
  color: ${() => neutrals.black};
`;
