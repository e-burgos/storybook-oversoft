import React from 'react';
import MenuCircle from './MenuCircle';
import { fireEvent, render, screen } from '@testing-library/react';
import colors from '../../color-palette';

test('Check default icon values of MenuCircle', () => {
  const view = render(<MenuCircle />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('MenuCircle').tagName).toEqual('svg');
  expect(screen.getByTestId('MenuCircle')).toHaveAttribute('width', '30');
  expect(screen.getByTestId('MenuCircle')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('MenuCircle')).toHaveAttribute('viewBox', '0 0 30 30');
  expect(screen.getByTestId('CircleMenuCircle')).toHaveAttribute('fill', colors.neutrals.white);
  expect(screen.getByTestId('PathMenuCircle')).toHaveAttribute('stroke', colors.neutrals.black);
});

test('Check icon props of MenuCircle', () => {
  const mockOnClick = jest.fn();
  render(<MenuCircle size={46} bgColor="red" iconColor="blue" onClick={mockOnClick} />);
  expect(screen.getByTestId('MenuCircle')).toHaveAttribute('width', '46');
  expect(screen.getByTestId('CircleMenuCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathMenuCircle')).toHaveAttribute('stroke', 'blue');
  fireEvent.click(screen.getByTestId('MenuCircle'));
  expect(mockOnClick).toHaveBeenCalled();
});

test('Check icon active props of MenuCircle', () => {
  render(<MenuCircle active />);
  expect(screen.getByTestId('MenuCircle')).toHaveAttribute('width', '30');
  expect(screen.getByTestId('CircleMenuCircle')).toHaveAttribute('fill', colors.primary.red);
  expect(screen.getByTestId('PathMenuCircle')).toHaveAttribute('stroke', colors.neutrals.white);
});

test('Check icon hover props of MenuCircle', () => {
  render(<MenuCircle />);
  fireEvent.mouseEnter(screen.getByTestId('MenuCircle'));
  expect(screen.getByTestId('CircleMenuCircle')).toHaveAttribute('fill', colors.primary.red);
  expect(screen.getByTestId('PathMenuCircle')).toHaveAttribute('stroke', colors.neutrals.white);
  fireEvent.mouseLeave(screen.getByTestId('MenuCircle'));
  expect(screen.getByTestId('CircleMenuCircle')).toHaveAttribute('fill', colors.neutrals.white);
  expect(screen.getByTestId('PathMenuCircle')).toHaveAttribute('stroke', colors.neutrals.black);
});

test('Check icon hover with color props of MenuCircle', () => {
  render(<MenuCircle bgColor="red" iconColor="blue" />);
  fireEvent.mouseEnter(screen.getByTestId('MenuCircle'));
  expect(screen.getByTestId('CircleMenuCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathMenuCircle')).toHaveAttribute('stroke', 'blue');
  fireEvent.mouseLeave(screen.getByTestId('MenuCircle'));
  expect(screen.getByTestId('CircleMenuCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathMenuCircle')).toHaveAttribute('stroke', 'blue');
});
