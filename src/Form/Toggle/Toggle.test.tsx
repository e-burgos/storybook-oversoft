import React from 'react';
import ToggleComponent from './Toggle.component';
import { render, fireEvent, act } from '@testing-library/react';
import { primary, neutrals } from '../../color-palette';

test('Render Toggle with default props', async () => {
  const onClickHandlerMock = jest.fn();
  const view = render(<ToggleComponent isToggled={false} onClick={onClickHandlerMock} />);

  expect(view.container).toMatchSnapshot();
});

test('Render disabled Toggle', async () => {
  const onClickHandlerMock = jest.fn();
  const view = render(<ToggleComponent isToggled={false} onClick={onClickHandlerMock} disabled />);

  expect(view.container).toMatchSnapshot();
});

test('onClick Toggle', async () => {
  const onClickHandlerMock = jest.fn();
  const view = render(
    <ToggleComponent
      fontFamily="Rubik-Bold"
      fontSize="12px"
      label="This is the Toggle"
      isToggled={false}
      togglePrimaryColor={primary.red}
      toggleNeutralColor={neutrals.white}
      toggleGuidePrimaryColor={primary.redLight}
      toggleGuideNeutralColor={neutrals.greyThree}
      disabled={false}
      onClick={onClickHandlerMock}
    />
  );

  expect(view.container).toMatchSnapshot();

  await act(() => {
    fireEvent.click(view.getByTestId('This is the Toggle'));
  });

  expect(onClickHandlerMock.mock.calls.length).toBe(1);

  await act(() => {
    view.rerender(
      <ToggleComponent
        fontFamily="Rubik-Bold"
        fontSize="12px"
        label="This is the Toggle"
        isToggled={true}
        togglePrimaryColor={primary.red}
        toggleNeutralColor={neutrals.white}
        toggleGuidePrimaryColor={primary.redLight}
        toggleGuideNeutralColor={neutrals.greyThree}
        disabled={false}
        onClick={onClickHandlerMock}
      />
    );
  });

  expect(view.container).toMatchSnapshot();

  await act(() => {
    fireEvent.click(view.getByTestId('This is the Toggle'));
  });

  expect(onClickHandlerMock.mock.calls.length).toBe(2);
});
