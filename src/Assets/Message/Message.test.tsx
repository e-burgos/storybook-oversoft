import React from 'react';
import Message from './Message';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

test('Check default icon values of Message', () => {
  const view = render(<Message />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('Message').tagName).toEqual('svg');
  expect(screen.getByTestId('Message')).toHaveAttribute('width', '29');
  expect(screen.getByTestId('Message')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('Message')).toHaveAttribute('viewBox', '0 0 29 25');
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('Check icon props of Message', () => {
  const mockFn = jest.fn();
  render(<Message size={46} counter={99} onClick={mockFn} />);
  expect(screen.getByTestId('Message')).toHaveAttribute('width', '46');
  expect(screen.getByText('99')).toBeInTheDocument();
  userEvent.click(screen.getByTestId('Message'));
  expect(mockFn).toHaveBeenCalled();
});
