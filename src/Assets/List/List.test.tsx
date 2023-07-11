import React from 'react';
import List from './List';
import { render, screen } from '@testing-library/react';

test('Check default icon values of List', () => {
  const view = render(<List />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('List').tagName).toEqual('svg');
  expect(screen.getByTestId('List')).toHaveAttribute('width', '15');
  expect(screen.getByTestId('List')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('List')).toHaveAttribute('viewBox', '0 0 12 12');
});

test('Check icon props of List', () => {
  render(<List size={46} />);
  expect(screen.getByTestId('List')).toHaveAttribute('width', '46');
});
