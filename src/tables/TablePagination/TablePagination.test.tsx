import { fireEvent, render, screen } from '@testing-library/react';
import TablePagination from './TablePagination';
import React from 'react';
import colors from '../../color-palette';

const onChangePageFnMk = jest.fn();

beforeEach(() => {
  onChangePageFnMk.mockReset();
});

test('Check table pagination in the first page', () => {
  const view = render(
    <TablePagination
      rowsPerPage={2}
      rowCount={8}
      currentPage={1}
      onChangePage={onChangePageFnMk}
      onChangeRowsPerPage={onChangePageFnMk}
    />
  );
  expect(view).toBeDefined();
  expect(screen.queryByText('❮')).not.toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('❯')).toBeInTheDocument();
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('❯'));
  expect(onChangePageFnMk).toBeCalledTimes(3);
});

test('Check table pagination when the current page should be in the middle', () => {
  render(
    <TablePagination
      rowsPerPage={2}
      rowCount={8}
      currentPage={2}
      onChangePage={onChangePageFnMk}
      onChangeRowsPerPage={onChangePageFnMk}
    />
  );
  expect(screen.getByText('❮')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('3')).toBeInTheDocument();
  expect(screen.getByText('❯')).toBeInTheDocument();
  fireEvent.click(screen.getByText('❮'));
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('❯'));
  expect(onChangePageFnMk).toBeCalledTimes(4);
});

test('Check table pagination when the current page should be the last', () => {
  render(
    <TablePagination
      rowsPerPage={2}
      rowCount={8}
      currentPage={4}
      onChangePage={onChangePageFnMk}
      onChangeRowsPerPage={onChangePageFnMk}
    />
  );
  expect(screen.getByText('❮')).toBeInTheDocument();
  expect(screen.getByText('3')).toBeInTheDocument();
  expect(screen.getByText('4')).toBeInTheDocument();
  expect(screen.queryByText('❯')).not.toBeInTheDocument();
  fireEvent.click(screen.getByText('❮'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('4'));
  expect(onChangePageFnMk).toBeCalledTimes(3);
});

test('Check table pagination case 1', () => {
  render(
    <TablePagination
      rowsPerPage={2}
      rowCount={8}
      currentPage={1}
      onChangePage={onChangePageFnMk}
      onChangeRowsPerPage={onChangePageFnMk}
    />
  );
  expect(screen.queryByText('❮')).not.toBeInTheDocument();
  expect(screen.getByLabelText('Página 1')).toBeInTheDocument();
  expect(screen.getByLabelText('Página 2')).toBeInTheDocument();
  expect(screen.queryByLabelText('Página 3')).not.toBeInTheDocument();
  expect(screen.getByText('❯')).toBeInTheDocument();
});

test('Check table pagination case 2', () => {
  render(
    <TablePagination
      rowsPerPage={2}
      rowCount={8}
      currentPage={2}
      onChangePage={onChangePageFnMk}
      onChangeRowsPerPage={onChangePageFnMk}
    />
  );
  expect(screen.getByText('❮')).toBeInTheDocument();
  expect(screen.getByLabelText('Página 1')).toBeInTheDocument();
  expect(screen.getByLabelText('Página 2')).toBeInTheDocument();
  expect(screen.getByLabelText('Página 2')).toHaveAttribute('backgroundcolor', colors.primary.red);
  expect(screen.getByLabelText('Página 2').firstChild).toHaveAttribute('colortext', colors.neutrals.white);
  expect(screen.getByLabelText('Página 3')).toBeInTheDocument();
  expect(screen.getByText('❯')).toBeInTheDocument();
});

test('Check table pagination case 3', () => {
  render(
    <TablePagination
      rowsPerPage={2}
      rowCount={8}
      currentPage={3}
      onChangePage={onChangePageFnMk}
      onChangeRowsPerPage={onChangePageFnMk}
    />
  );
  expect(screen.getByText('❮')).toBeInTheDocument();
  expect(screen.queryByLabelText('Página 1')).not.toBeInTheDocument();
  expect(screen.getByLabelText('Página 2')).toBeInTheDocument();
  expect(screen.getByLabelText('Página 3')).toBeInTheDocument();
  expect(screen.getByLabelText('Página 4')).toBeInTheDocument();
  expect(screen.getByText('❯')).toBeInTheDocument();
});

test('Check table pagination case 4', () => {
  render(
    <TablePagination
      rowsPerPage={2}
      rowCount={8}
      currentPage={4}
      onChangePage={onChangePageFnMk}
      onChangeRowsPerPage={onChangePageFnMk}
    />
  );
  expect(screen.getByText('❮')).toBeInTheDocument();
  expect(screen.queryByLabelText('Página 1')).not.toBeInTheDocument();
  expect(screen.queryByLabelText('Página 2')).not.toBeInTheDocument();
  expect(screen.getByLabelText('Página 3')).toBeInTheDocument();
  expect(screen.getByLabelText('Página 4')).toBeInTheDocument();
  expect(screen.queryByText('❯')).not.toBeInTheDocument();
});
