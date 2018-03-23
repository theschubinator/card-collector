import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCardForm } from '../actions/cardForm';
import { saveCard } from '../actions/cards';
import PhotoUploader from './PhotoUploader';
import { clearFormData } from '../actions/cardForm';

class NewCardPage extends Component {

	componentWillUnmount() {
		this.props.clearFormData();
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.saveCard(this.props.cardForm, this.props.user.id);
	};

	handleChange = (e) => {
		let { name, value } = e.target;
		if (e.target.type === 'checkbox')
			value = !this.props.cardForm.rookie
		this.props.updateCardForm(name, value);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<PhotoUploader cardForm={this.props.cardForm} />
					<input onChange={this.handleChange} type="text" value={this.props.cardForm.brand} name="brand" placeholder="Brand Name" />
					<input onChange={this.handleChange} type="text" value={this.props.cardForm.year} name="year" placeholder="Year" />
					<input onChange={this.handleChange} type="text" value={this.props.cardForm.player} name="player" placeholder="Player Name" />
					<input onChange={this.handleChange} type="text" value={this.props.cardForm.card_number} name="card_number" placeholder="Card Number" />
					<input onChange={this.handleChange} type="text" value={this.props.cardForm.value} name="value" placeholder="Value" />
					<input onChange={this.handleChange} type="checkbox" checked={this.props.cardForm.rookie} name="rookie" /><label>Rookie?</label>
					<input onChange={this.handleChange} type="submit" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	cardForm: state.cardForm,
	user: state.user
});

export default connect(mapStateToProps, { updateCardForm, saveCard, clearFormData })(NewCardPage);
