import axios from 'axios';
import { showError } from './loginForm';

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


// ASYNC ACTIONS //

export const loadAllUsers = () => {
	axios.get(`${url}/api/users`)
		.then((response) => {debugger})
}

export const logInUser = (user, history) => {
	return dispatch => {
		axios.post(`${url}/auth_user`, { user })
		.then((response) => {
			dispatch(loadUser(response.data.user))
			if(!localStorage.getItem('token')) {
				localStorage.setItem('token', response.data.auth_token);
				history.push(`${response.data.user.id}/profile`);
			}
		})
		.catch((error) => dispatch(showError(error)))
	}
}

export const signUpUser = (user, history) => {
	return dispatch => {
		axios.post(`${url}/api/users`, { user })
		.then(response => { 
			dispatch(loadUser(response.data.user))
			localStorage.setItem('token', response.data.auth_token)
		})
		.then(() => history.push('/'))
		.catch((error) => dispatch(showError(error.response.data.error)))
	}
}