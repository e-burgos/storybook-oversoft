import React from 'react';
import { render, screen } from '@testing-library/react';
import BaseButton from './BaseButton';
import colors from '../../color-palette';

it('Check BaseButton props', () => {
  const onClickMock = jest.fn();
  const view = render(<BaseButton onClick={onClickMock} label={'base button'} aria-label="aria label" />);
  expect(view).toBeDefined();
  screen.getByRole('button').click();
  expect(onClickMock).toHaveBeenCalled();
  expect(screen.getByTestId('heading')).toHaveStyleRule('font-size', '12px');
  expect(screen.getByTestId('heading')).toHaveStyleRule('font-family', 'Rubik-Regular');
  expect(screen.getByRole('button')).toHaveStyleRule('width', 'auto');
  expect(screen.getByRole('button')).toHaveStyleRule('height', '45px');
  expect(screen.getByRole('button')).toHaveStyleRule('padding', '18px 12px');
  expect(screen.getByRole('button')).toHaveStyleRule('border-style', 'none');
  expect(screen.getByRole('button')).toHaveStyleRule('border-radius', '8px');
  expect(screen.getByRole('button')).toHaveStyleRule('background', colors.neutrals.white);
});

it('Check BaseButton others props', () => {
  const onClickMock = jest.fn();
  const view = render(
    <BaseButton onClick={onClickMock} label={'base button'} aria-label="aria label" loading borderColor="red" />
  );
  expect(view).toBeDefined();
  screen.getByRole('button').click();
  expect(onClickMock).toHaveBeenCalled();
  expect(screen.getByRole('button')).toHaveAttribute('borderColor', 'red');
  expect(screen.getByTestId('heading')).toHaveStyleRule('font-size', '12px');
  expect(screen.getByTestId('Spinner')).toBeInTheDocument();
});

it('Check BaseButton hover props', () => {
  const onClickMock = jest.fn();
  const view = render(
    <BaseButton
      onClick={onClickMock}
      label={'base button'}
      aria-label="aria label"
      hoverBorderColor="red"
      hoverBgColor="blue"
    />
  );
  expect(view).toBeDefined();
  screen.getByRole('button').click();
  expect(onClickMock).toHaveBeenCalled();
  expect(screen.getByRole('button')).toHaveAttribute('hoverBorderColor', 'red');
  expect(screen.getByRole('button')).toHaveAttribute('hoverBgColor', 'blue');
});

it('Check BaseButton commons props', () => {
  const onClickMock = jest.fn();
  const view = render(
    <BaseButton
      onClick={onClickMock}
      label={'base button'}
      aria-label="aria label"
      textSize="16px"
      width="100%"
      height="20px"
      padding="10px"
      borderColor="red"
      borderRadius="10px"
      colorText="blue"
      backgroundColor="transparent"
      fontText="Rubik-Bold"
    />
  );
  expect(view).toBeDefined();
  screen.getByRole('button').click();
  expect(onClickMock).toHaveBeenCalled();
  expect(screen.getByTestId('heading')).toHaveStyleRule('font-size', '16px');
  expect(screen.getByTestId('heading')).toHaveStyleRule('color', 'blue');
  expect(screen.getByTestId('heading')).toHaveStyleRule('font-family', 'Rubik-Bold');
  expect(screen.getByRole('button')).toHaveStyleRule('width', '100%');
  expect(screen.getByRole('button')).toHaveStyleRule('height', '20px');
  expect(screen.getByRole('button')).toHaveStyleRule('padding', '10px');
  expect(screen.getByRole('button')).toHaveStyleRule('border-style', 'solid');
  expect(screen.getByRole('button')).toHaveStyleRule('border-radius', '10px');
  expect(screen.getByRole('button')).toHaveStyleRule('background', 'transparent');
});

it('Check BaseButton disabled props', () => {
  const onClickMock = jest.fn();
  render(
    <BaseButton
      onClick={onClickMock}
      label={'base button'}
      aria-label="aria label"
      backgroundColor="#000000"
      disabled
    />
  );
  expect(screen.getByRole('button')).toHaveStyleRule('background', '#00000030');
});
