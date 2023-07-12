import React from 'react';
import Eye from './Eye';
import { render, screen } from '@testing-library/react';

test('Check default icon values of Eye', () => {
  const view = render(<Eye />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('Eye').tagName).toEqual('svg');
  expect(screen.getByTestId('Eye')).toHaveAttribute('width', '15');
  expect(screen.getByTestId('Eye')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('Eye')).toHaveAttribute('viewBox', '0 0 13 12');
});

test('Check icon props of Eye', () => {
  render(<Eye size={46} />);
  expect(screen.getByTestId('Eye')).toHaveAttribute('width', '46');
});
