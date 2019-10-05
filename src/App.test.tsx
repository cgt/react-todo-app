import React from 'react';
import { App } from './App';
import { render, RenderResult } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe('App', () => {

  let r: RenderResult;
  let todoNameInputField: HTMLInputElement;

  beforeEach(() => {
    r = render(<App/>);
    todoNameInputField = r.getByTestId("todo-name") as HTMLInputElement;
  });


  it('add todo with custom name', () => {
    userEvent.type(todoNameInputField, "custom TODO");
    const button = r.getByText('Add todo');
    userEvent.click(button);
    expect(r.getAllByText('custom TODO')).toHaveLength(1);
  })

  it('does not allow adding empty todo', () => {
    const addTodobutton = r.getByText('Add todo');
    userEvent.type(todoNameInputField, '');
    expect(addTodobutton).toBeDisabled();
  });

  it('after adding a todo, it clears the input field', () => {
    const addTodobutton = r.getByText('Add todo');
    const todoName = todoNameInputField;
    userEvent.type(todoName, 'Test');
    userEvent.click(addTodobutton);
    expect(todoName.value).toBe("");
  })

  it('does not allow adding todo with only whitespace', () => {
    const addTodobutton = r.getByText('Add todo');
    userEvent.type(todoNameInputField, ' ');
    expect(addTodobutton).toBeDisabled();
  })

  it('does not allow multiple todos with the same text', () => {
    const addTodobutton = r.getByText('Add todo');
    userEvent.type(todoNameInputField, 'my TODO');
    userEvent.click(addTodobutton);
    userEvent.type(todoNameInputField, 'my TODO');
    expect(r.getAllByText('my TODO')).toHaveLength(1);
  })

});