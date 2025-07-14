import { useState } from "react";
import "./EditableList.css";

const editableNames = [
	{ id: 1, name: "Laura", isEditing: false },
	{ id: 2, name: "Pedro", isEditing: false },
	{ id: 3, name: "Isabel", isEditing: false },
	{ id: 4, name: "Marcos", isEditing: false },
	{ id: 5, name: "Lucía", isEditing: false },
	{ id: 6, name: "Andrés", isEditing: false },
	{ id: 7, name: "Elena", isEditing: false },
	{ id: 8, name: "Javier", isEditing: false },
	{ id: 9, name: "Sofía", isEditing: false },
	{ id: 10, name: "Manuel", isEditing: false },
	{ id: 11, name: "Carmen", isEditing: false },
	{ id: 12, name: "Diego", isEditing: false },
	{ id: 13, name: "Natalia", isEditing: false },
	{ id: 14, name: "Raúl", isEditing: false },
	{ id: 15, name: "Patricia", isEditing: false },
];

export const EditableList = () => {
	const [list, setList] = useState(editableNames);
	const [inputValue, setInputValue] = useState("");

	const handleButtonClick = (id, isEditingNow) => {
		if (!isEditingNow || (isEditingNow && !inputValue)) {
			const currentUser = list.find((user) => user.id === id);
			if (!currentUser) return;
			const { isEditing } = currentUser;
			const filteredUsers = list.filter((user) => user.id !== id);
			const defaultUsers = filteredUsers.map((user) => {
				if (user.isEditing) user.isEditing = false;
				return user;
			});

			const newUser = { ...currentUser, isEditing: !isEditing };
			setList([...defaultUsers, newUser]);
		}
		if (isEditingNow && inputValue) {
			const currentUser = list.find((user) => user.id === id);
			if (!currentUser) return;

			const filteredUsers = list.filter((user) => user.id !== id);
			const newUser = { ...currentUser, name: inputValue, isEditing: false };
			setList([...filteredUsers, newUser]);
			setInputValue("");
		}
	};

	const handleInputChange = (event, name, id) => {
		const { value } = event.target;
		setInputValue(value);
	};

	return (
		<div className="exercise-container">
			<h2 className="title">Lista de nombres editables</h2>
			<ul className="list-item">
				{list
					.sort((userA, userB) => userB.id - userA.id)
					.map((user) => (
						<li key={user.id} className="item editables-list-names">
							<div className="button-container">
								<h4>{user.name}</h4>
								<button className="btn" onClick={() => handleButtonClick(user.id, user.isEditing)}>
									{user.isEditing && !inputValue && "CANCELAR EDICIÓN"}
									{user.isEditing && inputValue && "CONFIRMAR EDICIÓN"}
									{!user.isEditing && "EDITAR"}
								</button>
							</div>
							{user.isEditing && (
								<input
									type="text"
									name="name"
									placeholder={`Modifica el nombre de ${user.name}`}
									value={inputValue}
									onChange={(event) => handleInputChange(event, user.name, user.id)}
								/>
							)}
						</li>
					))}
			</ul>
		</div>
	);
};

// ESTOY ATASCADO EN LA PARTE DE MOFICAR EL NOMBRE MEDIANTE EL INPUT
