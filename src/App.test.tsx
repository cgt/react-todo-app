import React from 'react';
import { App } from './App';
import { render, RenderResult } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe('App', () => {

  let r: RenderResult;
  let todoNameInputField: HTMLInputElement;

  beforeEach(() => {
    r = render(<App />);
    todoNameInputField = r.getByTestId("todo-name") as HTMLInputElement;
  });

  function addExampleTodo(name: string) {
    userEvent.type(todoNameInputField, name);
    const button = r.getByText('Add todo');
    userEvent.click(button);
  }

  it('add todo with custom name', () => {
    addExampleTodo("custom TODO");
    expect(r.getAllByText('custom TODO')).toHaveLength(1);
  })

  it('does not allow adding empty todo', () => {
    const addTodobutton = r.getByText('Add todo');
    userEvent.type(todoNameInputField, '');
    expect(addTodobutton).toBeDisabled();
  });

  it('after adding a todo, it clears the input field', () => {
    const todoName = todoNameInputField;
    addExampleTodo("Test")
    expect(todoName.value).toBe("");
  })

  it('does not allow adding todo with only whitespace', () => {
    const addTodobutton = r.getByText('Add todo');
    userEvent.type(todoNameInputField, ' ');
    expect(addTodobutton).toBeDisabled();
  })

  it('does not allow multiple todos with the same text', () => {
    addExampleTodo('my TODO');
    addExampleTodo('my TODO');
    expect(r.getAllByText('my TODO')).toHaveLength(1);
  })


  it('can mark a todo as done', () => {
    addExampleTodo("my TODO");
    const markAsDoneButton = r.getByTestId('mark-as-done-button') as HTMLInputElement;
    userEvent.click(markAsDoneButton);
    expect(markAsDoneButton.checked).toBeTrue();
  })

});