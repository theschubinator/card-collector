import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { deleteCard } from '../../actions/user';
import { toggleDeletePage } from '../../actions/toggles';
import '../../styles/delete.css';

const DeletePage = (props) => {

	const handleClick = (e) => {
		e.target.name === 'no' ? props.toggleDeletePage() : 	props.deleteCard(props.user.id, props.card.id, props.history)
	}

	return (
	<div id="confirm-delete" className={props.valueClassName}>
		<span id="delete">
			<h2>Confirm Deletion?</h2>
			<Button onClick={handleClick} bsStyle="success" name="yes">Yes</Button>
			<Button onClick={handleClick} bsStyle="danger" name="no">&nbsp;No&nbsp;</Button>
		</span>
	</div>
	)
}

const mapStateToProps = (state) => ({
	user: state.user,
	toggles: state.toggles
})

export default connect(mapStateToProps, { toggleDeletePage, deleteCard })(DeletePage);