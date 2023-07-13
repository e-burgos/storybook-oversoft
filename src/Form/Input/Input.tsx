import React, { HTMLInputTypeAttribute, useState } from 'react';
import { InputStyled, InputWrapperStyled, LabelStyled } from './Input.styles';
import { FontFamilyType } from '../../types';

interface InputComponentProps {
  type?: HTMLInputTypeAttribute;
  label?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  width?: string;
  colorText?: string;
  colorTextLabel?: string;
  fontText?: FontFamilyType;
  fontTextLabel?: FontFamilyType;
  textSize?: string;
  textSizeLabel?: string;
  colorFocus?: string;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}

const InputComponent = ({
  type,
  label,
  disabled,
  placeholder,
  width,
  value,
  textSize,
  textSizeLabel,
  colorText,
  colorTextLabel,
  fontText,
  fontTextLabel,
  colorFocus,
  onKeyDown,
}: InputComponentProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputFocus, setInputFocus] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputOnFocus = () => {
    setInputFocus(true);
  };

  const handleInputOnBlur = () => {
    setInputFocus(false);
  };

  return (
    <InputWrapperStyled>
      <LabelStyled
        $textSize={textSizeLabel}
        $colorText={colorTextLabel}
        $disabled={!!disabled}
        $fontText={fontTextLabel}
      >
        {label}
      </LabelStyled>
      <InputStyled
        data-testid={label}
        type={type}
        value={inputValue}
        disabled={!!disabled}
        onChange={handleInputChange}
        onFocus={handleInputOnFocus}
        $isFocused={inputFocus}
        onBlur={handleInputOnBlur}
        onKeyDown={onKeyDown}
        width={width}
        $textSize={textSize}
        $fontText={fontText}
        $colorText={colorText}
        $colorFocus={colorFocus}
        placeholder={placeholder}
      />
    </InputWrapperStyled>
  );
};

export default InputComponent;
