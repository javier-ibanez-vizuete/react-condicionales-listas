import { useState } from "react";
import "./AddFruitForm.css";

const INITIAL_FRUIT_LIST = ["Melon", "Manzana", "Papaya"];

export const AddFruitForm = () => {
	const [fruits, setFruits] = useState(INITIAL_FRUIT_LIST);
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		const { value } = event.target;
		setInputValue(value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		if (!inputValue.length) return setError;
		setFruits((prev) => [...prev, inputValue]);
		setInputValue("");
	};

	return (
		<div className="exercise-container">
			<h2 className="title">Formularo de frutas</h2>
			<form action="#" method="get" className="form" onSubmit={handleFormSubmit}>
				<label htmlFor="inputFruit">Agrega una Fruta a la lista</label>
				<input
					type="text"
					name="inputFruit"
					id="inputFruit"
					value={inputValue}
					placeholder="Escribe una fruta"
					onChange={handleInputChange}
				/>
				<button type="submit">Agregar</button>
			</form>
			<ul className="list-item">
				{!fruits.length > 0 && <h4>HOLA</h4>}
				{fruits.map((fruit, index) => (
					<li key={`${fruit}-${index}`} className="item">
						<h5>{fruit}</h5>
					</li>
				))}
			</ul>
		</div>
	);
};
