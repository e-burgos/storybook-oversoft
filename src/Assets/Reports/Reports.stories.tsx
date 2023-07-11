import { Meta, StoryObj } from '@storybook/react';
import Reports from './Reports';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Reports',
  component: Reports,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Reports>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ReportsStory: Story = {
  args: {
    size: 45,
    color: colors.primary.red,
  },
};
