export const filterReducer = (state = 'added_date', action) => {
	switch(action.type) {
		case 'SET_FILTER':
			return action.payload;
		default:
			return state;
	}
}