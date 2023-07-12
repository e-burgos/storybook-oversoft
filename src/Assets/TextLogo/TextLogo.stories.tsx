import { Meta, StoryObj } from '@storybook/react';
import TextLogo from './TextLogo';
import colors from '../../color-palette';

const meta: Meta = {
  title: 'Assets/Logos/TextLogo',
  component: TextLogo,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof TextLogo>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TextLogoStory: Story = {
  args: {
    size: 144,
    color: colors.neutrals.black,
  },
};
