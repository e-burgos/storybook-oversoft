import styled from 'styled-components';
import { neutrals } from '../../color-palette';
import { FontFamilyType } from '../../types';

interface InputProps {
  $width?: string;
  $disabled?: boolean;
  $textSize?: string;
  $fontText?: FontFamilyType;
  $colorText?: string;
  $colorFocus?: string;
}

interface InputLabelProps {
  $disabled?: boolean;
  $textSize?: string;
  $fontText?: string;
  $colorText?: string;
}

export const InputWrapperStyled = styled.div`
  width: 100%;
`;

export const LabelStyled = styled.label<InputLabelProps>`
  width: 100%;
  color: ${(props) => (props.$colorText ? props.$colorText : neutrals.greyOne)};
  leading-trim: both;
  text-edge: cap;
  font-family: ${(props) => (props.$fontText ? props.$fontText : 'Rubik-SemiBold')};
  font-size: ${(props) => (props.$textSize ? props.$textSize : '14px')};
  opacity: ${(props) => (props.$disabled ? '.3' : '1')};
  font-weight: 500;
  line-height: 20px;
`;

export const InputStyled = styled.input<InputProps>`
  color: ${(props) => (props.$colorText ? props.$colorText : neutrals.greyTwo)};
  display: flex;
  justify-content: flex-end;
  height: 20px;
  width: ${(props) => (props.$width ? props.$width : '200px')};
  font-family: ${(props) => (props.$fontText ? props.$fontText : 'Rubik-Regular')};
  font-size: ${(props) => (props.$textSize ? props.$textSize : '14px')};
  opacity: ${(props) => (props.$disabled ? '.3' : '1')};
  align-items: center;
  gap: 8px;
  align-self: stretch;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${neutrals.greyBorder};
  outline: none;
  &:focus {
    transition: 0.3s;
    border: 1px solid ${(props) => (props.$colorFocus ? props.$colorFocus : neutrals.greyThree)};
  }
`;
