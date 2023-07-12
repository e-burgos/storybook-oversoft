import React from 'react';
import FilterCircle from './FilterCircle';
import { fireEvent, render, screen } from '@testing-library/react';
import colors from '../../color-palette';

test('Check default icon values of FilterCircle', () => {
  const view = render(<FilterCircle />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('FilterCircle').tagName).toEqual('svg');
  expect(screen.getByTestId('FilterCircle')).toHaveAttribute('width', '30');
  expect(screen.getByTestId('FilterCircle')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('FilterCircle')).toHaveAttribute('viewBox', '0 0 30 30');
  expect(screen.getByTestId('CircleFilterCircle')).toHaveAttribute('fill', colors.neutrals.white);
  expect(screen.getByTestId('PathFilterCircle')).toHaveAttribute('fill', colors.neutrals.black);
});

test('Check icon props of FilterCircle', () => {
  const mockOnClick = jest.fn();
  render(<FilterCircle size={46} bgColor="red" iconColor="blue" onClick={mockOnClick} />);
  expect(screen.getByTestId('FilterCircle')).toHaveAttribute('width', '46');
  expect(screen.getByTestId('CircleFilterCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathFilterCircle')).toHaveAttribute('fill', 'blue');
  fireEvent.click(screen.getByTestId('FilterCircle'));
  expect(mockOnClick).toHaveBeenCalled();
});

test('Check icon active props of FilterCircle', () => {
  render(<FilterCircle active />);
  expect(screen.getByTestId('FilterCircle')).toHaveAttribute('width', '30');
  expect(screen.getByTestId('CircleFilterCircle')).toHaveAttribute('fill', colors.primary.red);
  expect(screen.getByTestId('PathFilterCircle')).toHaveAttribute('fill', colors.neutrals.white);
});

test('Check icon hover props of FilterCircle', () => {
  render(<FilterCircle />);
  fireEvent.mouseEnter(screen.getByTestId('FilterCircle'));
  expect(screen.getByTestId('CircleFilterCircle')).toHaveAttribute('fill', colors.primary.red);
  expect(screen.getByTestId('PathFilterCircle')).toHaveAttribute('fill', colors.neutrals.white);
  fireEvent.mouseLeave(screen.getByTestId('FilterCircle'));
  expect(screen.getByTestId('CircleFilterCircle')).toHaveAttribute('fill', colors.neutrals.white);
  expect(screen.getByTestId('PathFilterCircle')).toHaveAttribute('fill', colors.neutrals.black);
});

test('Check icon hover with color props of FilterCircle', () => {
  render(<FilterCircle bgColor="red" iconColor="blue" />);
  fireEvent.mouseEnter(screen.getByTestId('FilterCircle'));
  expect(screen.getByTestId('CircleFilterCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathFilterCircle')).toHaveAttribute('fill', 'blue');
  fireEvent.mouseLeave(screen.getByTestId('FilterCircle'));
  expect(screen.getByTestId('CircleFilterCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathFilterCircle')).toHaveAttribute('fill', 'blue');
});
