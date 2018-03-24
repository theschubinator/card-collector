import React from 'react'
import { FormWithRouter } from './Form';

import '../../styles/form.css';

const SignInPage = (props) => {
	return (
	<div className="sign-in form">
		<h2>Login to Your Account</h2>
		<FormWithRouter newUser={false} />
	</div>
	)
};

export default SignInPage;