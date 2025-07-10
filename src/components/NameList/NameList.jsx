import "./NameList.css";
const names = ["Juan", "John", "Javi", "Laura", "Raquel", "Mario", "Fer"];

export const NameList = () => {
	console.log(names);

	return (
		<div className="name-list exercise-container">
			<h2 className="title">Lista de Nombres</h2>
			<ul className="list-item">
				{names.map((name, index) => {
					return (
						<li key={`${name}-${index}`} className="item">
							{name}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
