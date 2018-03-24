const defaultState = {
	brand: '',
	year: '',
	player: '',
	card_number: '',
	image_url: 'http://res.cloudinary.com/theschubinator/image/upload/v1521863301/sjkfzlpbekocd6dm8uhm.jpg',
	rookie: false,
	value: ''
}

export const cardFormReducer = (state=defaultState, action) => {
	switch(action.type) {
		case 'UPDATE_CARD_FORM':
			return { ...state, [action.payload.name]: action.payload.value };
		case 'CLEAR_CARD_FORM':
			return defaultState;
		default:
			return state
	}
}