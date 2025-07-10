import { products } from "../../utils/products/products";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";

export const ProductList = () => {
	return (
		<div className="exercise-container">
			<h2 className="title">Lista de Productos</h2>
			<div className="cards-container">
				{products.map((product, index) => (
					<ProductCard name={product.name} price={product.price} key={`${product.name}-${index}`} />
				))}
			</div>
		</div>
	);
};
