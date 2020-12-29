import React, { Component } from 'react';
import './App.css';
import MainPanel from './MainPanel';
import Sidebar from './Sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { showSidebar: false };
	}

	toggleSidebar = (_) => {
		const currentState = this.state.showSidebar;
		this.setState({ showSidebar: !currentState });
	};

	render() {
		return (
			<div className={this.state.showSidebar ? 'd-flex' : 'd-flex toggled'} id="wrapper">
				<Sidebar showSidebar={this.state.showSidebar}></Sidebar>
				<MainPanel toggleSidebar={this.toggleSidebar}></MainPanel>
			</div>
		);
	}
}

export default App;
