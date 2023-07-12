import { Meta, StoryObj } from '@storybook/react';
import SettingCircle from './SettingCircle';

const meta: Meta = {
  title: 'Assets/Actions/SettingCircle',
  component: SettingCircle,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    bgColor: { control: { type: 'color' } },
    iconColor: { control: { type: 'color' } },
    active: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof SettingCircle>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SettingCircleStory: Story = {
  args: {
    size: 45,
    onClick: () => alert('clicked'),
  },
};
