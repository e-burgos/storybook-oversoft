import { Meta, StoryObj } from '@storybook/react';
import Edit from './Edit';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Tables/Edit',
  component: Edit,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Edit>;
export default meta;

type Story = StoryObj<typeof meta>;

export const EditStory: Story = {
  args: {
    size: 45,
    color: colors.primary.red,
  },
};
