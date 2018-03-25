import axios from 'axios';
import { toggleNewCardModal, clearFormData } from './cardForm.js';

const url = 'http://localhost:3001'

const addCard = (card) => ({
	type: 'ADD_CARD',
	payload: card
});

const addErrors = (errors) => ({
	type: 'ADD_ERROR_MESSAGE',
	payload: errors
})

export const toggleDeletePage = () => ({
	type: 'TOGGLE_DELETE_PAGE'
})

// ASYNC Actions

export const saveCard = (data, user_id, history, image) => {
	if (image) { 	data.image_url = image }

	return dispatch => {
		axios.post(`${url}/api/users/${user_id}/cards`, { data })
		.then((response) => {
			dispatch(addCard(response.data));
			dispatch(toggleNewCardModal());
			dispatch(clearFormData());
			history.push(`/${user_id}/cards`)
		})
		.catch((error) => dispatch(addErrors(error.response.data)));
	}
};