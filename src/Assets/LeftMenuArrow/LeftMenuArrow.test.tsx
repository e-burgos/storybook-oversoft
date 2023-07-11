import React from 'react';
import LeftMenuArrow from './LeftMenuArrow';
import { render, screen } from '@testing-library/react';

test('Check default icon values of LeftMenuArrow', () => {
  const view = render(<LeftMenuArrow />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('LeftMenuArrow').tagName).toEqual('svg');
  expect(screen.getByTestId('LeftMenuArrow')).toHaveAttribute('width', '15');
  expect(screen.getByTestId('LeftMenuArrow')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('LeftMenuArrow')).toHaveAttribute('viewBox', '0 0 15 14');
});

test('Check icon props of LeftMenuArrow', () => {
  render(<LeftMenuArrow size={46} />);
  expect(screen.getByTestId('LeftMenuArrow')).toHaveAttribute('width', '46');
});
