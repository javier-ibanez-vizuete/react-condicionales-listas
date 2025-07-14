import { AddFruitForm } from "./components/AddFruitForm/AddFruitForm";
import { DynamicShoppingList } from "./components/DynamicShoppingList/DynamicShoppingList";
import { EditableList } from "./components/EditableList/EditableList";
import { NameList } from "./components/NameList/NameList";
import { OrderManager } from "./components/OrderManager/OrderManager";
import { ProductList } from "./components/ProductList/ProductList";
import { RemoveItemList } from "./components/RemoveItemList/RemoveItemList";
import { TaskList } from "./components/TaskList/TaskList";
import { ToggleItemList } from "./components/ToggleItemList/ToggleItemList";
import { UserFilterList } from "./components/UserFilterList/UserFilterList";

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
			<ToggleItemList />
			<EditableList />
			<OrderManager />
			<UserFilterList />
		</div>
	);
};
