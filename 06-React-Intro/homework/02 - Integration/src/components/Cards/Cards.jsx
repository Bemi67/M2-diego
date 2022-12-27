import Card from "../Card/Card";

export default function Cards(props) {
	const { characters, onClose } = props;

	return (
		<div>
			{characters.map((x) => (
				<Card
					id={x.id}
					name={x.name}
					species={x.species}
					gender={x.gender}
					image={x.image}
					onClose={onClose}
				/>
			))}
		</div>
	);
}
