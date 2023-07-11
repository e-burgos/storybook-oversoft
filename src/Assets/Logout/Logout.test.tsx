import React from 'react';
import Logout from './Logout';
import { render, screen } from '@testing-library/react';

test('Check default icon values of Logout', () => {
  const view = render(<Logout />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('Logout').tagName).toEqual('svg');
  expect(screen.getByTestId('Logout')).toHaveAttribute('width', '21');
  expect(screen.getByTestId('Logout')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('Logout')).toHaveAttribute('viewBox', '0 0 21 21');
});

test('Check icon props of Logout', () => {
  render(<Logout size={46} />);
  expect(screen.getByTestId('Logout')).toHaveAttribute('width', '46');
});
