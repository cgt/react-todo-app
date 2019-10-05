import React, { useState } from "react";

export interface Todo {
	name: string;
	done: boolean;
}

export const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [currentTodoName, setCurrentTodoName] = useState<string>("")

	const changeHandling = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentTodoName(event.target.value);

	}

	const clickHandler = () => {
		if (!todos.some(todo => (todo.name === currentTodoName))) {
			setTodos([...todos, { name: currentTodoName, done: false }]);
		}
		setCurrentTodoName("");
	}

	const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
		const isDone = event.target.checked;
		const todo = {...todos[index]};
		todo.done = isDone;
		const newTodos = [...todos];
		newTodos[index] = todo;
		setTodos(newTodos);
	};

	return <>
		<input type="text" data-testid="todo-name" value={currentTodoName} onChange={changeHandling} />
		<button onClick={clickHandler}
			disabled={currentTodoName.trim() === ""}>Add todo</button>
		<ul data-testid="todo-list">
			{todos.map((todo, i) =>
				<li key={i} className={todo.done ? 'completed-todo' : undefined}>{todo.name}
					<input data-testid="mark-as-done-button" type="checkbox"
						onChange={e => onCheckboxChange(e, i)} />
				</li>
			)}
		</ul>
	</>;
}