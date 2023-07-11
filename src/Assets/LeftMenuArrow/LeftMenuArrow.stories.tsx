import { Meta, StoryObj } from '@storybook/react';
import LeftMenuArrow from './LeftMenuArrow';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/LeftMenuArrow',
  component: LeftMenuArrow,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof LeftMenuArrow>;
export default meta;

type Story = StoryObj<typeof meta>;

export const LeftMenuArrowStory: Story = {
  args: {
    size: 45,
    color: colors.primary.red,
  },
};
