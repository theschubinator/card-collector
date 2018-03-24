import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import { toggleModal } from '../../actions/loginForm';

const PopUpModal = (props) => {
  const handleClose = () => {
    props.toggleModal();
  }

	const renderForm = () => {
		if (props.loginForm.form === "sign-in") {
			return 	<SignInPage />
		} else if(props.loginForm.form === "sign-up") {
			return <SignUpPage />
		}
	}

	return (
		<div>
			<Modal show={props.loginForm.showModal}>
				<Modal.Body>
					{ renderForm() }
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

const mapStateToProps = (state) => ({
	loginForm: state.loginForm
});

export default connect(mapStateToProps, { toggleModal })(PopUpModal);