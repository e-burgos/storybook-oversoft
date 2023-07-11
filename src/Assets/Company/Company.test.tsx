import React from 'react';
import Company from './Company';
import { render, screen } from '@testing-library/react';

test('Check default icon values of Company', () => {
  const view = render(<Company />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('Company').tagName).toEqual('svg');
  expect(screen.getByTestId('Company')).toHaveAttribute('width', '15');
  expect(screen.getByTestId('Company')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('Company')).toHaveAttribute('viewBox', '0 0 15 14');
});

test('Check icon props of Company', () => {
  render(<Company size={46} />);
  expect(screen.getByTestId('Company')).toHaveAttribute('width', '46');
});
