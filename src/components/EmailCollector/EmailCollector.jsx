import { useState } from "react";
import "./EmailCollector.css";

const EMAIL_DATA_BASE = [
	{ email: "pepito@perez.com", id: 0 },
	{ email: "juan@ejemplo.com", id: 1 },
	{ email: "maria@gmail.com", id: 2 },
	{ email: "ana.lopez@outlook.com", id: 3 },
	{ email: "carlos_sanchez@yahoo.es", id: 4 },
	{ email: "laura98@hotmail.com", id: 5 },
];

const INITIAL_STATE_NEW_EMAIL = {
	email: "",
	id: "",
};

export const EmailCollector = () => {
	const [emails, setEmails] = useState(EMAIL_DATA_BASE);
	const [newEmail, setNewEmail] = useState(INITIAL_STATE_NEW_EMAIL);
	const [error, setError] = useState("");

	const onInputChange = (event) => {
		const { name, value } = event.target;
		setError("");
		setNewEmail((prev) => ({ ...prev, [name]: value }));
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const { email } = newEmail;
		if (!email) return setError("Debes introducir un Correo Electronico");
		if (!email.includes("@")) return setError("El Correo electronico no es valido (Missing: @)");
		if (email.length < 2) return setError("Correo electronico no valido");

		const newId = `${email.slice(0, 2)}-${Date.now().toString().slice(-4)}`;
		const newUser = { email, id: newId };

		setEmails((prev) => [...prev, newUser]);
		setNewEmail(INITIAL_STATE_NEW_EMAIL);
	};

	return (
		<div className="exercise-container">
			<h2 className="title">Email Collector</h2>
			<form action="#" method="get" className="emails-form-container" onSubmit={handleFormSubmit}>
				<label htmlFor="email">Correo Electrónico</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Introduce un correo electrónico"
					value={newEmail.email}
					onChange={onInputChange}
				/>
				<button type="submit" className="btn">
					Agregar
				</button>
				{error && <h4 className="error">{error}</h4>}
			</form>
			<div className="email-list">
				<h3>Emails Registrados</h3>
				<ul>
					{emails.map((email, index) => (
						<li key={email.id}>
							{index + 1}: {email.email}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
