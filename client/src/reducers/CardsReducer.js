export const CardsReducer = (state = {}, action) => {
	switch(action.type) {
		case 'LOAD_ALL_CARDS':
			return action.payload
		default: 
			return state;
	}
}