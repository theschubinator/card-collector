
import React from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { updateCardForm } from '../actions/cardForm';

const PhotoUploader = (props) => {

 	const handleImagePreview = (files) => {
		props.updateCardForm('image_url', files[0])
	}

	const renderPreviewImage = () => {
		if(props.cardForm.image_url === 'https://www.freepnglogos.com/uploads/nfl-3d-logo-png-5.png') {
			return 	<img src='https://www.freepnglogos.com/uploads/nfl-3d-logo-png-5.png' alt='preview' />
		} else {
			return 	<img src={props.cardForm.image_url.preview} alt='preview' />
		}
	};

	return (
		<form>
			<div className="FileUpload">
				<Dropzone
					onDrop={handleImagePreview.bind(this)}
					multiple={false}
					accept="image/*">
					<div>Drop an image or click to select a file to upload.</div>
				</Dropzone>
			</div>
			<div>{renderPreviewImage()}</div>
			
		</form>
	);
};

export default connect(null, { updateCardForm })(PhotoUploader);