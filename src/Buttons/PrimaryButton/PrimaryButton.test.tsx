import React from 'react';
import { render, screen } from '@testing-library/react';
import PrimaryButton from './PrimaryButton';
import colors from '../../color-palette';

it('Check PrimaryButton props', () => {
  const onClickMock = jest.fn();
  const view = render(<PrimaryButton onClick={onClickMock} label={'primary button'} aria-label="aria label" />);
  expect(view).toBeDefined();
  screen.getByRole('button').click();
  expect(onClickMock).toHaveBeenCalled();
  expect(screen.getByTestId('heading')).toHaveStyleRule('font-size', '12px');
  expect(screen.getByTestId('heading')).toHaveStyleRule('font-family', 'Rubik-Regular');
  expect(screen.getByRole('button')).toHaveStyleRule('width', 'auto');
  expect(screen.getByRole('button')).toHaveStyleRule('height', '45px');
  expect(screen.getByRole('button')).toHaveStyleRule('padding', '8px 16px 8px 16px');
  expect(screen.getByRole('button')).toHaveStyleRule('border-radius', '8px');
  expect(screen.getByRole('button')).toHaveStyleRule('background', colors.primary.red);
});

it('Check PrimaryButton others props', () => {
  const onClickMock = jest.fn();
  const view = render(<PrimaryButton onClick={onClickMock} label={'base button'} aria-label="aria label" loading />);
  expect(view).toBeDefined();
  screen.getByRole('button').click();
  expect(onClickMock).toHaveBeenCalled();
  expect(screen.getByTestId('heading')).toHaveStyleRule('font-size', '12px');
  expect(screen.getByTestId('Spinner')).toBeInTheDocument();
});
