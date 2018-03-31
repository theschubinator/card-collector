export const authorizedReducer = (state=false, action) => {
	switch(action.type) {
		case 'AUTH_USER':
			return action.payload;
		case 'LOG_OUT_USER':
			return false;
		default:
			return state;
	}
}