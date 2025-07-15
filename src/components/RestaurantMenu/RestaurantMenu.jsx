import { useState } from "react";
import "./RestaurantMenu.css";

const INITIAL_MENU = [
	{ id: 0, name: "Tortilla de patatas", price: 6.5, category: "Entrante" },
	{ id: 1, name: "Paella", price: 12.9, category: "Principal" },
	{ id: 2, name: "Tarta de queso", price: 4.5, category: "Postre" },
	{ id: 3, name: "Gazpacho", price: 5.0, category: "Entrante" },
	{ id: 4, name: "Croquetas caseras", price: 7.0, category: "Entrante" },
	{ id: 5, name: "Pollo al ajillo", price: 11.5, category: "Principal" },
	{ id: 6, name: "Merluza a la romana", price: 13.0, category: "Principal" },
	{ id: 7, name: "Flan de huevo", price: 4.0, category: "Postre" },
	{ id: 8, name: "Churros con chocolate", price: 5.5, category: "Postre" },
	{ id: 9, name: "Ensalada mixta", price: 6.0, category: "Entrante" },
];

export const RestaurantMenu = () => {
	const [menu, setMenu] = useState(INITIAL_MENU);
	const [category, setCategory] = useState("");

	const handleSelectChange = (event) => {
		const { name, value } = event.target;
		console.log("Cambiando el select", value);
		console.log("Cambiando el select", name);
		setCategory(value);
	};

	return (
		<div className="exercise-container">
			<h2 className="title">Menu Restaurante</h2>
			<div className="filter-menu-container">
				<label htmlFor="category">Filtrar</label>
				<select name="category" id="category" value={category} onChange={handleSelectChange}>
					<option value="">Elige una Categoria</option>
					{INITIAL_MENU.reduce((acc, plate) => {
						const { category } = plate;
						if (!acc.includes(category)) acc.push(category);
						return acc;
					}, []).map((category, index) => (
						<option key={`${category}-${index}`} value={category.toLowerCase()}>
							{category}
						</option>
					))}
				</select>
			</div>

			<section className="menu-list">
				{!category &&
					menu.map((plate) => (
						<div key={plate.id} className="plate-card">
							<h4>{plate.name}</h4>
							<h4 className="plate-price">{plate.price}</h4>
						</div>
					))}
				{category &&
					menu
						.filter((plate) => plate.category.toLowerCase() === category)
						.map((plate) => (
							<div key={plate.id} className="plate-card">
								<h4>{plate.name}</h4>
								<h4 className="plate-price">{plate.price}</h4>
							</div>
						))}
			</section>
		</div>
	);
};
