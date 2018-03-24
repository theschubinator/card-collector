import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

import PopUpModal from './SignIn/PopUpModal';
import { logOutUser } from '../actions/user';
import { toggleModal } from '../actions/loginForm';

const NavBar = (props) => {
	const handleLogOut = () => {
		props.logOutUser();
		localStorage.removeItem('token');
	}

	const showModal = (e) => {
		props.toggleModal(e.target.name);
	}

	const signedOutUserLinks = (
		<Nav>
			<NavItem onClick={showModal} name="sign-in">Sign In</NavItem>,
			<NavItem onClick={showModal} name="sign-up">Sign Up</NavItem>
		</Nav>
	);

	const signedInUserLinks = () => {
		if(props.user) { 
			return (
				<Nav pullRight>
					<LinkContainer to={`/${props.user.id}/cards`}>
						<NavItem>View Cards</NavItem>
					</LinkContainer>,
					<LinkContainer to="/card/new">
						<NavItem>New Card</NavItem>
					</LinkContainer>
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
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, { logOutUser, toggleModal })(NavBar);