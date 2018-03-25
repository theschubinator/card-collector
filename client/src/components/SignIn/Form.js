import React from 'react';
import { connect } from 'react-redux';
import { logInUser, signUpUser } from '../../actions/user';
import { updateForm, showError } from '../../actions/loginForm';
import { toggleLoginModal } from '../../actions/toggles';
import { withRouter } from 'react-router-dom';

const Form = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		if(!props.newUser) {
			props.logInUser(props.loginForm, props.history);
		} else if((props.newUser && props.loginForm.password === props.loginForm.password_confirmation)) {
			props.signUpUser(props.loginForm, props.history);
		} else {
			props.showError('Password and Password Confirmation do not match');
		}
	}

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		props.updateForm(name, value);
	}

	const renderPasswordConfirmation = (
		<input
			className="password"
			type="password"
			name="password_confirmation"
			placeholder="Password Confirmation"
			value={props.passwordConfirmation}
			onChange={handleOnChange}
		/>
	);

	const showError = () => {
		if(	props.loginForm.error) {
			if(Array.isArray(	props.loginForm.error)) {
				return props.loginForm.error.map((e) => (
					<p className="error">{e}</p>
				));
			} else {
				return <p className="error">{props.loginForm.error}</p>
			}
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
				type="text" 
				name="username" 
				placeholder="Username"
				value={props.username}
				onChange={handleOnChange} 
			/><br />
			<input
				className="password"
				type="password"
				name="password"
				placeholder="Password"
				value={props.password}
				onChange={handleOnChange}
			/><br />
			{
				props.newUser && renderPasswordConfirmation
			}
			<input
				className="submit"
				type="submit"
				value={props.newUser ? 'Sign Up' : 'Sign In'}
			/>
			{	showError() }
		</form>
	);
}

const mapStateToProps = (state) => ({
	loginForm: state.loginForm,
	toggles: state.toggles
})

export const FormWithRouter = withRouter(connect(mapStateToProps, { logInUser, updateForm, showError, toggleLoginModal, signUpUser } )(Form));

export default connect(mapStateToProps, { logInUser, updateForm, showError, toggleLoginModal, signUpUser } )(Form);