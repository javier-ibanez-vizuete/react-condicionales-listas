import { useState } from "react";
import { tasks } from "../../utils/tasks/tasks";
import "./TaskList.css";

const completedTasks = [];

export const TaskList = () => {
	const [tasksToDo, setTasksToDo] = useState(tasks);
	const [tasksDone, setTasksDone] = useState(completedTasks);

	const handleUnDoneTask = (id) => {
		const currentTask = tasksToDo.find((task) => task.id === id);
		const filteredTasks = tasksToDo.filter((task) => task.id !== id);

		setTasksToDo(filteredTasks);
		setTasksDone((prev) => [...prev, currentTask]);
	};

	const handleDoneTask = (id) => {
		const currentTask = tasksDone.find((task) => task.id === id);
		const filteredTasks = tasksDone.filter((task) => task.id !== id);

		setTasksDone(filteredTasks);
		setTasksToDo((prev) => [...prev, currentTask]);
	};

	return (
		<div className="exercise-container">
			<h2 className="title">Lista de tareas</h2>
			{tasksToDo.length > 0 && (
				<div className="list-container">
					<h3 className="subtitle">Tareas por hacer</h3>
					<ul className="list-item">
						{tasksToDo.map((task) => {
							return (
								<li
									key={task.id}
									className="not-done-task item"
									onClick={() => handleUnDoneTask(task.id)}
								>
									<h4>{task.title}</h4>
								</li>
							);
						})}
					</ul>
				</div>
			)}
			{tasksDone.length > 0 && (
				<div className="list-container">
					<h3 className="subtitle">Tareas completadas</h3>
					<ul className="list-item">
						{tasksDone.map((task) => {
							return (
								<li key={task.id} className="done-task item" onClick={() => handleDoneTask(task.id)}>
									<h4>{task.title}</h4>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};
