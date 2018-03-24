import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import { updateCardForm } from '../actions/cardForm';
import { saveCard } from '../actions/cards';
import PhotoUploader from './PhotoUploader';
import { clearFormData } from '../actions/cardForm';
import '../styles/card-form.css'

const CLOUDINARY_UPLOAD_PRESET = 'card-collector-card';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/theschubinator/image/upload';

class NewCardPage extends Component {

	componentWillUnmount() {
		this.props.clearFormData();
	};

	componentDidUpdate(prevProps) {
		//if image has been uploaded and return image_url is set from cloudinary
		if(typeof prevProps.cardForm.image_url  !== 'string' && 
			this.props.cardForm.image_url !== prevProps.cardForm.image_url) {
				this.props.saveCard(this.props.cardForm, this.props.user.id);
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		//save card with default image picture set
		if (this.props.cardForm.image_url === 'http://res.cloudinary.com/theschubinator/image/upload/v1521863301/sjkfzlpbekocd6dm8uhm.jpg') {
			this.props.saveCard(this.props.cardForm, this.props.user.id);
		} else {
			//upload custom picture to cloudinary
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
				//componentDidUpdate will fire after image uploads, which calls saveCard()
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
		return (
			<div className="container card-form">
				<h1>Create New Card</h1>
				<div className="row">
					<div className="col-md-6 photo-uploader">
						<PhotoUploader cardForm={this.props.cardForm} />		
					</div>
					<div className="col-md-6">
						<form onSubmit={this.handleSubmit}>
							<div className="col-sm-12">
								<input 
									onChange={this.handleChange} 
									type="text" 
									value={this.props.cardForm.player} 
									name="player" 
									placeholder="Player Name" 
								/>
							</div>
							<div className="col-sm-8">
								<input
									onChange={this.handleChange} 
									type="text" value={this.props.cardForm.brand} 
									name="brand" 
									placeholder="Brand Name" 
								/>
							</div>
							<div className="col-sm-4">
								<input 
									onChange={this.handleChange} 
									type="text" value={this.props.cardForm.year} 
									name="year" 
									placeholder="Year" 
								/>
							</div>
							<div className="col-sm-5">
								<input 
									onChange={this.handleChange} 
									type="text" value={this.props.cardForm.card_number} 
									name="card_number" 
									placeholder="#Card Number" 
								/>
							</div>
							<div className="col-sm-5">
								<input 
									onChange={this.handleChange} 
									type="text" value={this.props.cardForm.value} 
									name="value" 
									placeholder="$Value" 
								/>
							</div>
							<div className="col-sm-2">
								<label className="checkbox">
									<input
										onChange={this.handleChange} 
										type="checkbox" 
										checked={this.props.cardForm.rookie} 
										name="rookie" 
									/>Rookie?
								</label>
							</div>
							<div className="col-sm-12">
								<input className="submit" type="submit" />
							</div>
						</form>
					</div>

				

				</div>

	
				
	
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	cardForm: state.cardForm,
	user: state.user
});

export default connect(mapStateToProps, { updateCardForm, saveCard, clearFormData })(NewCardPage);
