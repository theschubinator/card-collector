import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

import { logOutUser } from '../actions/user';

const NavBar = (props) => {
	const handleLogOut = () => {
		props.dispatch(logOutUser());
		localStorage.removeItem('token');
	}

	const signedOutUserLinks = (
		<Nav>
			<LinkContainer to="/sign-in">
				<NavItem>Sign In</NavItem>
			</LinkContainer>,
			<LinkContainer to="/sign-up">
				<NavItem>Sign Up</NavItem>
			</LinkContainer>
		</Nav>
	);

	const signedInUserLinks = () => {
		if(props.user) { 
			return (
				<Nav pullRight>
					<LinkContainer to="/sign-in">
						<NavItem>View Cards</NavItem>
					</LinkContainer>,
					<LinkContainer to="/sign-up">
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
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(NavBar);