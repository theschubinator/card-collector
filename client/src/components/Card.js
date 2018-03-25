import React from 'react';

const Card = ({card}) => {
	const orientationClassName = card.orientation === 'portrait'? 'portrait' : 'landscape';
	const rookieClassName = card.rookie ? 'card rookie' : 'card';
	const valueClassName = card.value ? 'valued' : 'unvalued'
	
	return (
	<div className={`${orientationClassName} ${rookieClassName} ${valueClassName}`}>
			<h3>#{card.card_number} - {card.player}</h3>
			<h4>{card.year} - {card.brand}</h4>
			{ card.rookie && <p className="rookie-card">Rookie Card!</p> }
			<img src={card.image_url} alt={card.player} />
			{ card.value && <p className="card-value">Value: ${card.value}</p> }
	</div>
	)
};

export default Card;