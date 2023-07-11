import React from 'react';
import Security from './Security';
import { render, screen } from '@testing-library/react';

test('Check default icon values of Security', () => {
  const view = render(<Security />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('Security').tagName).toEqual('svg');
  expect(screen.getByTestId('Security')).toHaveAttribute('width', '15');
  expect(screen.getByTestId('Security')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('Security')).toHaveAttribute('viewBox', '0 0 15 14');
});

test('Check icon props of Security', () => {
  render(<Security size={46} />);
  expect(screen.getByTestId('Security')).toHaveAttribute('width', '46');
});
