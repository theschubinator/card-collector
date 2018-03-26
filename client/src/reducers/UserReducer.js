export const userReducer = (state=null, action) => {
	switch(action.type) {
		case 'LOG_IN_USER':
			return action.payload
		case 'LOG_OUT_USER':
			return state=null;
		case 'ADD_CARD':
			return {...state, cards: state.cards.concat(action.payload)};
		case 'UPDATE_CARD':
			const newState = { ...state }
			return updateCards(newState, action);
		case 'DELETE_CARD':
			const cards =  state.cards.filter(card => card.id !== action.payload.card_id);
			return { ...state, cards: cards }
		default:
			return state
	}
}


const updateCards = (state, action) => {
	for(let i = 0; i < state.cards.length; i++) {
		if(state.cards[i].id === action.payload.id) {
			state.cards[i] = action.payload
			return state
		}
	}
}