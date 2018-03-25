import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { NewCardPageWithRouter } from './NewCardPage';
import { toggleNewCardModal } from '../actions/cardForm';
import '../styles/card-form.css';

const NewCardModal = (props) => {
  const handleClose = () => {
    props.toggleNewCardModal();
  }

	return (
		<div className="card-form">
			<Modal show={props.loginForm.showModal }>
				<Modal.Body>
					<NewCardPageWithRouter />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

const mapStateToProps = (state) => ({
	loginForm: state.cardForm
});

export default connect(mapStateToProps, { toggleNewCardModal })(NewCardModal);