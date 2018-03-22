import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUserCards } from '../actions/cards';
import Card from './Card';

class UserCardsPage extends Component {
	componentDidMount() {
		this.props.loadUserCards(this.props.user.id);
	}

	render() {
		const showCards = this.props.userCards.map((card) => ( 
			<Card key={card.id} card={card} /> )
		);

		return (
			<div>
				{showCards}
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	userCards: state.userCards,
	user: state.user
})

export default connect(mapStateToProps, { loadUserCards })(UserCardsPage);