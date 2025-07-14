import { useState } from "react";
import "./UserFilterList.css";
import { USERS_DATA_BASE } from "../../utils/users/users";

export const UserFilterList = () => {
	const [users, setUsers] = useState(USERS_DATA_BASE);
	const [inputValue, setInputValue] = useState("");
	const [userView, setUserView] = useState([]);

	const handleInputChange = (event) => {
		const { value } = event.target;
		setInputValue(value);
		const usersFound = users.filter((user) => user.name.toLowerCase().includes(value.trim().toLowerCase())); //PODRIA UTILIZAR startWith (para filtrar solo por el comienzo)
		setUserView([...usersFound]);
		if (!usersFound.length) return setUserView([]);
		if (!value.trim()) return setUserView([]);
	};
	return (
		<div className="exercise-container">
			<h2 className="title">Filtrado de usuarios</h2>
			<input
				type="search"
				name="name"
				id="name"
				value={inputValue}
				placeholder="Introduzca el nombre de un usuario"
				onChange={handleInputChange}
			/>
			<div className="users-container">
				{userView.length <= 0 && <span className="no-items-text">No hay coincidencias en la busqueda</span>}
				{userView.map((user) => {
					return (
						<h4 key={user.id} className="user-card">
							{user.name}
						</h4>
					);
				})}
			</div>
		</div>
	);
};
