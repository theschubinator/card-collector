import React from 'react';

const Card = ({card}) => {
	const orientationClassName = card.orientation === 'portrait'? 'portrait' : 'landscape';

	const rookieClassName = card.rookie ? 'card rookie' : 'card';

	return (
	<div className={`${orientationClassName} ${rookieClassName}`}>
			<h3>#{card.card_number} - {card.player}</h3>
			<h4>{card.year} - {card.brand}</h4>
			<img src={card.image_url} alt={card.player} />
			<p className="card-value">Value: ${card.value}</p>
	</div>
	)
};

export default Card;