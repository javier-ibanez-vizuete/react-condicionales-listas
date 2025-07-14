import { AddFruitForm } from "./components/AddFruitForm/AddFruitForm";
import { DynamicShoppingList } from "./components/DynamicShoppingList/DynamicShoppingList";
import { NameList } from "./components/NameList/NameList";
import { ProductList } from "./components/ProductList/ProductList";
import { RemoveItemList } from "./components/RemoveItemList/RemoveItemList";
import { TaskList } from "./components/TaskList/TaskList";

export const App = () => {
	return (
		<div className="container main-container">
			<h1>EJERCICIOS CONDICIONALES Y LISTAS</h1>
			<NameList />
			<ProductList />
			<TaskList />
			<AddFruitForm />
			<RemoveItemList />
			<DynamicShoppingList />
		</div>
	);
};
