import { Meta, StoryObj } from '@storybook/react';
import TablePagination from './TablePagination';

const meta: Meta = {
  title: 'Tables/TablePagination',
  component: TablePagination,
} satisfies Meta<typeof TablePagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TablePaginationStory: Story = {
  args: {
    rowsPerPage: 2,
    rowCount: 10,
    currentPage: 2,
    onChangePage: () => alert('chick me!'),
  },
};
