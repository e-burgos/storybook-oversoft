import Users from './Users';
import { render, screen } from '@testing-library/react';
import colors from '../../color-palette';
import React from 'react';

test('Check default icon values of Users', () => {
  const view = render(<Users />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('Users').tagName).toEqual('svg');
  expect(screen.getByTestId('Users')).toHaveAttribute('width', '26');
  expect(screen.getByTestId('Users')).toHaveAttribute('height', '26');
  expect(screen.getByTestId('Users')).toHaveAttribute('fill', colors.neutrals.blackSixty);
  expect(screen.getByTestId('Users')).toHaveAttribute('viewBox', '0 0 18 16');
});

test('Check icon props of Users', () => {
  render(<Users size={46} iconColor={colors.secondary.green} />);
  expect(screen.getByTestId('Users')).toHaveAttribute('width', '46');
  expect(screen.getByTestId('Users')).toHaveAttribute('height', '46');
  expect(screen.getByTestId('Users')).toHaveAttribute('fill', colors.secondary.green);
});
