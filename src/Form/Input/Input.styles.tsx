import styled from 'styled-components';
import { neutrals } from '../../color-palette';

export const InputWrapperStyled = styled.div`
  width: 100%;
`;

export const LabelStyled = styled.label<{ disabled: boolean }>`
  width: 100%;
  color: ${neutrals.greyOne};
  leading-trim: both;
  text-edge: cap;
  font-family: Rubik-Black;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  opacity: ${(props) => (props.disabled ? '.3' : '1')};
`;

export const InputStyled = styled.input`
  color: ${neutrals.greyTwo};
  display: flex;
  height: 20px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  padding: 5px;
  border-radius: 8px;
  font-family: Rubik-Regular;
  border: 1px solid var(--oversoft-grey-scale-stroke-grey, rgba(198, 196, 196, 0.53));
  outline: none;
  opacity: ${(props) => (props.disabled ? '.3' : '1')};
`;
