import React, { useState } from "react";
import Todos from "./Todos";

export const App: React.FC = () => {
	const [todos, setTodos] = useState<string[]>([]);

	return <>
		<button onClick={() => { setTodos(["my TODO"])}}>Add text</button>
		<Todos todos={todos} />
	</>;
}