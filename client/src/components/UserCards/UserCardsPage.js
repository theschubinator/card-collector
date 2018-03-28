import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import NewCardModal from './NewCardModal';
import CardStats from '../UserStats/CardStats';
import '../../styles/card.css';

const filterBy = (cards, filters) => {
	if(filters.order === 'ascending') {
		return cards.sort((a, b) => {
			if(a[filters.filter] < b[filters.filter]) return -1;
			if(a[filters.filter] > b[filters.filter]) return 1;
			return 0;
		})
	} else {
		return cards.sort((a, b) => {
			if(b[filters.filter] < a[filters.filter]) return -1;
			if(b[filters.filter] > a[filters.filter]) return 1;
			return 0;
		})
	}
}

const organizeByYear = (cards) => {
	let cardArray = [];
	let currentBrandArray = [];
	let currentBrand = cards[0].brand;

	for(let i=0; i < cards.length; i++) {
		const currentCard = cards[i];

		if (currentCard.brand !== currentBrand) { 
			currentBrand = currentCard.brand;
			
			const sortedByYear = currentBrandArray.sort((a, b) => {
				if(a.year < b.year) return -1;
				if(a.year > b.year) return 1;
				return 0;
			})

			cardArray = cardArray.concat(sortedByYear);
			currentBrandArray = [currentCard];

		} else if(i === cards.length-1) {
			currentBrandArray.push(currentCard);
			const sortedByYear = currentBrandArray.sort((a, b) => {
				if(a.year < b.year) return -1;
				if(a.year > b.year) return 1;
				return 0;
			})

			cardArray = cardArray.concat(sortedByYear);

		} else {
			currentBrandArray.push(currentCard);
		}
	}
	
	return cardArray;
}

const filterByBrand = (cards, filters) => {
	const filteredCards = filterBy(cards, filters);
	return organizeByYear(filteredCards);
}

const filterCards = (cards, filters) => {
	switch(filters.filter) {
		case 'created_at':
			return filterBy(cards, filters);
		case 'brand':
			return filterByBrand(cards, filters);
		case 'last_name':
			return filterBy(cards,filters);
		case 'rookie':
			return cards.filter((card => card.rookie));
		case 'value':
			return filterBy(cards,filters);
		case 'year':
			return filterBy(cards,filters);
	}
}
	
const showCards = (props) => {
	let showCards;
	if (props.user && props.user.username) {
		// const filteredCards = filterCards(props.user.cards, props.filters);
		const filteredCards = filterCards(props.user.cards, props.filters)
		return filteredCards.map((card) => ( 
			<div key={card.id} className="col-sm-6 col-md-4 col-lg-3"><Card card={card} user_id={props.user.id} history={props.history} /></div> )
		);
	}
}

const UserCardsPage = (props) => {

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