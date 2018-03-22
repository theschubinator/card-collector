import React from 'react';
import { connect } from 'react-redux';
import { updateCardForm } from '../actions/cardForm';
import { saveCard } from '../actions/cards';

const NewCardPage = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.saveCard(props.cardForm);
	};

	const handleChange = (e) => {
		let { name, value } = e.target;
		if (e.target.type === 'checkbox')
			value = !props.cardForm.rookie
		props.updateCardForm(name, value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} type="text" value={props.cardForm.brand} name="brand" placeholder="Brand Name" />
				<input onChange={handleChange} type="text" value={props.cardForm.year} name="year" placeholder="Year" />
				<input onChange={handleChange} type="text" value={props.cardForm.player} name="player" placeholder="Player Name" />
				<input onChange={handleChange} type="text" value={props.cardForm.value} name="value" placeholder="Value" />
				<input onChange={handleChange} type="checkbox" checked={props.cardForm.rookie} name="rookie" /><label>Rookie?</label>
				<input onChange={handleChange} type="submit" />
			</form>
		</div>
	);
}

const mapStateToProps = (state) => ({
	cardForm: state.cardForm
});

export default connect(mapStateToProps, { updateCardForm, saveCard })(NewCardPage);