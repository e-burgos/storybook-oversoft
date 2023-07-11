import React from 'react';
import Logo from './Logo';
import { render, screen } from '@testing-library/react';

test('Check default icon values of Logo', () => {
  const view = render(<Logo />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('Logo').tagName).toEqual('svg');
  expect(screen.getByTestId('Logo')).toHaveAttribute('width', '49');
  expect(screen.getByTestId('Logo')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('Logo')).toHaveAttribute('viewBox', '0 0 49 49');
});

test('Check icon props of Logo', () => {
  render(<Logo size={46} />);
  expect(screen.getByTestId('Logo')).toHaveAttribute('width', '46');
});
