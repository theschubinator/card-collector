export const updateCardForm = (name, value) => ({
	type: 'UPDATE_CARD_FORM',
	payload: { name, value }
});

export const clearFormData = () => ({
	type: 'CLEAR_CARD_FORM'
})