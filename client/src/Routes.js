import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import SignInPage from './components/SignIn/SignInPage';
import SignUpPage from './components/SignIn/SignUpPage';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path ="/sign-in" component={SignInPage} />
		<Route path="/sign-up" component={SignUpPage} />
	</Switch>
);

export default Routes;