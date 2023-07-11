import React from 'react';
import CloseButton from './CloseButton';
import { render, screen } from '@testing-library/react';

describe('CloseButton', () => {
  it('Check CloseButton props', () => {
    const onClickMock = jest.fn();
    const view = render(<CloseButton aria-label="Cerrar test" onClick={onClickMock} />);
    expect(view).toBeDefined();
    screen.getByRole('button').click();
    expect(onClickMock).toHaveBeenCalled();
  });

  it('Check CloseButton default props', () => {
    const onClickMock = jest.fn();
    render(<CloseButton onClick={onClickMock} />);
    expect(screen.getAllByLabelText('Cerrar')).toBeDefined();
  });
});
