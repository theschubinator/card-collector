const defaultState = {
	id: '',
	brand: '',
	year: '',
	first_name: '',
	last_name: '',
	card_number: '',
	image_url: 'http://res.cloudinary.com/theschubinator/image/upload/v1521934596/c3mqjnvmy4ido233yrht.jpg',
	rookie: false,
	value: '',
	orientation: 'portrait',
	showModal: false,
	errors: [],
	message: '',
	type: ''
}

export const cardFormReducer = (state=defaultState, action) => {
	switch(action.type) {
		case 'UPDATE_CARD_FORM':
			return { ...state, [action.payload.name]: action.payload.value };
		case 'UPDATE_FOR_EDIT':
			return { ...action.payload, errors: [], type:'edit' };
		case 'TOGGLE_NEW_CARD_MODAL':
			return { ...state, showModal: !state.showModal };
		case 'ADD_ERROR_MESSAGE':
			return { ...state, errors: state.errors.concat(action.payload.errors) };
		case 'CLEAR_ERRORS':
			return { ...state, errors: [] };
		case 'CLEAR_CARD_FORM':
			return defaultState;
		case 'SET_CARD_FORM_TYPE':
			debugger
		default:
			return state
	}
}