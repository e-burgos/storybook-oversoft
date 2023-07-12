import { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta: Meta = {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    level: { options: [1, 2, 3], control: { type: 'radio' } },
    children: { control: { type: 'text' } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadingOneStory: Story = {
  args: {
    level: 1,
    children: 'Hello There',
  },
};

export const HeadingTwoStory: Story = {
  args: {
    level: 2,
    children: 'Hello There',
  },
};

export const HeadingThreeStory: Story = {
  args: {
    level: 3,
    children: 'Hello There',
  },
};
