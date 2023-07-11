import React from 'react';
import TextLogo from './TextLogo';
import { render, screen } from '@testing-library/react';

test('Check default icon values of TextLogo', () => {
  const view = render(<TextLogo />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('TextLogo').tagName).toEqual('svg');
  expect(screen.getByTestId('TextLogo')).toHaveAttribute('width', '144');
  expect(screen.getByTestId('TextLogo')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('TextLogo')).toHaveAttribute('viewBox', '0 0 144 33');
});

test('Check icon props of TextLogo', () => {
  render(<TextLogo size={46} />);
  expect(screen.getByTestId('TextLogo')).toHaveAttribute('width', '46');
});
