import { Meta, StoryObj } from '@storybook/react';
import LeftArrow from './LeftArrow';

const meta: Meta = {
  title: 'Assets/Arrows/LeftArrow',
  component: LeftArrow,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
  },
} satisfies Meta<typeof LeftArrow>;
export default meta;

type Story = StoryObj<typeof meta>;

export const LeftArrowStory: Story = {
  args: {
    size: 45,
  },
};
