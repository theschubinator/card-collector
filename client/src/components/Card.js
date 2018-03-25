import React from 'react';
import { connect } from 'react-redux';
import DeletePage from './DeletePage';
import { toggleDeletePage } from '../actions/toggles';

const Card = (props) => {
	const orientationClassName = props.card.orientation === 'portrait'? 'portrait' : 'landscape';
	const rookieClassName = props.card.rookie ? 'card rookie' : 'card';
	const valueClassName = props.card.value ? 'valued' : 'unvalued'

	const handleClick = () => {
		props.toggleDeletePage(props.card.id);
	}
	
	return (
		<div className={`${orientationClassName} ${rookieClassName} ${valueClassName}`}>
				{ props.toggles.toggleDeletePage.card_id === props.card.id ? <DeletePage card={props.card} valueClassName={valueClassName} history={props.history} />:
				(<div><button className="delete" onClick={handleClick}>x</button>
				<h3>#{props.card.card_number} - {props.card.player}</h3>
				<h4>{props.card.year} - {props.card.brand}</h4>
				{ props.card.rookie && <p className="rookie-card">Rookie Card!</p> }
				<img src={props.card.image_url} alt={props.card.player} />
				{ props.card.value && <p className="card-value">Value: ${props.card.value}</p> }</div>)
				}
		</div>

	)
};

const mapStateToProps = (state) => ({
	toggles: state.toggles
});

export default connect(mapStateToProps, { toggleDeletePage })(Card);