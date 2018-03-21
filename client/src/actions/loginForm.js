export const updateForm = (name, value) => ({
	type: 'UPDATE_FORM',
	payload: { name, value }
})

export const showError = (error) => ({
	type: 'SHOW_ERROR',
	payload: error
})

export const clearFormData = () => ({
	type: 'CLEAR_FORM'
})