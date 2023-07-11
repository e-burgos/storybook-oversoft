import React from 'react';
import DMS from './DMS';
import { render, screen } from '@testing-library/react';

test('Check default icon values of DMS', () => {
  const view = render(<DMS />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('DMS').tagName).toEqual('svg');
  expect(screen.getByTestId('DMS')).toHaveAttribute('width', '68');
  expect(screen.getByTestId('DMS')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('DMS')).toHaveAttribute('viewBox', '0 0 68 24');
});

test('Check icon props of DMS', () => {
  render(<DMS size={46} />);
  expect(screen.getByTestId('DMS')).toHaveAttribute('width', '46');
});
