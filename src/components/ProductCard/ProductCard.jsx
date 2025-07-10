import "./ProductCard.css";

export const ProductCard = ({ name, price }) => {
	return (
		<div className="product-card">
			<div>
				<p>Nombre:</p>
				<h5>{name}</h5>
			</div>
			<div>
				<p>Precio:</p>
				<h5>{price}</h5>
			</div>
		</div>
	);
};
