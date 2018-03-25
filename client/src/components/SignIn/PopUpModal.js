import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import { toggleLoginModal } from '../../actions/toggles';

const PopUpModal = (props) => {
  const handleClose = () => {
    props.toggleLoginModal();
  }

	const renderForm = () => {
		if (props.toggles.toggleLoginModal === "sign-in") {
			return 	<SignInPage />
		} else if(props.toggles.toggleLoginModal === "sign-up") {
			return <SignUpPage />
		}
	}

	return (
		<div>
			<Modal show={props.toggles.toggleLoginModal === 'sign-in' || props.toggles.toggleLoginModal === 'sign-up' }>
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
	toggles: state.toggles
});

export default connect(mapStateToProps, { toggleLoginModal })(PopUpModal);