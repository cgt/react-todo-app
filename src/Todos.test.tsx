import React from 'react';
import Todos from './Todos';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  render(<Todos todos={[]} />);
});

it('renders a list of todos', () => {
  const r = render(<Todos todos={[]} />);
  expect(r.getByTestId('todo-list')).toBeInTheDocument();
});

it('render one todo', () => {
  const todos: string[] = [];
  render(<Todos todos={todos} />);
})