import { Meta, StoryObj } from '@storybook/react';
import SecondaryButton from './SecondaryButton';

const meta: Meta = {
  title: 'Buttons/SecondaryButton',
  component: SecondaryButton,
  argTypes: {
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SecondaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomButtonStory: Story = {
  args: {
    label: 'Secondary Button',
    onClick: () => alert('chick me!'),
  },
};
