import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import Store from './Store';
import { logInUser } from './actions/user';
import registerServiceWorker from './registerServiceWorker';

const token = localStorage.getItem('token');
if (token) {
	Store.dispatch(logInUser(token))
}

ReactDOM.render(
	<Router>
		<Provider store={Store}>
			<App />
		</Provider>
	</Router>, 	
	document.getElementById('root')
);
registerServiceWorker();
