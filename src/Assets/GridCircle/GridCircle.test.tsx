import React from 'react';
import GridCircle from './GridCircle';
import { fireEvent, render, screen } from '@testing-library/react';
import colors from '../../color-palette';

test('Check default icon values of GridCircle', () => {
  const view = render(<GridCircle />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('GridCircle').tagName).toEqual('svg');
  expect(screen.getByTestId('GridCircle')).toHaveAttribute('width', '30');
  expect(screen.getByTestId('GridCircle')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('GridCircle')).toHaveAttribute('viewBox', '0 0 30 30');
  expect(screen.getByTestId('CircleGridCircle')).toHaveAttribute('fill', colors.neutrals.white);
  expect(screen.getByTestId('PathGridCircle')).toHaveAttribute('fill', colors.neutrals.black);
});

test('Check icon props of GridCircle', () => {
  const mockOnClick = jest.fn();
  render(<GridCircle size={46} bgColor="red" iconColor="blue" onClick={mockOnClick} />);
  expect(screen.getByTestId('GridCircle')).toHaveAttribute('width', '46');
  expect(screen.getByTestId('CircleGridCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathGridCircle')).toHaveAttribute('fill', 'blue');
  fireEvent.click(screen.getByTestId('GridCircle'));
  expect(mockOnClick).toHaveBeenCalled();
});

test('Check icon active props of GridCircle', () => {
  render(<GridCircle active />);
  expect(screen.getByTestId('GridCircle')).toHaveAttribute('width', '30');
  expect(screen.getByTestId('CircleGridCircle')).toHaveAttribute('fill', colors.primary.red);
  expect(screen.getByTestId('PathGridCircle')).toHaveAttribute('fill', colors.neutrals.white);
});

test('Check icon hover props of GridCircle', () => {
  render(<GridCircle />);
  fireEvent.mouseEnter(screen.getByTestId('GridCircle'));
  expect(screen.getByTestId('CircleGridCircle')).toHaveAttribute('fill', colors.primary.red);
  expect(screen.getByTestId('PathGridCircle')).toHaveAttribute('fill', colors.neutrals.white);
  fireEvent.mouseLeave(screen.getByTestId('GridCircle'));
  expect(screen.getByTestId('CircleGridCircle')).toHaveAttribute('fill', colors.neutrals.white);
  expect(screen.getByTestId('PathGridCircle')).toHaveAttribute('fill', colors.neutrals.black);
});

test('Check icon hover with color props of GridCircle', () => {
  render(<GridCircle bgColor="red" iconColor="blue" />);
  fireEvent.mouseEnter(screen.getByTestId('GridCircle'));
  expect(screen.getByTestId('CircleGridCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathGridCircle')).toHaveAttribute('fill', 'blue');
  fireEvent.mouseLeave(screen.getByTestId('GridCircle'));
  expect(screen.getByTestId('CircleGridCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathGridCircle')).toHaveAttribute('fill', 'blue');
});
