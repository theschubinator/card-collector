import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import '../styles/card.css';

const UserCardsPage = (props) => {
	let showCards;
	if (props.user) {
		showCards = props.user.cards.map((card) => ( 
			<div className="col-sm-6 col-md-4 col-lg-3"><Card key={card.id} card={card} /></div> )
		);
	}
	
	return (
		<div className="container user-cards">
			<div className="row">
				{showCards}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.user
})

export default connect(mapStateToProps)(UserCardsPage);