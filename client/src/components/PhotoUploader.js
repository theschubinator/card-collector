
import React from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { updateCardForm } from '../actions/cardForm';

const PhotoUploader = (props) => {

 	const handleImagePreview = (files) => {
		props.updateCardForm('image_url', files[0])
	}

	const renderPreviewImage = () => {
		if(props.cardForm.image_url === 'http://res.cloudinary.com/theschubinator/image/upload/v1521863301/sjkfzlpbekocd6dm8uhm.jpg') {
			return 	<img src='http://res.cloudinary.com/theschubinator/image/upload/v1521863301/sjkfzlpbekocd6dm8uhm.jpg' alt='preview' />
		} else {
			return 	<img src={props.cardForm.image_url.preview} alt='preview' />
		}
	};

	return (
		<form>
			<div className="col-sm-12 FileUpload">
				<Dropzone
					onDrop={handleImagePreview.bind(this)}
					multiple={false}
					accept="image/*">
					<div>
						<h3>Upload an Image</h3>
						<p>DROP AN IMAGE</p>
						<p>OR</p>
						<p>CLICK TO SELECT</p>
					</div>
				</Dropzone>
		
				<span className="image-preview">
					<h5>Image Preview</h5>
					{renderPreviewImage()}
				</span>
			</div>
	
			
		</form>
	);
};

export default connect(null, { updateCardForm })(PhotoUploader);