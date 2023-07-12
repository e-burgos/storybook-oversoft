import { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Actions/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 26, max: 100 } },
    iconColor: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Spinner>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SpinnerStory: Story = {
  args: {
    size: 45,
    iconColor: colors.primary.red,
  },
};

export const SpinnerSmallStory: Story = {
  args: {
    size: 20,
    iconColor: colors.secondary.blue,
  },
};
