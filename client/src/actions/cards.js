import axios from 'axios';
const url = 'http://localhost:3001'

const getCards = (cards) => ({
	type: 'LOAD_CARDS',
	payload: cards
});

export const loadUserCards = (user_id) => {
	return dispatch => {
		axios.get(`${url}/api/users/${user_id}/cards`)
			.then((response) => dispatch(getCards(response.data)))
			.catch(error => { console.log(error) })
	}
};


export const saveCard = (data) => {
	alert(`${data.brand} - ${data.player} was saved`)
}