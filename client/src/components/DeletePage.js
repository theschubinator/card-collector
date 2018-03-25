import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { toggleDeletePage } from '../actions/toggles';
import '../styles/delete.css';

const DeletePage = (props) => {

	const handleClick = (e) => {
		const { name } = e.target;
		if (name === 'no') {
			props.toggleDeletePage();
		}
	}

	return (
	<div id="confirm-delete" className={props.valueClassName}>
		<span id="delete">
			<h2>Confirm Deletion?</h2>
			<Button onClick={handleClick} bsStyle="success" name="yes">Yes</Button>
			<Button onClick={handleClick} bsStyle="danger" name="no">&nbsp;No&nbsp;</Button>
		</span>
		<span id="card-background">
			<h3>#{props.card.card_number} - {props.card.player}</h3>
			<h4>{props.card.year} - {props.card.brand}</h4>
			<img src={props.card.image_url} alt={props.card.player} />
			{ props.card.value && <p className="card-value">Value: ${props.card.value}</p> }
		</span>
	</div>
	)
}

const mapStateToProps = (state) => ({
	toggles: state.toggles
})
export default connect(mapStateToProps, { toggleDeletePage })(DeletePage);