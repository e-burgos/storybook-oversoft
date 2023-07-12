import React from 'react';
import CopyCircle from './CopyCircle';
import { fireEvent, render, screen } from '@testing-library/react';
import colors from '../../color-palette';

test('Check default icon values of CopyCircle', () => {
  const view = render(<CopyCircle />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('CopyCircle').tagName).toEqual('svg');
  expect(screen.getByTestId('CopyCircle')).toHaveAttribute('width', '30');
  expect(screen.getByTestId('CopyCircle')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('CopyCircle')).toHaveAttribute('viewBox', '0 0 30 30');
  expect(screen.getByTestId('CircleCopyCircle')).toHaveAttribute('fill', colors.neutrals.white);
  expect(screen.getByTestId('PathCopyCircle')).toHaveAttribute('fill', colors.neutrals.black);
});

test('Check icon props of CopyCircle', () => {
  const mockOnClick = jest.fn();
  render(<CopyCircle size={46} bgColor="red" iconColor="blue" onClick={mockOnClick} />);
  expect(screen.getByTestId('CopyCircle')).toHaveAttribute('width', '46');
  expect(screen.getByTestId('CircleCopyCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathCopyCircle')).toHaveAttribute('fill', 'blue');
  fireEvent.click(screen.getByTestId('CopyCircle'));
  expect(mockOnClick).toHaveBeenCalled();
});

test('Check icon active props of CopyCircle', () => {
  render(<CopyCircle active />);
  expect(screen.getByTestId('CopyCircle')).toHaveAttribute('width', '30');
  expect(screen.getByTestId('CircleCopyCircle')).toHaveAttribute('fill', colors.primary.red);
  expect(screen.getByTestId('PathCopyCircle')).toHaveAttribute('fill', colors.neutrals.white);
});

test('Check icon hover props of CopyCircle', () => {
  render(<CopyCircle />);
  fireEvent.mouseEnter(screen.getByTestId('CopyCircle'));
  expect(screen.getByTestId('CircleCopyCircle')).toHaveAttribute('fill', colors.primary.red);
  expect(screen.getByTestId('PathCopyCircle')).toHaveAttribute('fill', colors.neutrals.white);
  fireEvent.mouseLeave(screen.getByTestId('CopyCircle'));
  expect(screen.getByTestId('CircleCopyCircle')).toHaveAttribute('fill', colors.neutrals.white);
  expect(screen.getByTestId('PathCopyCircle')).toHaveAttribute('fill', colors.neutrals.black);
});

test('Check icon hover with color props of CopyCircle', () => {
  render(<CopyCircle bgColor="red" iconColor="blue" />);
  fireEvent.mouseEnter(screen.getByTestId('CopyCircle'));
  expect(screen.getByTestId('CircleCopyCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathCopyCircle')).toHaveAttribute('fill', 'blue');
  fireEvent.mouseLeave(screen.getByTestId('CopyCircle'));
  expect(screen.getByTestId('CircleCopyCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathCopyCircle')).toHaveAttribute('fill', 'blue');
});
