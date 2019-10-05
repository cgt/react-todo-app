import React from 'react';
import { App } from './App';
import { render, RenderResult } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe('App', () => {

  let r: RenderResult;

  beforeEach(() => {
    r = render(<App/>);
  })

  it('add todo with custom name', () => {
    const { getByText, getAllByText, getByTestId } = r;
    const input = getByTestId("todo-name");
    userEvent.type(input, "custom TODO");
    const button = getByText('Add todo');
    userEvent.click(button);
    expect(getAllByText('custom TODO')).toHaveLength(1);
  })

  it('does not allow adding empty todo', () => {
    const { getByText, getByTestId } = r;
    const addTodobutton = getByText('Add todo');
    const todoName = getByTestId('todo-name');
    userEvent.type(todoName, '');
    expect(addTodobutton).toBeDisabled();
  });

  it('after adding a todo, it clears the input field', () => {
    const { getByText, getByTestId } = r;
    const addTodobutton = getByText('Add todo');
    const todoName = getByTestId('todo-name') as HTMLInputElement;
    userEvent.type(todoName, 'Test');
    userEvent.click(addTodobutton);
    expect(todoName.value).toBe("");
  })

  it('does not allow adding todo with only whitespace', () => {
    const { getByText, getByTestId } = r;
    const addTodobutton = getByText('Add todo');
    const todoName = getByTestId('todo-name') as HTMLInputElement;
    userEvent.type(todoName, ' ');
    expect(addTodobutton).toBeDisabled();
  })

  it('does not allow multiple todos with the same text', () => {
    const { getByText, getByTestId, getAllByText } = r;
    const addTodobutton = getByText('Add todo');
    const todoName = getByTestId('todo-name') as HTMLInputElement;
    userEvent.type(todoName, 'my TODO');
    userEvent.click(addTodobutton);
    userEvent.type(todoName, 'my TODO');
    expect(getAllByText('my TODO')).toHaveLength(1);
  })

});