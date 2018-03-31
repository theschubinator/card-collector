import React, { Component } from 'react';
import { connect } from 'react-redux';

export const authentication = (ComposedComponent) => {
	class Authentication extends Component {
	
		componentWillMount() {
			if(!this.props.auth) {
				this.props.history.push("/")	
			}
		}

		render() {
			return <ComposedComponent {...this.props} />
		}
	}

	const mapStateToProps = (state) => ({
		auth: state.auth
	})

	return connect(mapStateToProps)(Authentication);

}