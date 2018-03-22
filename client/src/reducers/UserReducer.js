export const userReducer = (state=null, action) => {
	switch(action.type) {
		case 'LOG_IN_USER':
			return action.payload
		case 'LOG_OUT_USER':
			return state=null;
		case 'ADD_CARD':
			return {...state, cards: state.cards.concat(action.payload)};
		default:
			return state
	}
}