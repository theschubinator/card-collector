import React from 'react';

const Card = ({card}) => (
	<div>
		<h1>{card.brand}</h1>
		<h3>{card.year}</h3>
		{card.rookie && <p>Rookie Card!</p>}
		<p>{card.player}</p>
		<p>{card.value}</p>
		<img src={card.image} alt="photo" />
	</div>
);

export default Card;