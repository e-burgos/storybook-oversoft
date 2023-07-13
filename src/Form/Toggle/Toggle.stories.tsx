import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ToggleComponent, { IToggleComponentProps } from './Toggle.component';
import { neutrals, primary } from '../../color-palette';

const meta: Meta = {
  title: 'Form/Toggle',
  component: ToggleComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Toggle: Story = {
  render: (args) => (
    <ToggleComponent
      fontFamily={args.fontFamily}
      fontSize={args.fontSize}
      label={args.label}
      isToggled={args.isToggled}
      togglePrimaryColor={args.togglePrimaryColor}
      toggleNeutralColor={args.toggleNeutralColor}
      toggleGuidePrimaryColor={args.toggleGuidePrimaryColor}
      toggleGuideNeutralColor={args.toggleGuideNeutralColor}
      disabled={args.disabled}
      onClick={args.onClick}
    />
  ),
  args: {
    fontFamily: 'Rubik-Bold',
    fontSize: '12px',
    label: 'This is the Toggle',
    isToggled: true,
    togglePrimaryColor: primary.red,
    toggleNeutralColor: neutrals.white,
    toggleGuidePrimaryColor: primary.redLight,
    toggleGuideNeutralColor: neutrals.greyThree,
    disabled: false,
    onClick: () => alert('click !!!'),
  } as IToggleComponentProps,
};
