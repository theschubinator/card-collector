import React from 'react'
import Form from './Form';

const SignInPage = (props) => (
	<div className="sign-in form">
		<h1>Sign In</h1>
		<Form newUser={false} history={props.history} />
	</div>
);

export default SignInPage;