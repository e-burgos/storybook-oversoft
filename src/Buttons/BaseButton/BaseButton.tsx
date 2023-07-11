import React from 'react';
import Spinner from '../../Assets/Spinner';
import { Button, LoadingTitle, Title } from './BaseButton.styles';
import { IFontFamily } from '../../types';

export interface BaseButtonProps {
  disabled?: boolean;
  loading?: boolean;
  backgroundColor?: string;
  hoverBgColor?: string;
  colorText?: string;
  hoverColorText?: string;
  textSize?: string;
  fontText?: IFontFamily;
  border?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  borderRadius?: string;
  padding?: string;
  label: string;
  width?: string;
  height?: string;
  spinnerColor?: string;
  onClick?: () => void;
  'aria-label'?: string;
}

const BaseButton = ({
  disabled,
  loading,
  backgroundColor,
  hoverBgColor,
  colorText,
  fontText,
  hoverColorText,
  textSize,
  label,
  padding,
  borderRadius,
  borderColor,
  border,
  hoverBorderColor,
  onClick,
  width,
  height,
  spinnerColor,
  'aria-label': ariaLabel,
}: BaseButtonProps) => {
  return (
    <Button
      role="button"
      $backgroundColor={disabled ? `${backgroundColor}30` : backgroundColor}
      $hoverBgColor={disabled ? `${backgroundColor}30` : hoverBgColor}
      $borderColor={borderColor}
      $hoverBorderColor={hoverBorderColor}
      disabled={disabled}
      $borderRadius={borderRadius}
      border={border}
      padding={padding}
      $loading={loading}
      onClick={onClick}
      width={width}
      height={height}
      aria-label={ariaLabel}
    >
      {loading ? (
        <LoadingTitle data-testid="contentinfo">
          <Spinner iconColor={spinnerColor} margin="0 5px 0 0" />
          <Title
            data-testid="heading"
            $colorText={colorText}
            $textSize={textSize}
            $hoverColorText={hoverColorText}
            $fontText={fontText}
          >
            {label}
          </Title>
        </LoadingTitle>
      ) : (
        <Title
          data-testid="heading"
          $colorText={colorText}
          $textSize={textSize}
          $hoverColorText={hoverColorText}
          $fontText={fontText}
        >
          {label}
        </Title>
      )}
    </Button>
  );
};

export default BaseButton;
