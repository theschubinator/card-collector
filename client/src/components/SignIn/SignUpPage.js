import React from 'react'
import Form from './Form';

import '../../styles/form.css';

const SignUpPage = (props) => (
	<div className="sign-up form">
		<h2>Create a New Account</h2>
		<Form newUser={true} history={props.history} />
	</div>
);

export default SignUpPage;