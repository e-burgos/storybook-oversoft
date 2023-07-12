import React from 'react';
import GenericModalComponent from './GenericModal.component';
import { render, screen, fireEvent, act } from '@testing-library/react';

test('Modal is opening', async () => {
  const onCloseHandlerMock = jest.fn();
  const view = render(
    <GenericModalComponent width={600} maxHeight={400} title="Title Modal" isOpen={false} onClose={onCloseHandlerMock}>
      <h1>This is the Content</h1>
    </GenericModalComponent>
  );

  expect(onCloseHandlerMock).not.toHaveBeenCalled();
  expect(view.container).toMatchSnapshot();

  await act(() => {
    view.rerender(
      <GenericModalComponent width={600} maxHeight={400} title="Title Modal" isOpen={true} onClose={onCloseHandlerMock}>
        <h1>This is the Content</h1>
      </GenericModalComponent>
    );
  });

  expect(view.container).toMatchSnapshot();
});

test('Modal is closing', async () => {
  const onCloseHandlerMock = jest.fn();

  const view = render(
    <GenericModalComponent width={600} maxHeight={400} title="Title Modal" isOpen={true} onClose={onCloseHandlerMock}>
      <h1>This is the Content</h1>
    </GenericModalComponent>
  );

  expect(onCloseHandlerMock).not.toHaveBeenCalled();
  expect(view.container).toMatchSnapshot();

  await act(() => {
    fireEvent.click(screen.getByTestId('modalCloseButton'));
  });

  expect(view.container).toMatchSnapshot();
  expect(onCloseHandlerMock).toHaveBeenCalled();
});
