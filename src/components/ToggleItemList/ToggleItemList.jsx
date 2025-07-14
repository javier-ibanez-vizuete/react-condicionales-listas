import { useState } from "react";
import "./ToggleItemList.css";

const toggles = [
	{ id: 1, label: "Notificaciones", isActive: false },
	{ id: 2, label: "Modo oscuro", isActive: false },
	{ id: 3, label: "Sonido", isActive: false },
	{ id: 4, label: "Ubicación", isActive: false },
	{ id: 5, label: "Actualizaciones automáticas", isActive: false },
	{ id: 6, label: "Ahorro de energía", isActive: false },
	{ id: 7, label: "Bluetooth", isActive: false },
	{ id: 8, label: "Wi-Fi", isActive: false },
	{ id: 9, label: "Datos móviles", isActive: false },
	{ id: 10, label: "Sincronización", isActive: false },
];

export const ToggleItemList = () => {
	const [list, setList] = useState(toggles);

	const onButtonClick = (id) => {
		const selectedItem = list.find((item) => item.id === id);
		if (!selectedItem) return;
		const { isActive } = selectedItem;
		const newItem = { ...selectedItem, isActive: !isActive };

		const filteredList = list.filter((item) => item.id !== id);
		const newList = [...filteredList, newItem];
		setList(newList);
	};

	return (
		<div className="exercise-container">
			<h2 className="title">Listado de Activo/Inactivo</h2>
			<ul className="list-item">
				{list
					.sort((itemA, itemB) => itemB.id - itemA.id)
					.map((item) => (
						<li key={item.id} className={item.isActive ? "active-item product-item" : "product-item"}>
							<h4>{item.label}</h4>
							<button onClick={() => onButtonClick(item.id)} className="btn">
								{item.isActive ? "Desactivar" : "Activar"}
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};
