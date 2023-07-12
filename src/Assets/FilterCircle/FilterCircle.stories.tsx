import { Meta, StoryObj } from '@storybook/react';
import FilterCircle from './FilterCircle';

const meta: Meta = {
  title: 'Assets/Actions/FilterCircle',
  component: FilterCircle,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    bgColor: { control: { type: 'color' } },
    iconColor: { control: { type: 'color' } },
    active: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof FilterCircle>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FilterCircleStory: Story = {
  args: {
    size: 45,
    onClick: () => alert('clicked'),
  },
};
