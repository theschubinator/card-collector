import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { toggleAdvancedFilter } from '../../actions/toggles';
import FiltersForm from './FiltersForm';
// import { NewCardPageWithRouter } from './NewCardPage';
// import { toggleNewCardModal } from '../../actions/toggles';
// import { clearFormData } from '../../actions/cardForm';
// import '../../styles/card-form.css';

const AdvancedFilterModal = (props) => {
  const handleClose = () => {
		props.toggleAdvancedFilter();
	}
	
	return (
		<div className="main card-form">
			<Modal show={props.toggles.toggleAdvancedFilter }>
				<Modal.Body>
					<FiltersForm />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

const mapStateToProps = (state) => ({
	toggles: state.toggles
});

export default connect(mapStateToProps, { toggleAdvancedFilter })(AdvancedFilterModal);