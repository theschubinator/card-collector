const defaultState = {
	toggleNewCardModal: false,
	toggleLoginModal: false,
	toggleDeletePage: { card_id: null },
	toggleAdvancedFilter: false
}

export const toggleReducer = (state=defaultState, action) => {
	switch(action.type) {
		case 'TOGGLE_LOGIN':
			return { ...state, toggleLoginModal: action.payload }
		case 'TOGGLE_NEW_CARD_MODAL':
			return { ...state, toggleNewCardModal: !state.toggleNewCardModal }
		case 'TOGGLE_DELETE_PAGE':
			const card_id = { card_id: action.payload }
			return { ...state, toggleDeletePage: card_id }
		case 'TOGGLE_ADVANCE_FILTER':
			return { ...state, toggleAdvancedFilter: !state.toggleAdvancedFilter }
		default:
			return state
	}
}