import React, { Component } from 'react';
import './App.css';
import MainPanel from './MainPanel';
import Sidebar from './Sidebar';

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
			<>
				<Sidebar showSidebar={this.state.showSidebar}></Sidebar>
				<MainPanel toggleSidebar={this.toggleSidebar}></MainPanel>
			</>
		);
	}
}

export default App;
