export const toggleLoginModal = (form_type = false) => ({
	type: 'TOGGLE_LOGIN',
	payload: form_type
})

export const toggleNewCardModal = () => ({
	type: 'TOGGLE_NEW_CARD_MODAL'
})

export const toggleDeletePage = (card_id = null) => ({
	type: 'TOGGLE_DELETE_PAGE',
	payload: card_id
})

export const toggleAdvancedFilter = () => ({
	type: 'TOGGLE_ADVANCE_FILTER'
})