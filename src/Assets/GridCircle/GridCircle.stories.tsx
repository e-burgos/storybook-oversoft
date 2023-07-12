import { Meta, StoryObj } from '@storybook/react';
import GridCircle from './GridCircle';

const meta: Meta = {
  title: 'Assets/Actions/GridCircle',
  component: GridCircle,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    bgColor: { control: { type: 'color' } },
    iconColor: { control: { type: 'color' } },
    active: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof GridCircle>;
export default meta;

type Story = StoryObj<typeof meta>;

export const GridCircleStory: Story = {
  args: {
    size: 45,
    onClick: () => alert('clicked'),
  },
};
