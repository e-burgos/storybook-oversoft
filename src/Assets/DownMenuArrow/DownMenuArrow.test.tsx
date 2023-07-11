import React from 'react';
import DownMenuArrow from './DownMenuArrow';
import { render, screen } from '@testing-library/react';

test('Check default icon values of DownMenuArrow', () => {
  const view = render(<DownMenuArrow />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('DownMenuArrow').tagName).toEqual('svg');
  expect(screen.getByTestId('DownMenuArrow')).toHaveAttribute('width', '15');
  expect(screen.getByTestId('DownMenuArrow')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('DownMenuArrow')).toHaveAttribute('viewBox', '0 0 15 14');
});

test('Check icon props of DownMenuArrow', () => {
  render(<DownMenuArrow size={46} />);
  expect(screen.getByTestId('DownMenuArrow')).toHaveAttribute('width', '46');
});
