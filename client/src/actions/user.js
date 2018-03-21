import axios from 'axios';
import { showError } from './loginForm';

const url = 'http://localhost:3001/api'

//ACTION CREATORS

const loadUser = (user) => ({
	type: 'LOG_IN_USER',
	payload: user
})

export const logOutUser = () => ({
		type: 'LOG_OUT_USER'
});


// ASYNC ACTIONS //

export const loadAllUsers = () => {
	axios.get(`${url}/users`)
		.then((response) => {debugger})
}

export const logInUser = (user, history) => {
	return dispatch => {
		axios.post(`${url}/sessions`, { user })
		.then((response) => {
			if(response.data.error)
				dispatch(showError(response.data.error))
			else
				dispatch(loadUser(response.data))
				.then(history.push('/'));
		})
		.catch((error) => { console.log(error) })
	}
}