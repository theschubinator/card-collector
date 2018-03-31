import axios from 'axios';
import { showError } from './loginForm';
import { toggleLoginModal } from './toggles';

const url = 'http://localhost:3001'

//ACTION CREATORS

const loadUser = (user) => ({
		type: 'LOG_IN_USER',
		payload: user
})

export const logOutUser = () => {
	localStorage.removeItem("token");
	return { type: 'LOG_OUT_USER' }
};

const removeCardFromState = (card) => ({
	type: 'DELETE_CARD',
	payload: card
})

export const authUser = (authorized) => ({
	type: 'AUTH_USER',
	payload: authorized
})


// ASYNC ACTIONS //

// export const loadAllUsers = () => {
// 	axios.get(`${url}/api/users`)
// 		.then((response) => {debugger})
// }

export const logInUser = (user, history) => {
	return dispatch => {
		axios.post(`/auth_user`, { user })
		.then((response) => {
			dispatch(loadUser(response.data.user))
			if(!localStorage.getItem('token')) {
				dispatch(authUser(true));
				localStorage.setItem('token', response.data.auth_token);
				dispatch(toggleLoginModal());
				history.push(`/${response.data.user.id}/cards`)
			}
		})
		.catch((error) => dispatch(showError(error.response.data.error)))
	}
}

export const signUpUser = (user, history) => {
	return dispatch => {
		axios.post(`/api/users`, { user })
		.then(response => { 
			dispatch(loadUser(response.data.user))
			localStorage.setItem('token', response.data.auth_token)
			dispatch(toggleLoginModal());
			history.push(`/${response.data.user.id}/cards`)
		})
		.catch((error) => dispatch(showError(error.response.data.error)))
	}
}

export const deleteCard = (user_id, card_id, history) => {
	return dispatch => {
		axios.delete(`/api/users/${user_id}/cards/${card_id}`)
		.then((response => dispatch(removeCardFromState(response.data))))
		history.push(`/${user_id}/cards`)
	}
}