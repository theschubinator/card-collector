import React from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import { withRouter } from 'react-router-dom';
import { updateCardForm } from '../../actions/cardForm';
import { saveCard } from '../../actions/cards';
import PhotoUploader from './PhotoUploader';
import { clearFormData, addError, clearErrors } from '../../actions/cardForm';
import '../../styles/card-form.css'

let CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/theschubinator/image/upload';

const setImageOrientationPreset = () => {
	const img = document.getElementById('preview-image')
	if(img.clientWidth > img.clientHeight) {
		CLOUDINARY_UPLOAD_PRESET = 'card-collector-card-2';
	} else {
		CLOUDINARY_UPLOAD_PRESET = 'card-collector-card';
	}
} 

const selectOptions = () => {
	const currentYear = (new Date()).getFullYear();
	let optionsArray = [];
	for(let year='1919'; year <= currentYear; year++) {
		optionsArray.push( ( <option key={year} value={year}>{year}</option>) )
	}
	return optionsArray;
};

const uploadImageAndSave = (props) => {
	setImageOrientationPreset();
	if (typeof props.cardForm.image_url === 'string') {
		//save card with default image picture set OR
		//edit card with same image...
		props.saveCard(props.cardForm, props.user.id, props.history);
	} else {
		//upload a new image to cloudinary
		let upload = request.post(CLOUDINARY_UPLOAD_URL)
		.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)

		.field('file', props.cardForm.image_url);

		upload.end((err, response) => {
			if (err) { console.error(err); }

			if (response.body.secure_url !== '') {
				props.saveCard(props.cardForm, props.user.id, props.history, response.body.secure_url)
			}
		});
	}	
}

const validateInputs = (name, value, props)  => {
	if(name ==='value' && (!value || value.match(/^\d{1,}(\.\d{0,2})?$/) || value.match(/\.(\d{0,2}?$)/))) {
		props.updateCardForm(name, value);
	}
	if(name ==='year' && value.length > 0 && (!value || value.match(/^\d{0,4}$/))) {
		props.updateCardForm(name, value);
	}
	if (name ==='rookie') {
		props.updateCardForm(name, !props.cardForm.rookie);
	}
	if (name ==='first_name' || name === 'last_name' || name==='brand') {
		if(props.cardForm[name].length === 0) {
			value = value.toUpperCase()
		}
		props.updateCardForm(name, value);
	}
	if (name==='card_number') {
		props.updateCardForm(name, value);
	}
}

const NewCardPage = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.clearErrors();
		uploadImageAndSave(props);
	};

	const handleChange = (e) => {
		let { name, value } = e.target;
		
		validateInputs(name, value, props);
	};

	const renderErrors = props.cardForm.errors.map((error, i) => <p key={i}>{error}</p>);

	const setDefaultYear = props.cardForm.year ? 
			<option value={props.cardForm.year} defaultValue>{props.cardForm.year}</option> 
		: <option value="" defaultValue>Year</option>

	

	return (
		<div className="container card-form">
			{ props.cardForm.type ==="edit" ? <h1>Edit Card</h1> : <h1>Add Card</h1> }
			<div className="row">
				<div className="col-md-6 photo-uploader">
					<PhotoUploader cardForm={props.cardForm} />		
				</div>
				<div className="col-md-6">
					<form onSubmit={handleSubmit}>
						<div className="col-sm-12">
							<input 
								id="player"
								onChange={handleChange} 
								type="text" 
								value={props.cardForm.first_name} 
								name="first_name" 
								placeholder="First Name" 
							/>
							<input 
								id="player"
								onChange={handleChange} 
								type="text" 
								value={props.cardForm.last_name} 
								name="last_name" 
								placeholder="Last Name" 
							/>
						</div>
						<div className="col-sm-8">
							<input
								onChange={handleChange} 
								type="text" value={props.cardForm.brand} 
								name="brand" 
								placeholder="Brand Name" 
							/>
						</div>
						<div className="col-sm-4">
							<select onChange={handleChange} name="year"> 
								{setDefaultYear}
								{selectOptions()}
							</select>
						</div>
						<div className="col-sm-5">
							<input 
								onChange={handleChange} 
								type="text" value={props.cardForm.card_number} 
								name="card_number" 
								placeholder="#Card Number" 
							/>
						</div>
						<div className="col-sm-5">
							<input 
								onChange={handleChange} 
								type="text" value={ props.cardForm.value } 
								name="value" 
								placeholder="$Value" 
							/>
						</div>
						<div className="col-sm-2">
							<label className="checkbox">
								<input
									onChange={handleChange} 
									type="checkbox" 
									checked={props.cardForm.rookie} 
									name="rookie" 
								/>Rookie?
							</label>
						</div>
						<div className="col-sm-12">
							<input className="submit" type="submit" />
							{ (props.cardForm.errors.length > 0) && <div className="errors">{renderErrors}</div> }
						</div>
						
					</form>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	cardForm: state.cardForm,
	user: state.user
});

export const NewCardPageWithRouter = withRouter(connect(mapStateToProps, { updateCardForm, saveCard, clearFormData, addError, clearErrors })(NewCardPage));

export default connect(mapStateToProps, { updateCardForm, saveCard, clearFormData, addError, clearErrors })(NewCardPage);
