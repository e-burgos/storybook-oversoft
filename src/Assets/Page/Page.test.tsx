import React from 'react';
import Page from './Page';
import { render, screen } from '@testing-library/react';

test('Check default icon values of Page', () => {
  const view = render(<Page />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('Page').tagName).toEqual('svg');
  expect(screen.getByTestId('Page')).toHaveAttribute('width', '13');
  expect(screen.getByTestId('Page')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('Page')).toHaveAttribute('viewBox', '0 0 13 12');
});

test('Check icon props of Page', () => {
  render(<Page size={46} />);
  expect(screen.getByTestId('Page')).toHaveAttribute('width', '46');
});
