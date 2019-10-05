import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todo } from './App';

interface TodoProps {
  todos: Todo[];
}

const Todos: React.FC<TodoProps> = (props) => {
  let { todos } = props;
  return <ul data-testid="todo-list">
    {todos.map((todo, i) => <li key={i}>{todo.name}
      <input data-testid="mark-as-done-button" type="checkbox" />
    </li>)}
  </ul>;
}

export default Todos;
