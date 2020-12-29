import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import NavBar from './NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';

class MainPanel extends Component {
	render() {
		return (
			<div id="page-content-wrapper">
				<NavBar toggleSidebar={this.props.toggleSidebar}></NavBar>
				<Content></Content>
			</div>
		);
	}
}

export default MainPanel;
