export const userReducer = (state=null, action) => {
	switch(action.type) {
		case 'LOG_IN_USER':
			return action.payload
		case 'LOG_OUT_USER':
			return state=null;
		case 'ADD_CARD':
			return {...state, cards: state.cards.concat(action.payload)};
		case 'DELETE_CARD':
			const cards =  state.cards.filter(card => card.id !== action.payload.card_id);
			return { ...state, cards: cards }
		default:
			return state
	}
}