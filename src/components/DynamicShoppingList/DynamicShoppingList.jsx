import { useState } from "react";
import "./DynamicShoppingList.css";

const INITIAL_OBJECT_STRUCTURE = {
	name: "",
	quantity: "",
	id: "",
};

const INITIAL_LIST_ITEM = [];

export const DynamicShoppingList = () => {
	const [object, setObject] = useState(INITIAL_OBJECT_STRUCTURE);
	const [list, setList] = useState(INITIAL_LIST_ITEM);
	const [error, setError] = useState("");

	const { name, quantity } = object;

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setError("");
		setObject((prev) => ({ ...prev, [name]: value }));
	};

	const onSubmitForm = (event) => {
		event.preventDefault();
		const { name, quantity } = object;

		if (!name) return setError("Debes introducir un nombre de producto");
		if (!quantity) return setError("Debes introducir una cantidad de producto");
		if (quantity <= 0) return setError("La cantidad introducida no puede ser Inferior o igual a (0)");

		const newId = `${name}-${quantity}`;
		const newObject = { ...object, id: newId };

		setObject((prev) => ({ ...prev, id: newId }));
		setList((prev) => [...prev, newObject]);
		setObject(INITIAL_OBJECT_STRUCTURE);
	};

	return (
		<div className="exercise-container">
			<h2 className="title">Lista de compra dinamica</h2>
			<form action="#" method="get" className="form" onSubmit={onSubmitForm}>
				<label htmlFor="productName">Nombre del Producto</label>
				<input
					type="text"
					name="name"
					id="productName"
					placeholder="Introduce el nombre del producto"
					onChange={handleInputChange}
					value={name}
				/>
				<label htmlFor="productQuantity">Cantidad de Producto</label>
				<input
					type="number"
					name="quantity"
					id="productQuantity"
					placeholder="Introduce la cantidad de producto"
					onChange={handleInputChange}
					value={quantity}
				/>
				<button type="submit" className="btn">
					Agregar Producto
				</button>
				{error && <h4 className="error">{error}</h4>}
			</form>
			<ul className="list-item">
				{list.map((item) => {
					return (
						<li key={item.id} className="item">
							<h4>{item.name}</h4>
							<p>{item.quantity}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
