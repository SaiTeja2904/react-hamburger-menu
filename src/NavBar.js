import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {
	render() {
		return <button onClick={() => this.props.toggleSidebar()}>Hamburger</button>;
	}
}

export default NavBar;
