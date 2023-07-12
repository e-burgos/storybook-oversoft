import React from 'react';
import Edit from './Edit';
import { render, screen } from '@testing-library/react';

test('Check default icon values of Edit', () => {
  const view = render(<Edit />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('Edit').tagName).toEqual('svg');
  expect(screen.getByTestId('Edit')).toHaveAttribute('width', '15');
  expect(screen.getByTestId('Edit')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('Edit')).toHaveAttribute('viewBox', '0 0 13 12');
});

test('Check icon props of Edit', () => {
  render(<Edit size={46} />);
  expect(screen.getByTestId('Edit')).toHaveAttribute('width', '46');
});
