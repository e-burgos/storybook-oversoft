import React, { FC, HTMLInputTypeAttribute } from 'react';
import { InputStyled, InputWrapperStyled, LabelStyled } from './Input.styled';

interface InputComponentProps {
  type: HTMLInputTypeAttribute;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputComponent: FC<InputComponentProps> = (props) => {
  return (
    <InputWrapperStyled>
      <LabelStyled>{props.label}</LabelStyled>
      <InputStyled
        data-testid={props.label}
        type={props.type}
        value={props.value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value)}
      />
    </InputWrapperStyled>
  );
};

export default InputComponent;
