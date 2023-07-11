import { Meta, StoryObj } from '@storybook/react';
import ModalComponent from './GenericModal.component';

const meta: Meta = {
  title: 'Modal/ModalGeneric',
  component: ModalComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof ModalComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modal: Story = {
  args: {
    size: 'M',
    title: 'Title Modal',
    isOpen: true,
    onClose: () => console.log('Close !!'),
  },
};
