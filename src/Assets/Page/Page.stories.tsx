import { Meta, StoryObj } from '@storybook/react';
import Page from './Page';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Page',
  component: Page,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 45, max: 100 } },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Page>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PageStory: Story = {
  args: {
    size: 45,
    color: colors.primary.red,
  },
};
