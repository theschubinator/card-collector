import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import { updateCardForm } from '../actions/cardForm';
import { saveCard } from '../actions/cards';
import PhotoUploader from './PhotoUploader';
import { clearFormData } from '../actions/cardForm';

const CLOUDINARY_UPLOAD_PRESET = 'card-collector-card';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/theschubinator/image/upload';

class NewCardPage extends Component {

	componentWillUnmount() {
		this.props.clearFormData();
	};

	componentDidUpdate(prevProps) {
		if(typeof this.props.cardForm.image_url  !== 'string' && 
			 this.props.cardForm.image_url !== prevProps.cardForm.image_url) {
			this.props.saveCard(this.props.cardForm, this.props.user.id);
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.props.cardForm.image_url === 'https://www.freepnglogos.com/uploads/nfl-3d-logo-png-5.png') {
			this.props.saveCard(this.props.cardForm, this.props.user.id);
		} else {
			//upload picture to cloudinary
			let upload = request.post(CLOUDINARY_UPLOAD_URL)
			.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
			.field('file', this.props.cardForm.image_url);

			upload.end((err, response) => {
				if (err) {
					console.error(err);
				}

				if (response.body.secure_url !== '') {
					this.props.updateCardForm('image_url', response.body.secure_url)
				}
			});
		}	
	};

	handleChange = (e) => {
		let { name, value } = e.target;
		if (e.target.type === 'checkbox')
			value = !this.props.cardForm.rookie
		this.props.updateCardForm(name, value);
	};

	render() {
		console.log(this.props.cardForm)
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input 
						onChange={this.handleChange} 
						type="text" value={this.props.cardForm.brand} 
						name="brand" 
						placeholder="Brand Name" 
					/>
					<input 
						onChange={this.handleChange} 
						type="text" value={this.props.cardForm.year} 
						name="year" 
						placeholder="Year" 
					/>
					<input 
						onChange={this.handleChange} 
						type="text" 
						value={this.props.cardForm.player} 
						name="player" 
						placeholder="Player Name" 
					/>
					<input 
						onChange={this.handleChange} 
						type="text" value={this.props.cardForm.card_number} 
						name="card_number" 
						placeholder="Card Number" 
					/>
					<input 
						onChange={this.handleChange} 
						type="text" value={this.props.cardForm.value} 
						name="value" 
						placeholder="Value" 
					/>
					<input 
						onChange={this.handleChange} 
						type="checkbox" 
						checked={this.props.cardForm.rookie} 
						name="rookie" 
					/><label>Rookie?</label>
					<input type="submit" />
				</form>
				<PhotoUploader cardForm={this.props.cardForm} />				
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	cardForm: state.cardForm,
	user: state.user
});

export default connect(mapStateToProps, { updateCardForm, saveCard, clearFormData })(NewCardPage);
