import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import SignInPage from './components/SignIn/SignInPage';
import SignUpPage from './components/SignIn/SignUpPage';
import UserProfilePage from './components/UserProfilePage';
import NewCardPage from './components/UserCards/NewCardPage';
import UserCardsPage from './components/UserCards/UserCardsPage';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path ="/sign-in" component={SignInPage} />
		<Route path="/sign-up" component={SignUpPage} />
		{/* <Route path="/:user_id/profile" component={UserProfilePage} /> */}
		<Route path="/card/new" component={NewCardPage} />
		<Route path="/:user_id/cards" component={UserCardsPage} />
	</Switch>
);

export default Routes;