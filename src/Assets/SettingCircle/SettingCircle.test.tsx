import React from 'react';
import SettingCircle from './SettingCircle';
import { fireEvent, render, screen } from '@testing-library/react';
import colors from '../../color-palette';

test('Check default icon values of SettingCircle', () => {
  const view = render(<SettingCircle />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('SettingCircle').tagName).toEqual('svg');
  expect(screen.getByTestId('SettingCircle')).toHaveAttribute('width', '30');
  expect(screen.getByTestId('SettingCircle')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('SettingCircle')).toHaveAttribute('viewBox', '0 0 30 30');
  expect(screen.getByTestId('CircleSettingCircle')).toHaveAttribute('fill', colors.neutrals.white);
  expect(screen.getByTestId('PathSettingCircle')).toHaveAttribute('fill', colors.neutrals.black);
});

test('Check icon props of SettingCircle', () => {
  const mockOnClick = jest.fn();
  render(<SettingCircle size={46} bgColor="red" iconColor="blue" onClick={mockOnClick} />);
  expect(screen.getByTestId('SettingCircle')).toHaveAttribute('width', '46');
  expect(screen.getByTestId('CircleSettingCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathSettingCircle')).toHaveAttribute('fill', 'blue');
  fireEvent.click(screen.getByTestId('SettingCircle'));
  expect(mockOnClick).toHaveBeenCalled();
});

test('Check icon active props of SettingCircle', () => {
  render(<SettingCircle active />);
  expect(screen.getByTestId('SettingCircle')).toHaveAttribute('width', '30');
  expect(screen.getByTestId('CircleSettingCircle')).toHaveAttribute('fill', colors.primary.red);
  expect(screen.getByTestId('PathSettingCircle')).toHaveAttribute('fill', colors.neutrals.white);
});

test('Check icon hover props of SettingCircle', () => {
  render(<SettingCircle />);
  fireEvent.mouseEnter(screen.getByTestId('SettingCircle'));
  expect(screen.getByTestId('CircleSettingCircle')).toHaveAttribute('fill', colors.primary.red);
  expect(screen.getByTestId('PathSettingCircle')).toHaveAttribute('fill', colors.neutrals.white);
  fireEvent.mouseLeave(screen.getByTestId('SettingCircle'));
  expect(screen.getByTestId('CircleSettingCircle')).toHaveAttribute('fill', colors.neutrals.white);
  expect(screen.getByTestId('PathSettingCircle')).toHaveAttribute('fill', colors.neutrals.black);
});

test('Check icon hover with color props of SettingCircle', () => {
  render(<SettingCircle bgColor="red" iconColor="blue" />);
  fireEvent.mouseEnter(screen.getByTestId('SettingCircle'));
  expect(screen.getByTestId('CircleSettingCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathSettingCircle')).toHaveAttribute('fill', 'blue');
  fireEvent.mouseLeave(screen.getByTestId('SettingCircle'));
  expect(screen.getByTestId('CircleSettingCircle')).toHaveAttribute('fill', 'red');
  expect(screen.getByTestId('PathSettingCircle')).toHaveAttribute('fill', 'blue');
});
