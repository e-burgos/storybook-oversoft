import React, { FC } from 'react';
import { Label, SliderRound, Switch, Wrapper } from './Toggle.styles';
import { FontFamilyType } from '../../types';
import { primary, neutrals } from '../../color-palette';
export interface IToggleComponentProps {
  label?: string;
  isToggled: boolean;
  onClick: () => void;
  fontFamily?: FontFamilyType;
  fontSize?: string;
  togglePrimaryColor?: string;
  toggleNeutralColor?: string;
  toggleGuidePrimaryColor?: string;
  toggleGuideNeutralColor?: string;
  disabled?: boolean;
}

const ToggleComponent: FC<IToggleComponentProps> = ({
  fontFamily = 'Rubik-Bold',
  fontSize = '12px',
  label = '',
  isToggled,
  onClick,
  togglePrimaryColor = primary.red,
  toggleNeutralColor = neutrals.white,
  toggleGuidePrimaryColor = primary.redLight,
  toggleGuideNeutralColor = neutrals.greyThree,
  disabled = false,
}) => {
  const onClickHandler = () => !disabled && onClick();

  return (
    <Wrapper $disabled={disabled}>
      <Label fontFamily={fontFamily} fontSize={fontSize}>
        {label}
      </Label>
      <Switch
        data-testid={label}
        onClick={onClickHandler}
        $isToggled={isToggled}
        $toggleGuidePrimaryColor={toggleGuidePrimaryColor}
        $toggleGuideNeutralColor={toggleGuideNeutralColor}
      >
        <SliderRound
          $isToggled={isToggled}
          $togglePrimaryColor={togglePrimaryColor}
          $toggleNeutralColor={toggleNeutralColor}
        />
      </Switch>
    </Wrapper>
  );
};

export default ToggleComponent;
