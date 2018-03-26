import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortBy } from '../../actions/filters';


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

class CardStats extends Component {

	componentWillMount() {
		this.props.sortBy('added_date');
	}

	handleChange = (e) => {
		this.props.sortBy(e.target.value);
	}

	render() {
		return (
			this.props.user &&
			<div id="card-stats">
			<h4>
				<span className="stats-row">
					<span id="total"><strong>Total:</strong></span>
					<span>Cards: {this.props.user.cards.length}</span>
					<span>Rookie Cards: {rookieCards(this.props.user.cards)}</span>
					<span>Value: ${cardValue(this.props.user.cards)}</span>
				</span>
				<span id="select">Sort By:
					<select onChange={this.handleChange}>
						<option value="added_date" defaultValue>Added Date</option>
						<option value="brand">Brand</option>
						<option value="player">Player</option>
						<option value="rookie">Rookie</option>
						<option value="value-ascending">Value Ascending</option>
						<option value="value-descending">Value Descending</option>
						<option value="year-ascending">Year Ascending</option>
						<option value="year-descending">Year Descending</option>
					</select>
					<a>Advanced Filters</a>
				</span>
			</h4>		
		</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
	filters: state.filters
});

export default connect(mapStateToProps, { sortBy })(CardStats);