import React from 'react'
import Form from './Form';

const SignUpPage = (props) => (
	<div className="sign-up form">
		<h1>Sign Up</h1>
		<Form newUser={true} history={props.history} />
	</div>
);

export default SignUpPage;