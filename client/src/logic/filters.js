//sort by ascending or descending order
const sortOrder = (arrayToSort, filter, order) => arrayToSort.sort((a, b) => {
	const n1 = order === "ascending" ? -1 : 1;
	const n2 = order === "ascending" ? 1 : -1;
	if(a[filter] < b[filter]) return n1;
	if(a[filter] > b[filter]) return n2;
	return 0;
})

const filterBy = (cards, filters) => {
	if(filters.filterBy === 'rookie') {
		return cards.filter((card => card.rookie)); 
	}
	return sortOrder(cards, filters.filterBy, filters.orderBy);
}

const organizeBy = (cards, filters) => {
	const { filterBy, orderBy, organizedBy } = filters;
	//return cards as is if no additional filtering is required...
	if (!organizedBy) { return cards }

	let finalArray = [];
	let currentArray = [];
	let currentType = cards[0][filterBy];
	
	for(let i=0; i < cards.length; i++) {
		const currentCard = cards[i];
		if (currentCard[filterBy] !== currentType && i !== cards.length-1) { 
			// when we run out of current matches, sort the current array of matches
			// and add them to our finalArray.
			currentType = currentCard[filterBy];
			finalArray = finalArray.concat(sortOrder(currentArray, organizedBy, orderBy));
			currentArray = [currentCard];

		} else if(i === cards.length-1) {
			// if the last card belongs to the current match
			// add it to the currentArray, sort the array, and
			// add it to the finalArray
			if (currentType === currentCard[filterBy]) {
				currentArray = currentArray.concat(currentCard);
				finalArray = finalArray.concat(sortOrder(currentArray, organizedBy, orderBy));
			} else {
				//if the final card does not match the current match
				//sort currentArray and add to finalArray
				//and finally... add the finalCard to the array
				finalArray = finalArray.concat(sortOrder(currentArray, organizedBy, orderBy));
				finalArray = finalArray.concat(currentCard);
			}
		} else {
			currentArray.push(currentCard);
		}
	}
	return finalArray;
}

export const filterResults = (cards, filters) => {
	const filteredCards = filterBy(cards, filters);
	return filteredCards.length > 0 ? organizeBy(filteredCards, filters) : filteredCards
}