import { Meta, StoryObj } from '@storybook/react';
import Message from './Message';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
    counter: { control: { type: 'number', min: 0, max: 99 } },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Message>;
export default meta;

type Story = StoryObj<typeof meta>;

export const MessageStory: Story = {
  args: {
    size: 45,
    color: colors.neutrals.black,
    counter: 0,
    onClick: () => alert('clicked'),
  },
};
