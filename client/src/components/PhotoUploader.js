
import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { connect } from 'react-redux';
import { updateCardForm } from '../actions/cardForm';

const CLOUDINARY_UPLOAD_PRESET = 'card-collector-card';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/theschubinator/image/upload';

const PhotoUploader = (props) => {

 	const handleImageUpload = (files) => {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
			.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
			.field('file', files[0]);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
				props.updateCardForm('image_url', response.body.secure_url)
      }
    });
  }

	return (
		<div>
			<div className="FileUpload">
				<Dropzone
					onDrop={handleImageUpload.bind(this)}
					multiple={false}
					accept="image/*">
					<div>Drop an image or click to select a file to upload.</div>
				</Dropzone>
			</div>

			<div>
				{props.cardForm.image_url === '' ? null :
				<div>
					<img src={props.cardForm.image_url} alt='preview' />
				</div>}
			</div>
		</div>
	);
};

export default connect(null, { updateCardForm })(PhotoUploader);