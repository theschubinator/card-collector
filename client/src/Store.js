import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { userReducer } from './reducers/UserReducer';
import { loginFormReducer } from './reducers/LoginFormReducer';
import { cardFormReducer } from './reducers/CardFormReducer';

const reducers = combineReducers({
	user: userReducer,
	loginForm: loginFormReducer,
	cardForm: cardFormReducer
});

export default createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
); 