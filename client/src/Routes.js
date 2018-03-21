import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import SignInPage from './components/SignIn/SignInPage';
import SignUpPage from './components/SignIn/SignUpPage';
import UserProfilePage from './components/UserProfilePage';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path ="/sign-in" component={SignInPage} />
		<Route path="/sign-up" component={SignUpPage} />
		<Route path="/:user_id/profile" component={UserProfilePage} />
	</Switch>
);

export default Routes;