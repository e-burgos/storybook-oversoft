import { Meta, StoryObj } from '@storybook/react';
import MenuCircle from './MenuCircle';

const meta: Meta = {
  title: 'Assets/Actions/MenuCircle',
  component: MenuCircle,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    bgColor: { control: { type: 'color' } },
    iconColor: { control: { type: 'color' } },
    active: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof MenuCircle>;
export default meta;

type Story = StoryObj<typeof meta>;

export const MenuCircleStory: Story = {
  args: {
    size: 45,
    onClick: () => alert('clicked'),
  },
};
