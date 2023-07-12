import { Meta, StoryObj } from '@storybook/react';
import CopyCircle from './CopyCircle';

const meta: Meta = {
  title: 'Assets/Actions/CopyCircle',
  component: CopyCircle,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    bgColor: { control: { type: 'color' } },
    iconColor: { control: { type: 'color' } },
    active: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof CopyCircle>;
export default meta;

type Story = StoryObj<typeof meta>;

export const CopyCircleStory: Story = {
  args: {
    size: 45,
    onClick: () => alert('clicked'),
  },
};
