import { Meta, StoryObj } from '@storybook/react';
import InputComponent from './Input.component';

const meta: Meta = {
  title: 'Form/Input',
  component: InputComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof InputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'text',
    label: 'label',
    value: 'value',
  },
};
