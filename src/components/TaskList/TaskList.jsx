import { useState } from "react";
import { tasks } from "../../utils/tasks/tasks";
import "./TaskList.css";

export const TaskList = () => {
	const [tasksToDo, setTasksToDo] = useState(tasks);
	const [done, setDone] = useState(false);

	const handleInputChange = (event) => {
		const { checked } = event.target;

		console.log("Cambiando el input");
	};

	return (
		<div className="exercise-container">
			<h2 className="title">Lista de tareas</h2>
			<ul className="list-item">
				{tasksToDo.map((tarea) => {
					return (
						<li key={tarea.id} className={done ? "item" : "item task-to-do"}>
							<label htmlFor={tarea.id}>{tarea.title}</label>
							<input
								type="checkbox"
								name={tarea.title}
								id={tarea.id}
								value={done}
								onChange={handleInputChange}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
