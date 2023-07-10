import styled from 'styled-components';

export const InputWrapperStyled = styled.div`
  width: 100%;
`;

export const LabelStyled = styled.label`
  width: 100%;
  color: var(--oversoft-grey-scale-dark-grey, #333);
  leading-trim: both;
  text-edge: cap;
  font-family: Rubik;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const InputStyled = styled.input`
  display: flex;
  height: 30px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--oversoft-grey-scale-stroke-grey, rgba(198, 196, 196, 0.53));
  outline: none;
`;
