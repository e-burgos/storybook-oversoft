import { Meta, StoryObj } from '@storybook/react';
import Security from './Security';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Security',
  component: Security,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Security>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SecurityStory: Story = {
  args: {
    size: 45,
    color: colors.primary.red,
  },
};
