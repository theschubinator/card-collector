import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import NewCardModal from './NewCardModal';
import CardStats from '../UserStats/CardStats';
import '../../styles/card.css';

const filterBy = (cards, filters) => {
	if(filters.filter === 'rookie') {
		return cards.filter((card => card.rookie)); 
	}

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

const organizeBy = (cards, filteredType=null, organizeType=null) => {
	let finalArray = [];
	let currentArray = [];
	let currentType = cards[0][filteredType];
	
	if (!organizeType) { return cards }

	for(let i=0; i < cards.length; i++) {
		const currentCard = cards[i];
		if (currentCard[filteredType] !== currentType && i !== cards.length-1) { 
			currentType = currentCard[filteredType];
			const sortedByType = currentArray.sort((a, b) => {
				if(a[organizeType] < b[organizeType]) return -1;
				if(a[organizeType] > b[organizeType]) return 1;
				return 0;
			})

			finalArray = finalArray.concat(sortedByType);
			currentArray = [currentCard];

		} else if(i === cards.length-1) {
			if (currentType === currentCard[filteredType]) {
				currentArray = currentArray.concat(currentCard);
				const sortedByYear = currentArray.sort((a, b) => {
					if(a[organizeType] < b[organizeType]) return -1;
					if(a[organizeType] > b[organizeType]) return 1;
					return 0;
				})

				finalArray = finalArray.concat(sortedByYear);
			} else {
				finalArray = finalArray.concat(currentArray);
				finalArray = finalArray.concat(currentCard);
			}
		} else {
			currentArray.push(currentCard);
		}
	}
	
	return finalArray;
}

const filterByBrand = (cards, filters, filteredType, organizeType) => {
	const filteredCards = filterBy(cards, filters);
	return filteredCards.length > 0 ? organizeBy(filteredCards, filteredType, organizeType) : filteredCards
	// return organizeBy(filteredCards, filteredType, organizeType);
}

const filterByPlayer = (cards, filters, filteredType, organizeType) => {
	const filteredCards = filterBy(cards, filters);
	return filteredCards.length > 0 ? organizeBy(filteredCards, filteredType, organizeType) : filteredCards
	// return organizeBy(filteredCards, filteredType, organizeType);
}

const filterByValue = (cards, filters, filteredType, organizeType) => {
	const filteredCards = filterBy(cards, filters);
	return filteredCards.length > 0 ? organizeBy(filteredCards, filteredType, organizeType) : filteredCards
	// return organizeBy(filteredCards, filteredType, organizeType);
}

const filterByNewest = (cards, filters, filteredType, organizeType) => {
	const filteredCards = filterBy(cards, filters);
	return filteredCards.length > 0 ? organizeBy(filteredCards, filteredType, organizeType) : filteredCards
	// return organizeBy(filteredCards, filteredType, organizeType);
}

const filterByRookie = (cards, filters, filteredType, organizeType) => {
	const filteredCards = filterBy(cards, filters);
	return filteredCards.length > 0 ? organizeBy(filteredCards, filteredType, organizeType) : filteredCards
	// return organizeBy(filteredCards, filteredType, organizeType);
}

const filterCards = (cards, filters) => {
	switch(filters.filter) {
		case 'created_at':
			return filterByNewest(cards, filters)
		case 'brand':
			return filterByBrand(cards, filters, 'brand', 'year');
		case 'last_name':
			return filterByPlayer(cards, filters, 'last_name', 'year');
		case 'rookie':
			return filterByRookie(cards, filters, 'rookie', 'last_name');
		case 'value':
			return filterByValue(cards, filters, 'value', 'last_name');
		case 'year':
		return filterByValue(cards, filters, 'year', 'last_name');
	}
}
	
const showCards = (props) => {
	let showCards;

	if (props.user && props.user.username) {
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