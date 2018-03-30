import axios from 'axios';
import { toggleNewCardModal, clearFormData } from './cardForm.js';

const url = 'http://localhost:3001'

const addCard = (card) => {
	return {
		type: 'ADD_CARD',
		payload: card
	}
};


const addErrors = (errors) => ({
	type: 'ADD_ERROR_MESSAGE',
	payload: errors
})

export const toggleDeletePage = () => ({
	type: 'TOGGLE_DELETE_PAGE'
})

const updateCard = (card) => {
	return {
		type: 'UPDATE_CARD',
		payload: card
	}
}

const setAllCards = (cards) => ({
	type: 'LOAD_ALL_CARDS',
	payload: cards
})

// ASYNC Actions

export const saveCard = (data, user_id, history, image) => {

	if (image) { 	data.image_url = image }
	data.value = parseFloat(data.value) * 100;
	
	const checkImageOrientation = () => { 
		const img = document.getElementById('preview-image')
		if(img.clientWidth > img.clientHeight) {
			data.orientation = 'landscape'
		} else {
			data.orientation = 'portrait'
		}
	} 

	checkImageOrientation();
	
	const newCardRequest = () => {
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
	}

	const editCardRequest = () => {
		return dispatch => {
			axios.put(`${url}/api/users/${user_id}/cards/${data.id}`, { data })
			.then((response ) =>  {
				dispatch(updateCard(response.data))
				dispatch(toggleNewCardModal());
				dispatch(clearFormData())
			})
			.catch((error) => { debugger })
		}
	}
	return data.type === "edit" ? editCardRequest() : newCardRequest();
};

export const loadAllCards = () => {
	return dispatch => {
		axios.get(`${url}/api/cards`)
		.then((response) => dispatch(setAllCards(response.data)))
		.catch((error) => console.log(error))
	}
}