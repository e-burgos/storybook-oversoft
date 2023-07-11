import React, { FC, HTMLInputTypeAttribute } from 'react';
import { InputStyled, InputWrapperStyled, LabelStyled } from './Input.styles';

interface InputComponentProps {
  type: HTMLInputTypeAttribute;
  label: string;
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const InputComponent: FC<InputComponentProps> = (props) => {
  const onChangeHandler = (value: string) => {
    !props.disabled && props.onChange(value);
  };

  return (
    <InputWrapperStyled>
      <LabelStyled disabled={!!props.disabled}>{props.label}</LabelStyled>
      <InputStyled
        data-testid={props.label}
        type={props.type}
        value={props.value}
        disabled={!!props.disabled}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(event.target.value)}
      />
    </InputWrapperStyled>
  );
};

export default InputComponent;
