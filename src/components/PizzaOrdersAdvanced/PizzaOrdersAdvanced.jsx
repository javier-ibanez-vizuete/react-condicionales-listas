import { useState } from "react";
import "./PizzaOrdersAdvanced.css";

const INITIAL_PIZZA_ORDERS = [
	{ id: 1, orderName: "Pizza Margherita", price: 8.5, isComplete: false },
	{ id: 2, orderName: "Pizza Marinara", price: 7.5, isComplete: false },
	{ id: 3, orderName: "Pizza Quattro Formaggi", price: 10.0, isComplete: false },
	{ id: 4, orderName: "Pizza Diavola", price: 9.5, isComplete: false },
	{ id: 5, orderName: "Pizza Prosciutto e Funghi", price: 10.5, isComplete: false },
	{ id: 6, orderName: "Pizza Capricciosa", price: 11.0, isComplete: false },
	{ id: 7, orderName: "Pizza Ortolana", price: 9.0, isComplete: false },
	{ id: 8, orderName: "Pizza Frutti di Mare", price: 11.5, isComplete: false },
	{ id: 9, orderName: "Pizza Quattro Stagioni", price: 11.0, isComplete: false },
	{ id: 10, orderName: "Pizza Boscaiola", price: 10.5, isComplete: false },
];

const COMPLETED_ORDERS = [];

const INITIAL_NEW_ORDER_STATE = {
	orderName: "",
	price: "",
	isComplete: false,
};

export const PizzaOrdersAdvanced = () => {
	const [orders, setOrders] = useState(INITIAL_PIZZA_ORDERS);
	const [completed, setCompleted] = useState(COMPLETED_ORDERS);
	const [newOrder, setNewOrder] = useState(INITIAL_NEW_ORDER_STATE);
	const [error, setError] = useState("");

	const { orderName, price } = newOrder;

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setError("");
		setNewOrder((prev) => ({ ...prev, [name]: value }));
	};

	const onSubmitForm = (event) => {
		event.preventDefault();
		const { orderName, price } = newOrder;

		if (!orderName) return setError("Debes rellenar el campo Pizza");
		if (price <= 0) return setError("Debes rellenar el campo Precio");

		const newId = `${orderName.slice(0, 3)}-${Date.now().toString().slice(-4)}`;
		const upgradedOrder = { ...newOrder, id: newId };

		setOrders((prev) => [...prev, upgradedOrder]);
		setNewOrder(INITIAL_NEW_ORDER_STATE);
	};

	const handleButtonsOrders = (id, isCompleted) => {
		if (!isCompleted) {
			// AQUI HAY UNA PREGUNTA (MIRAR PDA)
			const order = orders.find((order) => order.id === id);
			if (!order) return;
			const { isComplete } = order;

			const restOrders = orders.filter((order) => order.id !== id);
			setOrders(restOrders);

			const newOrder = { ...order, isComplete: !isComplete };
			setCompleted((prev) => [...prev, newOrder]);
		}
		if (isCompleted) {
			const order = completed.find((order) => order.id === id);
			if (!order) return;
			const { isComplete } = order;

			const restOrders = completed.filter((order) => order.id !== id);
			setCompleted(restOrders);

			const newOrder = { ...order, isComplete: !isComplete };
			setOrders((prev) => [...prev, newOrder]);
		}
	};

	return (
		<div className="exercise-container">
			<h2 className="title">PIZZERIA MANAGER</h2>

			<form action="#" method="get" onSubmit={onSubmitForm} className="pizza-form-container">
				<h4>Nuevo Pedido</h4>
				<label htmlFor="orderName">Pizza:</label>
				<input
					type="text"
					name="orderName"
					id="orderName"
					value={orderName}
					onChange={handleInputChange}
					placeholder="Introduce el nombre de la Pizza"
				/>

				<label htmlFor="price">Precio:</label>
				<input
					type="number"
					name="price"
					id="price"
					value={price}
					onChange={handleInputChange}
					placeholder="Introduce un precio"
				/>

				<button className="btn" type="submit">
					Agregar Pedido
				</button>
			</form>

			<section className="not-ready-orders-container order-style-container">
				<h4>Pedidos Pendientes</h4>
				{orders.length <= 0 && <span className="no-items-text">No hay pedidos pendientes</span>}
				<ul className="orders-list">
					{orders.map((order) => (
						<li
							key={order.id}
							className="order-item"
							onClick={() => handleButtonsOrders(order.id, order.isComplete)}
						>
							<p>Pizza: {order.orderName}</p>
							<p>Precio: {order.price} €</p>
						</li>
					))}
				</ul>
			</section>

			<section className="completed-orders-container order-style-container">
				<h4>Pedidos Completados</h4>
				{completed.length <= 0 && <span className="no-items-text">No hay pedidos completados</span>}
				{completed.map((order) => (
					<li
						key={order.id}
						className="order-item"
						onClick={() => handleButtonsOrders(order.id, order.isComplete)}
					>
						<p>Pizza: {order.orderName}</p>
						<p>Precio: {order.price} €</p>
					</li>
				))}
			</section>

			<section className="total-amount-invoiced-container">
				<div>
					<h4>Total Facturado</h4>
					{completed.length <= 0 && <span className="no-items-text">Aun no hay datos de facturacion</span>}
					{completed.length > 0 && <span>{completed.reduce((acc, order) => acc + order.price, 0)} €</span>}
				</div>
				<div>
					<h4>Pizzas Vendidas</h4>
					{completed.length <= 0 && <span className="no-items-text">No se han vendido pizzas</span>}
					{completed.length > 0 && <span>{completed.length}</span>}
				</div>
			</section>
		</div>
	);
};
