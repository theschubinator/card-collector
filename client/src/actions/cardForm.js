export const updateCardForm = (name, value) => ({
	type: 'UPDATE_CARD_FORM',
	payload: { name, value }
});

export const setCardFormOnEdit = (card) => ({
	type: 'UPDATE_FOR_EDIT',
	payload: card
})

export const clearFormData = () => ({
	type: 'CLEAR_CARD_FORM'
})

export const toggleNewCardModal = () => ({
	type: 'TOGGLE_NEW_CARD_MODAL'
})

export const addError = (error) => ({
	type: 'ADD_ERROR_MESSAGE',
	payload: error
})

export const clearErrors = () => ({
	type: 'CLEAR_ERRORS'
})