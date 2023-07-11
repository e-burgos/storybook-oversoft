import { Meta, StoryObj } from '@storybook/react';
import BaseButton from './BaseButton';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Buttons/BaseButton',
  component: BaseButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    hoverBgColor: { control: 'color' },
    colorText: { control: 'color' },
    borderColor: { control: 'color' },
    hoverColorText: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BaseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomButtonStory: Story = {
  args: {
    backgroundColor: colors.primary.red,
    hoverBgColor: colors.primary.redGradient,
    disableBgColor: colors.primary.redLight,
    colorText: colors.neutrals.white,
    spinnerColor: colors.neutrals.white,
    label: 'Custom Button',
    onClick: () => alert('chick me!'),
  },
};
