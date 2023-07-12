import React from 'react';
import PlusCircle from './PlusCircle';
import { fireEvent, render, screen } from '@testing-library/react';
import colors from '../../color-palette';

test('Check default icon values of PlusCircle', () => {
  const view = render(<PlusCircle />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('PlusCircle').tagName).toEqual('svg');
  expect(screen.getByTestId('PlusCircle')).toHaveAttribute('width', '30');
  expect(screen.getByTestId('PlusCircle')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('PlusCircle')).toHaveAttribute('viewBox', '0 0 30 30');
  expect(screen.getByTestId('CirclePlusCircle')).toHaveAttribute('fill', colors.neutrals.white);
  expect(screen.getByTestId('PathPlusCircle')).toHaveAttribute('fill', colors.neutrals.black);
});

test('Check icon props of PlusCircle', () => {
  const mockOnClick = jest.fn();
  render(<PlusCircle size={46} bgColor="red" iconColor="blue" onClick={mockOnClick} />);
  expect(screen.getByTestId('PlusCircle')).toHaveAttribute('width', '46');
  expect(screen.getByTestId('CirclePlusCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathPlusCircle')).toHaveAttribute('fill', 'blue');
  fireEvent.click(screen.getByTestId('PlusCircle'));
  expect(mockOnClick).toHaveBeenCalled();
});

test('Check icon active props of PlusCircle', () => {
  render(<PlusCircle active />);
  expect(screen.getByTestId('PlusCircle')).toHaveAttribute('width', '30');
  expect(screen.getByTestId('CirclePlusCircle')).toHaveAttribute('fill', colors.primary.red);
  expect(screen.getByTestId('PathPlusCircle')).toHaveAttribute('fill', colors.neutrals.white);
});

test('Check icon hover props of PlusCircle', () => {
  render(<PlusCircle />);
  fireEvent.mouseEnter(screen.getByTestId('PlusCircle'));
  expect(screen.getByTestId('CirclePlusCircle')).toHaveAttribute('fill', colors.primary.red);
  expect(screen.getByTestId('PathPlusCircle')).toHaveAttribute('fill', colors.neutrals.white);
  fireEvent.mouseLeave(screen.getByTestId('PlusCircle'));
  expect(screen.getByTestId('CirclePlusCircle')).toHaveAttribute('fill', colors.neutrals.white);
  expect(screen.getByTestId('PathPlusCircle')).toHaveAttribute('fill', colors.neutrals.black);
});

test('Check icon hover with color props of PlusCircle', () => {
  render(<PlusCircle bgColor="red" iconColor="blue" />);
  fireEvent.mouseEnter(screen.getByTestId('PlusCircle'));
  expect(screen.getByTestId('CirclePlusCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathPlusCircle')).toHaveAttribute('fill', 'blue');
  fireEvent.mouseLeave(screen.getByTestId('PlusCircle'));
  expect(screen.getByTestId('CirclePlusCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathPlusCircle')).toHaveAttribute('fill', 'blue');
});
