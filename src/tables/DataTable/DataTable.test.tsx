import DataTable, { TableColumn } from './DataTable';
import { render, screen } from '@testing-library/react';
import React from 'react';

interface RowData {
  id: string;
  description: string;
  responsable: string;
}

export const data: RowData[] = [
  {
    id: 'REQ124383',
    description: 'Se me rompió la impresora que uso para los escaneos y impresiones de facturacio...',
    responsable: 'tecnología',
  },
  {
    id: 'REQ124384',
    description: 'escaneos y impresiones de facturación sin problemas por el momento',
    responsable: 'Soporte',
  },
  {
    id: 'REQ124385',
    description: 'Se me rompió la PC',
    responsable: 'Soporte',
  },
];

export const columns: TableColumn<RowData>[] = [
  {
    name: 'Referencia',
    width: '10%',
    cell: (row: { id: string }) => <p>{row.id}</p>,
    sortable: true,
    reorder: true,
  },
  {
    name: 'Descripción',
    width: '48%',
    wrap: true,
    cell: (row: { description: string }) => <p>{row.description}</p>,
    sortable: true,
    reorder: true,
  },
  {
    name: 'Responsable',
    width: '12%',
    cell: (row: { responsable: string }) => <p>{row.responsable}</p>,
    sortable: true,
    reorder: true,
  },
];

test('Check DataTable props and styles', () => {
  const view = render(<DataTable data={data} columns={columns} />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('table-container')).toHaveStyleRule('background-color', 'transparent');
  expect(screen.getByTestId('table-container')).toHaveStyleRule('position', 'relative');
});
