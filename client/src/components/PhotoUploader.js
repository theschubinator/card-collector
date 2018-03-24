
import React from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { updateCardForm } from '../actions/cardForm';

const PhotoUploader = (props) => {

 	const handleImagePreview = (files) => {
		props.updateCardForm('image_url', files[0])
	}

	const renderPreviewImage = () => {
		if(props.cardForm.image_url === 'http://res.cloudinary.com/theschubinator/image/upload/v1521854831/dzawqarj7i3qlbdf1dic.jpg') {
			return 	<img src='http://res.cloudinary.com/theschubinator/image/upload/v1521854831/dzawqarj7i3qlbdf1dic.jpg' alt='preview' />
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
					<div>Drop an image or click to select a file to upload.</div>
				</Dropzone>
		
				<span className="image-preview">
					<p>Image Preview</p>
					{renderPreviewImage()}
				</span>
			</div>
	
			
		</form>
	);
};

export default connect(null, { updateCardForm })(PhotoUploader);