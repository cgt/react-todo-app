import React from 'react';
import logo from './logo.svg';
import './App.css';

interface TodoProps {
  todos: string[];
}

const Todos: React.FC<TodoProps> = (props) => {
  let { todos } = props;
  return <ul data-testid="todo-list">
    {todos.map(todo => <li>{todo}</li>)}
  </ul>;
}

export default Todos;