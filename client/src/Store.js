import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { userReducer } from './reducers/UserReducer';
import { loginFormReducer } from './reducers/LoginFormReducer';
import { cardFormReducer } from './reducers/CardFormReducer';
import { toggleReducer } from './reducers/ToggleReducer';
import { filterReducer } from './reducers/FilterReducer';
import { CardsReducer } from './reducers/CardsReducer';
import { authorizedReducer } from './reducers/AuthorizedReducer';

const reducers = combineReducers({
	user: userReducer,
	cards: CardsReducer,
	loginForm: loginFormReducer,
	cardForm: cardFormReducer,
	toggles: toggleReducer,
	filters: filterReducer,
	auth: authorizedReducer
});

export default createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
); 