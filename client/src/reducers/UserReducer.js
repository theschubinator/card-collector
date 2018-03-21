export const userReducer = (state=null, action) => {
	switch(action.type) {
		case 'LOG_IN_USER':
			return action.payload
		case 'LOG_OUT_USER':
			return state=null;
		default:
			return state
	}
}