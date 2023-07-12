import styled, { css } from 'styled-components';
import colors from '../../color-palette';
import { FontFamilyType } from '../../types';

interface StyledParagraphProps {
  $fontSize?: string;
  $fontFamily?: FontFamilyType;
  $fontColor?: string;
  $fontHoverColor?: string;
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
  font-family: ${(props) => props.$fontFamily || 'Rubik-Regular'};
  font-size: ${(props) => props.$fontSize || '12px'};
  color: ${(props) => props.$fontColor || colors.neutrals.black};
  ${(props) =>
    props.$fontHoverColor &&
    css`
      &:hover,
      &:focus {
        color: ${props.$fontHoverColor};
      }
    `}
`;
