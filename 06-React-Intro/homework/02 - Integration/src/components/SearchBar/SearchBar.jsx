import { useState } from "react";

export default function SearchBar(props) {
  
	const [character, setCharacter] = useState();

	function nuevoPersonaje(e) {
		setCharacter(e.target.value);
	}

	return (
		<div>
			<input type="search" onChange={nuevoPersonaje} />

			<button
				onClick={() => {
					props.onSearch(character);
				}}
			>
				Agregar
			</button>
		</div>
	);
}
