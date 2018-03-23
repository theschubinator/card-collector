import React from 'react'
import Form from './Form';

const SignInPage = (props) => (
	<div className="sign-in form">
		<h2>Login to Your Account</h2>
		<Form newUser={false} history={props.history} />
	</div>
);

export default SignInPage;