import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import NewCardModal from './NewCardModal';
import CardStats from '../UserStats/CardStats';
import '../../styles/card.css';


const filterCards = (cards, filter) => {
	switch(filter) {
		case 'added_date':
			return cards;
		case 'brand':
			return cards.sort((a, b) => {
				if(a.brand < b.brand) return -1;
				if(a.brand > b.brand) return 1;
				return 0;
			})
		case 'player':
			return cards.sort((a, b) => {
				if(a.last_name < b.last_name) return -1;
				if(a.last_name > b.last_name) return 1;
				return 0;
			})
		case 'rookie':
			debugger
			return cards.filter((card => card.rookie));
		case 'value-ascending':
			return cards.sort((a, b) => {
				if(a.value < b.value) return -1;
				if(a.value > b.value) return 1;
				return 0;
			})
			case 'value-descending':
			return cards.sort((a, b) => {
				if(b.value < a.value) return -1;
				if(b.value > a.value) return 1;
				return 0;
			})
		case 'year-ascending':
			return cards.sort((a, b) => {
				if(a.year < b.year) return -1;
				if(a.year > b.year) return 1;
				return 0;
			})
		case 'year-descending':
		return cards.sort((a, b) => {
			if(b.year < a.year) return -1;
			if(b.year > a.year) return 1;
			return 0;
		})

	}
}
	

const showCards = (props) => {
	let showCards;
	if (props.user && props.user.username) {
		const filteredCards = filterCards(props.user.cards, props.filters);
		return filteredCards.map((card) => ( 
			<div key={card.id} className="col-sm-6 col-md-4 col-lg-3"><Card card={card} user_id={props.user.id} history={props.history} /></div> )
		);
		// return showCards = props.user.cards.map((card) => ( 
		// 	<div key={card.id} className="col-sm-6 col-md-4 col-lg-3"><Card card={card} user_id={props.user.id} history={props.history} /></div> )
		// );
	}
}



const UserCardsPage = (props) => {
	// let showCards;
	// if (props.user && props.user.username) {
	// 	showCards = props.user.cards.map((card) => ( 
	// 		<div key={card.id} className="col-sm-6 col-md-4 col-lg-3"><Card card={card} user_id={props.user.id} history={props.history} /></div> )
	// 	);
	// }
	
	return (
		<div id="main" className="container user-cards">
			<div className="row">
				<CardStats />
				{ showCards(props) }
				<NewCardModal />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.user,
	filters: state.filters
})

export default connect(mapStateToProps)(UserCardsPage);