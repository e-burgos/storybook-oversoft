import React from 'react';
import Bell from './Bell';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

test('Check default icon values of Bell', () => {
  const view = render(<Bell />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('Bell').tagName).toEqual('svg');
  expect(screen.getByTestId('Bell')).toHaveAttribute('width', '24');
  expect(screen.getByTestId('Bell')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('Bell')).toHaveAttribute('viewBox', '0 0 24 29');
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('Check icon props of Bell', () => {
  const mockFn = jest.fn();
  render(<Bell size={46} counter={99} onClick={mockFn} />);
  expect(screen.getByTestId('Bell')).toHaveAttribute('width', '46');
  expect(screen.getByText('99')).toBeInTheDocument();
  userEvent.click(screen.getByTestId('Bell'));
  expect(mockFn).toHaveBeenCalled();
});
