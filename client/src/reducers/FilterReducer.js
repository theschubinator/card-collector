export const filterReducer = (state = {filter: 'created_at', order:'ascending'}, action) => {
	switch(action.type) {
		case 'SET_FILTER':
			return { filter: action.payload.filter, order: action.payload.order };
		default:
			return state;
	}
}