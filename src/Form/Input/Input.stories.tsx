import { Meta, StoryObj } from '@storybook/react';
import InputComponent from './Input';
import { neutrals } from '../../color-palette';
import { fontFamilyList } from '../../Utils/fontFamilyList';

const meta: Meta = {
  title: 'Form/Input',
  component: InputComponent,
  argTypes: {
    type: { description: 'string' },
    label: { description: 'string' },
    value: { control: 'text', description: 'string' },
    placeholder: { description: 'string' },
    textSize: { description: 'string' },
    textSizeLabel: { description: 'string' },
    width: { description: 'string' },
    disabled: { control: 'boolean', description: 'boolean' },
    colorText: { control: 'color', description: 'string' },
    colorTextLabel: { control: 'color', description: 'string' },
    fontText: {
      options: fontFamilyList,
      control: { type: 'select' },
      description: 'string',
    },
    fontTextLabel: {
      options: fontFamilyList,
      control: { type: 'select' },
      description: 'string',
    },
    colorFocus: { control: 'color', description: 'string' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    type: 'text',
    label: 'Label',
    placeholder: 'Ingrese el Texto',
    textSize: '14px',
    textSizeLabel: '14px',
    width: '300px',
    disabled: false,
    colorText: neutrals.greyOne,
    colorTextLabel: neutrals.greyTwo,
    fontText: 'Rubik-Regular',
    fontTextLabel: 'Rubik-SemiBold',
    colorFocus: neutrals.greyThree,
  },
};

export const InputDisabled: Story = {
  args: {
    type: 'text',
    label: 'Label',
    placeholder: 'Ingrese el Texto',
    textSize: '14px',
    textSizeLabel: '14px',
    width: '300px',
    disabled: true,
    colorText: neutrals.greyOne,
    colorTextLabel: neutrals.greyTwo,
    fontText: 'Rubik-Regular',
    fontTextLabel: 'Rubik-SemiBold',
    colorFocus: neutrals.greyThree,
  },
};
