import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import NewCardModal from './NewCardModal';
import '../../styles/card.css';

const UserCardsPage = (props) => {
	let showCards;
	if (props.user && props.user.username) {
		showCards = props.user.cards.map((card) => ( 
			<div key={card.id} className="col-sm-6 col-md-4 col-lg-3"><Card card={card} user_id={props.user.id} history={props.history} /></div> )
		);
	}
	
	return (
		<div id="main" className="container user-cards">
			<div className="row">
				{showCards}
				<NewCardModal />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.user,
})

export default connect(mapStateToProps)(UserCardsPage);