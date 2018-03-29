export const filterReducer = (state = {filterBy: 'created_at', orderBy:'ascending'}, action) => {
	switch(action.type) {
		case 'SET_FILTER':
			return action.payload;
		default:
			return state;
	}
}