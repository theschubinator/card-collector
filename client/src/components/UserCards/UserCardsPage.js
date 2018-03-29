import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import NewCardModal from './NewCardModal';
import CardStats from '../UserStats/CardStats';
import { filterResults } from '../../logic/filters.js';
import '../../styles/card.css';

const showCards = (props) => {
	if (props.user && props.user.username) {
		const filteredCards = filterResults(props.user.cards, props.filters)
		return filteredCards.map((card) => ( 
			<div key={card.id} className="col-sm-6 col-md-4 col-lg-3"><Card card={card} user_id={props.user.id} history={props.history} /></div> )
		);
	}
}

const UserCardsPage = (props) => (
		<div id="main" className="container user-cards">
			<div className="row">
				<CardStats />
				{ showCards(props) }
				<NewCardModal />
			</div>
		</div>
);

const mapStateToProps = (state) => ({
	user: state.user,
	filters: state.filters
})

export default connect(mapStateToProps)(UserCardsPage);