import { Meta, StoryObj } from '@storybook/react';
import DownMenuArrow from './DownMenuArrow';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/DownMenuArrow',
  component: DownMenuArrow,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof DownMenuArrow>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DownMenuArrowStory: Story = {
  args: {
    size: 45,
    color: colors.primary.red,
  },
};
