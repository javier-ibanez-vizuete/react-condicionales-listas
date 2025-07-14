import { useState } from "react";
import "./OrderManager.css";

const INITIAL_ORDERS = [
	{ id: 1, name: "Hamburguesa con queso", isReady: false, price: 11.5 },
	{ id: 2, name: "Pizza margarita", isReady: false, price: 10.0 },
	{ id: 3, name: "Ensalada César", isReady: false, price: 9.0 },
	{ id: 4, name: "Tacos al pastor", isReady: false, price: 12.0 },
	{ id: 5, name: "Pollo al curry", isReady: false, price: 13.5 },
	{ id: 6, name: "Sopa de tomate", isReady: false, price: 6.5 },
	{ id: 7, name: "Filete con patatas", isReady: false, price: 16.0 },
	{ id: 8, name: "Sushi mixto", isReady: false, price: 14.0 },
	{ id: 9, name: "Pasta carbonara", isReady: false, price: 11.0 },
	{ id: 10, name: "Helado de vainilla", isReady: false, price: 4.5 },
];

export const OrderManager = () => {
	const [orders, setOrders] = useState(INITIAL_ORDERS);
	const [readyOrders, setReadyOrders] = useState([]);

	const handleOrderClick = (id, ready) => {
		if (!ready) {
			const currentOrder = orders.find((order) => order.id === id);
			const filteredOrders = orders.filter((order) => order.id !== id);
			if (!currentOrder) return;

			setOrders([...filteredOrders]);
			const orderUpgraded = { ...currentOrder, isReady: true };
			setReadyOrders((prev) => [...prev, orderUpgraded]);
			return;
		}
		if (ready) {
			const currentOrder = readyOrders.find((order) => order.id === id);
			console.log("currentOrder", currentOrder);

			const filteredOrders = readyOrders.filter((order) => order.id !== id);
			console.log("filteredOrders", filteredOrders);

			if (!currentOrder) return;

			setReadyOrders([...filteredOrders]);
			const orderUpgraded = { ...currentOrder, isReady: false };
			setOrders((prev) => [...prev, orderUpgraded]);
			return;
		}
	};

	return (
		<div className="exercise-container">
			<h2 className="title">Gestor de ordenes</h2>
			<div className="order-container">
				<h3>Pedidos por completar</h3>
				{orders.length <= 0 && <span className="no-items-text">No hay pedidos Pendientes</span>}
				{orders.length > 0 && (
					<ul className="list-item">
						{orders
							.sort((orderA, orderB) => orderB.id - orderA.id)
							.map((order) => {
								return (
									<li key={order.id} className="order-product">
										<h4>{`Pedido: ${order.name} - Precio: ${order.price}`}</h4>
										<button
											className="btn"
											onClick={() => handleOrderClick(order.id, order.isReady)}
										>
											Completar pedido
										</button>
									</li>
								);
							})}
					</ul>
				)}
			</div>
			<div className="order-container">
				<h3>Pedidos Completados</h3>
				{readyOrders.length <= 0 && <span className="no-items-text">No hay pedidos Completados</span>}
				{readyOrders.length > 0 && (
					<ul className="list-item">
						{readyOrders
							.sort((orderA, orderB) => orderB.id - orderA.id)
							.map((order) => {
								return (
									<li key={order.id} className="item">
										<h4>{`Pedido de ${order.name} Completado`}</h4>
										<button
											className="btn"
											onClick={() => handleOrderClick(order.id, order.isReady)}
										>
											Repetir Pedido
										</button>
									</li>
								);
							})}
					</ul>
				)}
			</div>
		</div>
	);
};
