import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInUser, signUpUser } from '../../actions/user';
import { updateForm, showError, clearFormData } from '../../actions/loginForm';
import { withRouter } from 'react-router-dom';

class Form extends Component {
	componentWillUnmount() {
		this.props.clearFormData();
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if(!this.props.newUser) {
			this.props.logInUser(this.props.loginForm, this.props.history);
		} else if((this.props.newUser && this.props.loginForm.password === this.props.loginForm.password_confirmation)) {
			this.props.signUpUser(this.props.loginForm, this.props.history);
		} else {
			this.props.showError('Password and Password Confirmation do not match');
		}
	}

	handleOnChange = (e) => {
		const { name, value } = e.target;
		this.props.updateForm(name, value);
	}

	renderPasswordConfirmation = (
		<input
			type="password"
			name="password_confirmation"
			placeholder="Enter Password Confirmation"
			value={this.props.passwordConfirmation}
			onChange={this.handleOnChange}
		/>
	);

	showError = () => {
		if(	this.props.loginForm.error) {
			if(Array.isArray(	this.props.loginForm.error)) {
				return this.props.loginForm.error.map((e) => (
					<p className="error">{e}</p>
				));
			} else {
				return <p className="error">{this.props.loginForm.error}</p>
			}
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input 
					type="text" 
					name="username" 
					placeholder="Enter Username"
					value={this.props.username}
					onChange={this.handleOnChange} 
				/><br />
				<input
					type="password"
					name="password"
					placeholder="Enter Password"
					value={this.props.password}
					onChange={this.handleOnChange}
				/><br />
				{
					this.props.newUser && this.renderPasswordConfirmation
				}
				<input
					className="submit"
					type="submit"
					value={this.props.newUser ? 'Sign Up' : 'Sign In'}
				/>
				{	this.showError() }
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	loginForm: state.loginForm
})

export const FormWithRouter = withRouter(connect(mapStateToProps, { logInUser, updateForm, showError, clearFormData, signUpUser } )(Form));



export default connect(mapStateToProps, { logInUser, updateForm, showError, clearFormData, signUpUser } )(Form);