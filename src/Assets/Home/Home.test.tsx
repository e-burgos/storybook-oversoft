import React from 'react';
import Home from './Home';
import { render, screen } from '@testing-library/react';

test('Check default icon values of Home', () => {
  const view = render(<Home />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('Home').tagName).toEqual('svg');
  expect(screen.getByTestId('Home')).toHaveAttribute('width', '15');
  expect(screen.getByTestId('Home')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('Home')).toHaveAttribute('viewBox', '0 0 15 14');
});

test('Check icon props of Home', () => {
  render(<Home size={46} />);
  expect(screen.getByTestId('Home')).toHaveAttribute('width', '46');
});
