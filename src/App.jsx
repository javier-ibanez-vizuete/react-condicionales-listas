import { NameList } from "./components/NameList/NameList";
import { ProductList } from "./components/ProductList/ProductList";

export const App = () => {
	return (
		<div className="container main-container">
			<h1>EJERCICIOS CONDICIONALES Y LISTAS</h1>
			<NameList />
			<ProductList />
		</div>
	);
};
