import { Meta, StoryObj } from '@storybook/react';
import Bell from './Bell';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Actions/Bell',
  component: Bell,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
    counter: { control: { type: 'number', min: 0, max: 99 } },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Bell>;
export default meta;

type Story = StoryObj<typeof meta>;

export const BellStory: Story = {
  args: {
    size: 45,
    color: colors.neutrals.black,
    counter: 0,
    onClick: () => alert('clicked'),
  },
};
