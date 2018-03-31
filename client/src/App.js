import React, { Component } from 'react';

import { NavBarWithRouter } from './components/NavBar';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBarWithRouter />
			 <Routes />
      </div>
    );
  }
}

export default App;
