import { useState } from "react";
import "./MovieFavorites.css";

const movies = [
	{ id: 1, title: "El laberinto del fauno" },
	{ id: 2, title: "Mar adentro" },
	{ id: 3, title: "Ocho apellidos vascos" },
	{ id: 4, title: "Volver" },
	{ id: 5, title: "Los otros" },
	{ id: 6, title: "El secreto de sus ojos" },
	{ id: 7, title: "Mientras dure la guerra" },
	{ id: 8, title: "La isla mínima" },
	{ id: 9, title: "Tesis" },
	{ id: 10, title: "Campeones" },
];

export const MovieFavorites = () => {
	const [favorites, setFavorites] = useState(movies);

	const handleButtonClick = (id) => {
		const film = favorites.find((film) => film.id === id);
		if (!film) return;
		// Realmente no necesitamos localizar la pelicula no? no vamos a hacer nada con ella

		const restFilm = favorites.filter((film) => film.id !== id);
		setFavorites(restFilm);
	};

	return (
		<div className="exercise-container">
			<h2 className="title">Peliculas Favoritas</h2>
			<section className="favorite-films-container">
				<h3>Favoritas</h3>
				{favorites.length > 0 && (
					<ul className="films-container">
						{favorites.map((film) => {
							return (
								<li key={film.id}>
									<h4>{film.title}</h4>
									<button className="btn" onClick={() => handleButtonClick(film.id)}>
										Eliminar de favoritos
									</button>
								</li>
							);
						})}
					</ul>
				)}
				{favorites.length <= 0 && <span className="no-items-text">No tienes peliculas favoritas</span>}
			</section>
		</div>
	);
};
