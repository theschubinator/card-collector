import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import { updateCardForm } from '../actions/cardForm';
import { saveCard } from '../actions/cards';
import PhotoUploader from './PhotoUploader';
import { clearFormData, addError } from '../actions/cardForm';
import '../styles/card-form.css'

let CLOUDINARY_UPLOAD_PRESET = 'card-collector-card';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/theschubinator/image/upload';

const selectOptions = () => {
	let optionsArray = [];
	for(let year='1919'; year <= '2018'; year++) {
		optionsArray.push( ( <option key={year} value={year}>{year}</option>) )
	}
	return optionsArray;
};

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

	checkImageOrientation = () => {
		const img = document.getElementById('preview-image')
		if(img.clientWidth > img.clientHeight) {
			this.props.updateCardForm('orientation', 'landscape');
			CLOUDINARY_UPLOAD_PRESET = 'card-collector-card-2';
		} else {
			this.props.updateCardForm('orientation', 'portrait');
		}
	} 

	uploadImage = () => {
		this.checkImageOrientation()
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
	}

	validateInputs(name, value) {
		if(name ==='value' && (!value || value.match(/^\d{1,}(\.\d{0,2})?$/))) {
			this.props.updateCardForm(name, value);
		}

		if(name ==='year' && value.length > 0 && (!value ||value.match(/^\d{0,4}$/))) {
			this.props.updateCardForm(name, value);
		}

		if (name ==='rookie') {
			this.props.updateCardForm(name, !this.props.cardForm.rookie);
		}

		if (name ==='player' || name==='rookie' || name==='brand' || name==='card_number') {
			this.props.updateCardForm(name, value);
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.uploadImage();
	};

	handleChange = (e) => {
		let { name, value } = e.target;
		this.validateInputs(name, value);
	};

	render() {
		const renderErrors = this.props.cardForm.errors.map((error, i) => <p key={i}>{error}</p>);

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
									id="player"
									onChange={this.handleChange} 
									onblur={'this.value=this.value.toUpperCase()'}
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
								<select onChange={this.handleChange} name="year"> 
									<option value="" defaultValue>Year</option>
									{selectOptions()}
								</select>
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
								{ (this.props.cardForm.errors.length > 0) && <div className="errors">{renderErrors}</div> }
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

export default connect(mapStateToProps, { updateCardForm, saveCard, clearFormData, addError })(NewCardPage);
