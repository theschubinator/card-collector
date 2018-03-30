import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/home.css';

const HomePage = () => (
	<div id="main" className="home container">
		<div className="row">
			<div className="col-sm-12 notice">
				<h3>Notice To Employers</h3>
				<h4>If you would like to experience this application without having to create your own account
						and adding your own data, sign in with the following credintials...
				</h4>
				<h3 className="credintials">
					<p>Username: test</p>
					<p>Password: test</p>
				</h3>
				<Button>
					<a 
						href="https://github.com/theschubinator/card-collecter" 
						target="_blank" 
						rel="noopener noreferrer"
					>View Code On Github</a>
				</Button>
			</div>
		</div>
	</div>
)

export default HomePage;