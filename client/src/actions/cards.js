import axios from 'axios';
const url = 'http://localhost:3001'

const addCard = (card) => ({
	type: 'ADD_CARD',
	payload: card
});

// ASYNC Actions

export const saveCard = (data, user_id) => {
	return dispatch => {
		axios.post(`${url}/api/users/${user_id}/cards`, { data })
		.then((response) => dispatch(addCard(response.data)))
		.catch(error => { console.log(error )})
	}
};