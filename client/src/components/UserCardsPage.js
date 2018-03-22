import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

class UserCardsPage extends Component {
	render() {
		const showCards = this.props.user.cards.map((card) => ( 
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
	user: state.user
})

export default connect(mapStateToProps)(UserCardsPage);