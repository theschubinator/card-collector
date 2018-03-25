import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

import PopUpModal from './SignIn/PopUpModal';
import NewCardModal from './UserCards/NewCardModal';
import { logOutUser } from '../actions/user';
import { toggleLoginModal } from '../actions/toggles';
import { toggleNewCardModal } from '../actions/toggles'
import '../styles/navbar.css';

const NavBar = (props) => {
	const handleLogOut = () => {
		props.logOutUser();
		localStorage.removeItem('token');
	}

	const showLoginModal = (e) => {
		props.toggleLoginModal(e.target.name);
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
				<div>
					<Nav pullLeft>
						<NavItem className="nav-item" onClick={showNewCardModal} >New Card</NavItem>
					</Nav>
					<Nav pullRight>
						<LinkContainer activeClassName="" id="nav-item" to={`/${props.user.id}/cards`}>
							<NavItem id="nav-item">View Cards</NavItem>
						</LinkContainer>,
						<LinkContainer activeClassName="" to={`/${props.user.id}/profile`}>
							<NavItem className="nav-item">Profile</NavItem>
						</LinkContainer>
						<NavItem className="nav-item" onClick={handleLogOut}>Log Out</NavItem>
					</Nav> 
				</div>
			)
		}
	};

	return (
		<div id="fixed-navbar">
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

export default connect(mapStateToProps, { logOutUser, toggleLoginModal, toggleNewCardModal })(NavBar);