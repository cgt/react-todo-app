import React from 'react';
import { App } from './App';
import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

it('adds todos', () => {
  const { getByText } = render(<App />);
  const button = getByText('Add text');
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  expect(getByText('my TODO')).toBeInTheDocument();
})