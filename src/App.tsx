import React, { useState } from "react";
import Todos from "./Todos";

export const App: React.FC = () => {
	const [todos, setTodos] = useState<string[]>([]);
	const [currentTodoName, setCurrentTodoName] = useState<string>("")

	const changeHandling = (event: React.ChangeEvent<HTMLInputElement>) => {
			setCurrentTodoName(event.target.value);
		
	}

	const clickHandler = () => { 
		if (!todos.some(todo => (todo===currentTodoName))){
			setTodos([...todos, currentTodoName]);
		} 
		setCurrentTodoName("");
	}

	return <>
		<input type="text" data-testid="todo-name" value={currentTodoName} onChange={changeHandling}/>
		<button onClick={clickHandler} 
			disabled={currentTodoName.trim() === ""}>Add todo</button>
		<Todos todos={todos} />
	</>;
}