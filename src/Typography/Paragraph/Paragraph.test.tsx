import Paragraph from './Paragraph';
import { render, screen } from '@testing-library/react';
import colors from '../../color-palette';
import React from 'react';

it('Check Paragraph', () => {
  const view = render(<Paragraph>Hello Paragraph</Paragraph>);
  expect(view).toBeDefined();
  expect(screen.getByText('Hello Paragraph')).not.toBeNull();
  expect(screen.getByText('Hello Paragraph').tagName).toEqual('P');
  expect(screen.getByText('Hello Paragraph')).toHaveStyleRule('font-size', '12px');
  expect(screen.getByText('Hello Paragraph')).toHaveStyleRule('font-family', 'Rubik-Regular');
  expect(screen.getByText('Hello Paragraph')).toHaveStyleRule('color', colors.neutrals.black);
});

it('Check Color on hover Paragraph', async () => {
  render(<Paragraph fontHoverColor="red">Hello color on hover Paragraph</Paragraph>);
  expect(screen.getByText('Hello color on hover Paragraph')).toHaveStyleRule('color', colors.neutrals.black);
  expect(screen.getByText('Hello color on hover Paragraph')).toHaveStyleRule('color', 'red', {
    modifier: ':hover',
  });
});
