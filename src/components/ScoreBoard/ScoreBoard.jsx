import { useState } from "react";
import "./ScoreBoard.css";
import { PLAYERS_DATA_BASE } from "../../utils/players/players";

export const ScoreBoard = () => {
	const [playerList, setPlayerList] = useState(PLAYERS_DATA_BASE);

	const handleButtonClick = (id) => {
		const currentPlayer = playerList.find((player) => player.id === id);
		if (!currentPlayer) return;

		const { score } = currentPlayer;
		const newScore = score + 1;
		const playerUpgraded = { ...currentPlayer, score: newScore };

		const filteredPlayers = playerList.filter((player) => player.id !== id);
		if (!filteredPlayers.length) return;
		setPlayerList([...filteredPlayers, playerUpgraded]);
	};

	return (
		<div className="exercise-container">
			<h2 className="title">Tabla de puntuacion</h2>
			<ul className="list-item">
				{playerList
					.sort((playerA, playerB) => playerB.score - playerA.score)
					.map((player, index) => {
						return (
							<li key={player.id} className="item player-card">
								<span className="player-position">{`${index + 1}`}</span>
								<h4>{`Jugador ${player.name}`}</h4>
								<h3>{`Puntuacion ${player.score}`}</h3>
								<button className="btn" onClick={() => handleButtonClick(player.id)}>
									Puntar + 1
								</button>
							</li>
						);
					})}
			</ul>
		</div>
	);
};
