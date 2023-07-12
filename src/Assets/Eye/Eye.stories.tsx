import { Meta, StoryObj } from '@storybook/react';
import Eye from './Eye';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Tables/Eye',
  component: Eye,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Eye>;
export default meta;

type Story = StoryObj<typeof meta>;

export const EyeStory: Story = {
  args: {
    size: 45,
    color: colors.primary.red,
  },
};
