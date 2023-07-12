import styled from 'styled-components';
import colors from '../../color-palette';
import { FontFamilyType } from '../../types';

interface TitleProps {
  $colorText?: string;
  $hoverColorText?: string;
  $textSize?: string;
  $fontText?: FontFamilyType;
}

interface ButtonProps {
  $backgroundColor?: string;
  width?: string;
  height?: string;
  $borderRadius?: string;
  disabled?: boolean;
  $loading?: boolean;
  $hoverBgColor?: string;
  $borderColor?: string;
  border?: string;
  $hoverBorderColor?: string;
  padding?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : '45px')};
  padding: ${(props) => props.padding || '18px 12px'};
  border: ${(props) => props.border};
  border-color: ${(props) => props.$borderColor};
  border-style: ${(props) => (props.$borderColor ? 'solid' : 'none')};
  border-radius: ${(props) => props.$borderRadius || '8px'};
  background: ${(props) => props.$backgroundColor || colors.neutrals.white};
  cursor: ${(props) => (props.disabled || props.$loading ? 'not-allowed' : 'pointer')};
  &:hover {
    background: ${(props) => props.$hoverBgColor};
    border-style: ${(props) => (props.$hoverBorderColor ? 'solid' : 'none')};
    border-color: ${(props) => props.$hoverBorderColor};
  }
`;

export const Title = styled.span<TitleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: ${(props) => (props.$fontText ? props.$fontText : 'Rubik-Regular')};
  font-size: ${(props) => (props.$textSize ? props.$textSize : '12px')};
  text-align: center;
  color: ${(props) => props.$colorText};
  &:hover {
    color: ${(props) => props.$hoverColorText};
  }
`;

export const LoadingTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
