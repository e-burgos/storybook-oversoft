import { Meta, StoryObj } from '@storybook/react';
import List from './List';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Menu/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof List>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ListStory: Story = {
  args: {
    size: 45,
    color: colors.primary.red,
  },
};
