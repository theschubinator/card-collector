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
	return total.toFixed(2);
}

const CardStats = (props) => {
	return props.user  &&
		<div id="card-stats">
			<h4>
				<span className="stats-row">
					<span id="total"><strong>Total:</strong></span>
					<span>Cards: {props.user.cards.length}</span>
					<span>Rookie Cards: {rookieCards(props.user.cards)}</span>
					<span>Value: ${cardValue(props.user.cards)}</span>
				</span>
				<span id="select">Sort By:
					<select>
						<option>Added Date</option>
						<option>Brand</option>
						<option>Player</option>
						<option>Rookie</option>
						<option>Value</option>
						<option>Year</option>
					</select>
					<a>Advanced Filters</a>
				</span>
			</h4>		
		</div>
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps)(CardStats);