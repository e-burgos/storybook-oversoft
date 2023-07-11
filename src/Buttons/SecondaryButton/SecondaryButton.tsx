import React from 'react';
import BaseButton from '../BaseButton';
import colors from '../../color-palette';

interface SecondaryButtonProps {
  disabled?: boolean;
  loading?: boolean;
  label: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  'aria-label'?: string;
}

const SecondaryButton = ({
  'aria-label': ariaLabel,
  disabled,
  label,
  loading,
  width,
  height,
  onClick: handleClick,
}: SecondaryButtonProps) => {
  return (
    <BaseButton
      label={label}
      loading={loading}
      disabled={disabled}
      width={width}
      height={height}
      onClick={handleClick}
      aria-label={ariaLabel}
      backgroundColor={colors.neutrals.white}
      colorText={colors.primary.red}
      fontText="Rubik-Regular"
      textSize="12px"
      borderRadius="8px"
      padding="8px 16px 8px 16px"
      spinnerColor={colors.primary.red}
      borderColor={colors.primary.red}
      hoverBorderColor={colors.primary.redLight}
    />
  );
};

export default SecondaryButton;
