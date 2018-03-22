const defaultState = {
	brand: '',
	year: '',
	player: '',
	card_number: '',
	image: 'https://www.oldsportscards.com/wp-content/uploads/2017/07/1984-Topps-123-Dan-Marino-Rookie-Card-209x300.jpg',
	rookie: false,
	value: ''
}

export const cardFormReducer = (state=defaultState, action) => {
	switch(action.type) {
		case 'UPDATE_CARD_FORM':
			return { ...state, [action.payload.name]: action.payload.value };
		default:
			return state
	}
}