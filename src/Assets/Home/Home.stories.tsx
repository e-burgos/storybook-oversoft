import { Meta, StoryObj } from '@storybook/react';
import Home from './Home';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Home',
  component: Home,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Home>;
export default meta;

type Story = StoryObj<typeof meta>;

export const HomeStory: Story = {
  args: {
    size: 45,
    color: colors.primary.red,
  },
};
