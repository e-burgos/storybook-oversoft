import { Meta, StoryObj } from '@storybook/react';
import Paragraph from './Paragraph';

const meta: Meta = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    children: { control: { type: 'text' } },
    fontColor: { control: { type: 'color' } },
    fontSize: { control: { type: 'text' } },
    fontHoverColor: { control: { type: 'color' } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ParagraphStory: Story = {
  args: {
    children: 'Hello There',
    fontSize: '30px',
  },
};
