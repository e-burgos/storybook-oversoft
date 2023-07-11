import { Meta, StoryObj } from '@storybook/react';
import Logout from './Logout';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Logout',
  component: Logout,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Logout>;
export default meta;

type Story = StoryObj<typeof meta>;

export const LogoutStory: Story = {
  args: {
    size: 45,
    color: colors.primary.red,
  },
};
