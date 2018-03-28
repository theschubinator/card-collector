import React from 'react';
import { connect } from 'react-redux';
import DeletePage from './DeletePage';
import { toggleDeletePage, toggleNewCardModal } from '../../actions/toggles';
import { setCardFormOnEdit } from '../../actions/cardForm';
import { Button } from 'react-bootstrap';

const Card = (props) => {
	const orientationClassName = props.card.orientation === 'portrait'? 'portrait' : 'landscape';
	const rookieClassName = props.card.rookie ? 'card rookie' : 'card';
	const valueClassName = props.card.value ? 'valued' : 'unvalued'

	const handleClick = () => {
		props.toggleDeletePage(props.card.id);
	}

	const editCard = () => {
		props.setCardFormOnEdit(props.card);
		props.toggleNewCardModal();
	}
	
	return (
		<div className={`${orientationClassName} ${rookieClassName} ${valueClassName}`} >
				{ 
					props.toggles.toggleDeletePage.card_id === props.card.id ? <DeletePage card={props.card} valueClassName={valueClassName} history={props.history} /> :
					<div>
						<button className="delete" onClick={handleClick}>x</button>
						<Button className="edit" bsSize="small" bsStyle="primary" onClick={editCard}>Edit</Button>
						<h4 className="card-number">#{props.card.card_number}</h4>
						<h3 className="card-player">{`${props.card.last_name}, ${props.card.first_name}`}</h3>
						<h4 className="card-year">{props.card.year} - {props.card.brand}</h4>
						{ props.card.rookie && <p className="rookie-card">Rookie Card!</p> }
						<img src={props.card.image_url} alt={props.card.player} />
						{ props.card.value && <p className="card-value">Value: ${parseFloat(props.card.value).toFixed(2)}</p> }
					</div>
				}
		</div>

	)
};

const mapStateToProps = (state) => ({
	toggles: state.toggles
});

export default connect(mapStateToProps, { toggleDeletePage, toggleNewCardModal, setCardFormOnEdit })(Card);