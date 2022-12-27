import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";

// console.log(characters);
// 		console.log(character);
// 		let bandera = false;
// 		for (let i = 0; i < characters.length; i++) {
// 			if (characters[i].id === parseInt(character)) {
// 				bandera = false;
// 			} else {
// 				bandera = true;
// 			}
// 		}

function App() {
	function onSearch(character) {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name) {
					let bandera = false;
					if (
						characters.findIndex((x) => x.id === parseInt(character)) === -1
					) {
						bandera = true;
					}
					if (bandera) {
						setCharacters((oldChars) => [...oldChars, data]);
					}
				} else {
					window.alert("No hay personajes con ese ID");
				}
			});
	}

	function aleatorioSearch() {
		function getRandomArbitrary(min, max) {
			return Math.random() * (max - min) + min;
		}

		const numAl = Math.round(getRandomArbitrary(1, 826));
		console.log(numAl);
		fetch(`https://rickandmortyapi.com/api/character/${numAl}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name) {
					let bandera = false;
					if (characters.findIndex((x) => x.id === parseInt(numAl)) === -1) {
						bandera = true;
					}
					if (bandera) {
						setCharacters((oldChars) => [...oldChars, data]);
					} else {
						window.alert("El personaje ya existe");
					}
				}
			});
	}

	function onClose(id) {
		setCharacters(characters.filter((x) => x.id !== id));
	}

	const [characters, setCharacters] = useState([]);

	return (
		<div className="App" style={{ padding: "25px" }}>
			<Nav onSearch={onSearch} aleatorioSearch={aleatorioSearch} />

			<Cards characters={characters} onClose={onClose} />
		</div>
	);
}

export default App;
