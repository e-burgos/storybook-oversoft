import { Meta, StoryObj } from '@storybook/react';
import CloseButton from './CloseButton';

const meta: Meta = {
  title: 'Buttons/CloseButton',
  component: CloseButton,
  tags: ['autodocs'],
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClick: () => alert('chick me!'),
  },
};
