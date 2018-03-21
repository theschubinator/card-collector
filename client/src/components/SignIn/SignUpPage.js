import React from 'react'
import Form from './Form';

const SignUpPage = (props) => (
	<div>
		<h1>Sign Up</h1>
		<Form newUser={true} history={props.history} />
	</div>
);

export default SignUpPage;