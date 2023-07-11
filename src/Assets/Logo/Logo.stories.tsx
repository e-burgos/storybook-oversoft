import { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
    secondaryColor: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Logo>;
export default meta;

type Story = StoryObj<typeof meta>;

export const LogoStory: Story = {
  args: {
    size: 45,
    color: colors.primary.red,
  },
};
