import React from 'react';
import Reports from './Reports';
import { render, screen } from '@testing-library/react';

test('Check default icon values of Reports', () => {
  const view = render(<Reports />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('Reports').tagName).toEqual('svg');
  expect(screen.getByTestId('Reports')).toHaveAttribute('width', '15');
  expect(screen.getByTestId('Reports')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('Reports')).toHaveAttribute('viewBox', '0 0 15 14');
});

test('Check icon props of Reports', () => {
  render(<Reports size={46} />);
  expect(screen.getByTestId('Reports')).toHaveAttribute('width', '46');
});
