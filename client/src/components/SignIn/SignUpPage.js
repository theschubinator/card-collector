import React from 'react'

import { FormWithRouter } from './Form';
import '../../styles/form.css';

const SignUpPage = (props) => (
	<div className="sign-up form">
		<h2>Create a New Account</h2>
		<FormWithRouter newUser={true} />
	</div>
);

export default SignUpPage;