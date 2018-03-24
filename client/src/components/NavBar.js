import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

import PopUpModal from './SignIn/PopUpModal';
import NewCardModal from './NewCardModal';
import { logOutUser } from '../actions/user';
import { toggleModal } from '../actions/loginForm';
import { toggleNewCardModal } from '../actions/cardForm'

const NavBar = (props) => {
	const handleLogOut = () => {
		props.logOutUser();
		localStorage.removeItem('token');
	}

	const showLoginModal = (e) => {
		props.toggleModal(e.target.name);
	}

	const showNewCardModal = (e) => {
		props.toggleNewCardModal();
	}

	const signedOutUserLinks = (
		<Nav>
			<NavItem onClick={showLoginModal} name="sign-in">Sign In</NavItem>,
			<NavItem onClick={showLoginModal} name="sign-up">Sign Up</NavItem>
		</Nav>
	);

	const signedInUserLinks = () => {
		if(props.user) { 
			return (
				<Nav pullRight>
					<LinkContainer to={`/${props.user.id}/cards`}>
						<NavItem>View Cards</NavItem>
					</LinkContainer>,
					
						<NavItem onClick={showNewCardModal} >New Card</NavItem>
				
					<LinkContainer to={`/${props.user.id}/profile`}>
						<NavItem>Profile</NavItem>
					</LinkContainer>
					<NavItem onClick={handleLogOut}>Log Out</NavItem>
				</Nav>
			)
		}
	};

	return (
		<div>
		<Navbar inverse collapseOnSelect>
			<Navbar.Header>
				<Navbar.Brand>
					<LinkContainer to="/">
						<span>Card-Collector</span>
					</LinkContainer>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				{
					props.user ? signedInUserLinks() : signedOutUserLinks
				}
			</Navbar.Collapse>
		</Navbar>
		<PopUpModal />
		<NewCardModal />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, { logOutUser, toggleModal, toggleNewCardModal })(NavBar);