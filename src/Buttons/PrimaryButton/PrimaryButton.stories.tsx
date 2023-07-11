import { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from './PrimaryButton';

const meta: Meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  argTypes: {
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PrimaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomButtonStory: Story = {
  args: {
    label: 'Primary Button',
    onClick: () => alert('chick me!'),
  },
};
