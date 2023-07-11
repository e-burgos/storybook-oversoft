import React from 'react';
import BaseButton from '../BaseButton';
import colors from '../../color-palette';

interface PrimaryButtonProps {
  disabled?: boolean;
  loading?: boolean;
  label: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  'aria-label'?: string;
}

const PrimaryButton = ({
  'aria-label': ariaLabel,
  disabled,
  label,
  loading,
  width,
  height,
  onClick: handleClick,
}: PrimaryButtonProps) => {
  return (
    <BaseButton
      label={label}
      loading={loading}
      disabled={disabled}
      width={width}
      height={height}
      onClick={handleClick}
      aria-label={ariaLabel}
      backgroundColor={colors.primary.red}
      colorText={colors.neutrals.white}
      fontText="Rubik-Regular"
      textSize="12px"
      borderRadius="8px"
      padding="8px 16px 8px 16px"
      spinnerColor={colors.neutrals.white}
    />
  );
};

export default PrimaryButton;
