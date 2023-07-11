import { Meta, StoryObj } from '@storybook/react';
import DMS from './DMS';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/DMS',
  component: DMS,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof DMS>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DMSStory: Story = {
  args: {
    size: 45,
    color: colors.primary.red,
  },
};
