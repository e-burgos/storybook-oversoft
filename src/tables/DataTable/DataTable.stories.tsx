import { Meta, StoryObj } from '@storybook/react';
import DataTable, { TableColumn } from './DataTable';
import React from 'react';

interface RowData {
  id: string;
  description: string;
  responsable: string;
}

const data: RowData[] = [
  {
    id: 'REQ124383',
    description: 'Se me rompió la impresora que uso para los escaneos y impresiones de facturacion.',
    responsable: 'Tecnología',
  },
  {
    id: 'REQ124384',
    description: 'escaneos y impresiones de facturación sin problemas por el momento.',
    responsable: 'Soporte',
  },
  {
    id: 'REQ124385',
    description: 'Se me rompió la PC',
    responsable: 'Soporte',
  },
  {
    id: 'REQ124386',
    description: 'Se me rompió la impresora que uso para los escaneos y impresiones de facturacion.',
    responsable: 'Tecnología',
  },
  {
    id: 'REQ124387',
    description: 'escaneos y impresiones de facturación sin problemas por el momento.',
    responsable: 'Soporte',
  },
  {
    id: 'REQ124388',
    description: 'Se me rompió la PC',
    responsable: 'Soporte',
  },
  {
    id: 'REQ124389',
    description: 'Se me rompió la impresora que uso para los escaneos y impresiones de facturacion.',
    responsable: 'Tecnología',
  },
  {
    id: 'REQ124390',
    description: 'escaneos y impresiones de facturación sin problemas por el momento.',
    responsable: 'Soporte',
  },
  {
    id: 'REQ124391',
    description: 'Se me rompió la PC',
    responsable: 'Soporte',
  },
  {
    id: 'REQ124392',
    description: 'Se me rompió la impresora que uso para los escaneos y impresiones de facturacion.',
    responsable: 'Tecnología',
  },
  {
    id: 'REQ124393',
    description: 'escaneos y impresiones de facturación sin problemas por el momento.',
    responsable: 'Soporte',
  },
  {
    id: 'REQ124394',
    description: 'Se me rompió la PC',
    responsable: 'Soporte',
  },
];

const columns: TableColumn<RowData>[] = [
  {
    name: 'Referencia',
    selector: (row) => row.id,
    cell: (row: { id: string }) => <p>{row.id}</p>,
    sortable: true,
    reorder: true,
  },
  {
    name: 'Descripción',
    selector: (row) => row.description,
    cell: (row: { description: string }) => <p>{row.description}</p>,
    sortable: true,
    reorder: true,
  },
  {
    name: 'Responsable',
    selector: (row) => row.responsable,
    cell: (row: { responsable: string }) => <p>{row.responsable}</p>,
    sortable: true,
    reorder: true,
  },
];

const meta: Meta = {
  title: 'Tables/DataTable',
  component: DataTable,
  argTypes: {
    data: data,
    columns: columns,
    pagination: { control: 'boolean' },
    paginationPerPage: { control: 'number' },
    selectableRows: { control: 'boolean' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DataTableStory: Story = {
  args: {
    data: data,
    columns: columns,
    pagination: true,
    paginationPerPage: 4,
    selectableRows: true,
  },
};
