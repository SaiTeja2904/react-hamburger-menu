import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import NavBar from './NavBar';

class MainPanel extends Component {
	render() {
		return (
			<>
				<NavBar toggleSidebar={this.props.toggleSidebar}></NavBar>
				<Content></Content>
			</>
		);
	}
}

export default MainPanel;
