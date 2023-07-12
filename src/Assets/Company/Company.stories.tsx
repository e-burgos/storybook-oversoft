import { Meta, StoryObj } from '@storybook/react';
import Company from './Company';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Menu/Company',
  component: Company,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Company>;
export default meta;

type Story = StoryObj<typeof meta>;

export const CompanyStory: Story = {
  args: {
    size: 45,
    color: colors.primary.red,
  },
};
