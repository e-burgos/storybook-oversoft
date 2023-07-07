import { Meta, StoryObj } from '@storybook/react';
import Users from './Users';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Users',
  component: Users,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 26, max: 100 } },
    iconColor: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Users>;
export default meta;

type Story = StoryObj<typeof meta>;

export const UsersStory: Story = {
  args: {
    size: 26,
    iconColor: colors.neutrals.greyTwo,
  },
};
