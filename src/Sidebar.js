import React, { Component } from 'react';
import './App.css';

class Sidebar extends Component {
	render() {
		return <div className={this.props.showSidebar ? 'sidebar' : 'no-sidebar'}></div>;
	}
}

export default Sidebar;