import React from 'react';
import { App } from './App';
import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

it('adds todos', () => {
  const { getByLabelText } = render(<App />);
  expect(getByLabelText('Add text')).toBeInTheDocument();
})