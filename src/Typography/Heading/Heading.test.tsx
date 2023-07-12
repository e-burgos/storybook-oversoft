import React from 'react';
import Heading from './Heading';
import { render, screen } from '@testing-library/react';

it('Check Heading level', () => {
  const view = render(<Heading level={1}>Hello h1</Heading>);
  expect(view).toBeDefined();
  expect(screen.getByText('Hello h1')).not.toBeNull();
  expect(screen.getByText('Hello h1').tagName).toEqual('H1');
  render(<Heading level={2}>Hello h2</Heading>);
  expect(screen.getByText('Hello h2').tagName).toEqual('H2');
  render(<Heading level={3}>Hello h3</Heading>);
  expect(screen.getByText('Hello h3').tagName).toEqual('H3');
});
