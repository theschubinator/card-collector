const defaultState = {
	brand: '',
	year: '',
	player: '',
	card_number: '',
	image_url: 'http://res.cloudinary.com/theschubinator/image/upload/v1521854831/dzawqarj7i3qlbdf1dic.jpg',
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