import React from 'react';
import Spinner from './Spinner';
import { render, screen } from '@testing-library/react';
import colors from '../../color-palette';

test('Check default icon values of Spinner', () => {
  const view = render(<Spinner />);
  expect(view).toBeDefined();
  expect(screen.getByTestId('Spinner').tagName).toEqual('svg');
  expect(screen.getByTestId('Spinner')).toHaveAttribute('width', '26');
  expect(screen.getByTestId('Spinner')).toHaveAttribute('height', '26');
  expect(screen.getByTestId('Spinner')).toHaveAttribute('viewBox', '0 0 50 50');
  expect(screen.getByTestId('Circle').tagName).toEqual('circle');
  expect(screen.getByTestId('Circle')).toHaveAttribute('cx', '25');
  expect(screen.getByTestId('Circle')).toHaveAttribute('cy', '25');
  expect(screen.getByTestId('Circle')).toHaveAttribute('r', '20');
  expect(screen.getByTestId('Circle')).toHaveAttribute('fill', 'none');
  expect(screen.getByTestId('Circle')).toHaveAttribute('stroke-width', '6');
  expect(screen.getByTestId('Circle')).toHaveStyleRule('stroke', colors.primary.red);
  expect(screen.getByTestId('Circle')).toHaveStyleRule('stroke-linecap', 'round');
  expect(screen.getByTestId('Circle')).toHaveStyleRule('animation', 'dash 1.5s ease-in-out infinite');
});

test('Check icon props of Spinner', () => {
  render(<Spinner size={46} iconColor={colors.secondary.green} margin="0 2px 2px 0" />);
  expect(screen.getByTestId('Spinner')).toHaveAttribute('width', '46');
  expect(screen.getByTestId('Spinner')).toHaveAttribute('height', '46');
  expect(screen.getByTestId('Spinner')).toHaveStyleRule('margin', '0 2px 2px 0');
  expect(screen.getByTestId('Circle')).toHaveStyleRule('stroke', colors.secondary.green);
});
