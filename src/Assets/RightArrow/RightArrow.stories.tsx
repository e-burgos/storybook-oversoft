import { Meta, StoryObj } from '@storybook/react';
import RightArrow from './RightArrow';

const meta: Meta = {
  title: 'Assets/RightArrow',
  component: RightArrow,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
  },
} satisfies Meta<typeof RightArrow>;
export default meta;

type Story = StoryObj<typeof meta>;

export const RightArrowStory: Story = {
  args: {
    size: 45,
  },
};
