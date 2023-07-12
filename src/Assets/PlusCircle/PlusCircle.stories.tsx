import { Meta, StoryObj } from '@storybook/react';
import PlusCircle from './PlusCircle';

const meta: Meta = {
  title: 'Assets/Actions/PlusCircle',
  component: PlusCircle,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    bgColor: { control: { type: 'color' } },
    iconColor: { control: { type: 'color' } },
    active: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof PlusCircle>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PlusCircleStory: Story = {
  args: {
    size: 45,
    onClick: () => alert('clicked'),
  },
};
