import React from 'react';
import { connect } from 'react-redux';


const rookieCards = (cards) => {
	return cards.filter((card) => card.rookie).length;
}

const cardValue = (cards) => {
	let total = 0;
	cards.forEach((card) => {
		if(card.value) {
			total += parseFloat(card.value)
		}
	})
	return total;
}

const CardStats = (props) => {
	return props.user  &&
		<div className="row">
			<div className="col-sm-12">
				<p>Total Cards: {props.user.cards.length} </p>
				<p>Rookie Cards: {rookieCards(props.user.cards)}</p>
				<p>Total Value: ${cardValue(props.user.cards)}</p>
			</div>
		</div>
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps)(CardStats);