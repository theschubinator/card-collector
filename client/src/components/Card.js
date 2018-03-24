import React from 'react';

const Card = ({card}) => (
	<div className="card">
			<h3>#{card.card_number} - {card.player}</h3>
			<h4>{card.year} - {card.brand}</h4>
			<p>{card.rookie && <p className="rookie-card">Rookie Card!</p>}</p>
			<img src={card.image_url} alt={card.player} />
			<p className="card-value">Value: ${card.value}</p>
	</div>
);

export default Card;