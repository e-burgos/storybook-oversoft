import React from 'react';
import InputComponent from './Input';
import { render, screen, fireEvent } from '@testing-library/react';

test('Input', async () => {
  const onChangeMock = jest.fn();
  const onBlurMock = jest.fn();
  const onKeyDownMock = jest.fn();
  const onFocusMock = jest.fn();
  const view = render(
    <InputComponent
      type="text"
      label="Name"
      onKeyDown={onKeyDownMock}
      onFocus={onFocusMock}
      onChange={onChangeMock}
      onBlur={onBlurMock}
      value="value"
    />
  );
  expect(view).toBeDefined();
  fireEvent.change(screen.getByTestId('Name'), { target: { value: 'value2' } });
  expect(onChangeMock).toHaveBeenCalled();
  expect(onChangeMock.mock.calls[0][0]).toBe('value2');
  expect(view.container).toMatchSnapshot();
});

test('Input disabled', async () => {
  const onChangeMock = jest.fn();
  const onBlurMock = jest.fn();
  const onKeyDownMock = jest.fn();
  const onFocusMock = jest.fn();
  const view = render(
    <InputComponent
      disabled={true}
      type="text"
      label="Name"
      onKeyDown={onKeyDownMock}
      onFocus={onFocusMock}
      onChange={onChangeMock}
      onBlur={onBlurMock}
      value="value"
    />
  );
  expect(view).toBeDefined();
  fireEvent.change(screen.getByTestId('Name'), { target: { value: 'value2' } });
  expect(onChangeMock).not.toHaveBeenCalled();
  expect(view.container).toMatchSnapshot();
});
