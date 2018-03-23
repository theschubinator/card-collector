const defaultState = {
	username: '',
	password: '',
	password_confirmation: '',
	error: null,
	showModal: false,
	form: ''
};

export const loginFormReducer = (state=defaultState, action) => {
	switch(action.type) {
		case 'UPDATE_FORM':
			return { ...state, [action.payload.name]: action.payload.value }
		case 'SHOW_ERROR':
			return { ...state, error: action.payload }
		case 'TOGGLE_MODAL':
			return { ...state, showModal: !state.showModal, form: action.payload }
		case 'CLEAR_FORM':
			return defaultState
		default: 
			return defaultState
	}
}