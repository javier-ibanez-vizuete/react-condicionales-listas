import { useState } from "react";
import "./RemoveItemList.css";
import { items } from "../../utils/items/items";

export const RemoveItemList = () => {
	const [itemList, setItemList] = useState(items);

	const handleListItem = (currentItem) => {
		const filteredItems = itemList.filter((item) => item !== currentItem);
		setItemList(filteredItems);
	};

	return (
		<div className="exercise-container">
			<h2 className="title">Eliminar objetos de una lista</h2>
			<ul className="list-item">
				{!itemList.length > 0 && (
					<li>
						<p>No hay Objetos en la lista</p>
						<button onClick={() => setItemList(items)} className="btn">
							Agregar Objetos
						</button>
					</li>
				)}
				{itemList.map((item, index) => {
					return (
						<li key={`${item}-${index}`} className="item">
							<h4>{item}</h4>
							<button className="btn" onClick={() => handleListItem(item)}>
								Borrar Item
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
