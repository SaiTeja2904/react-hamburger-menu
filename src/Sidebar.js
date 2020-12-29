import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';

class Sidebar extends Component {
	render() {
		return (
			<div className="bg-light border-right sidebar" id="sidebar-wrapper">
				<div className="sidebar-heading">Therichpost </div>
				<div className="list-group list-group-flush">
					<div className="sidebar-list-item">Dashboard</div>
					<div className="sidebar-list-item">Shortcuts</div>
					<div className="sidebar-list-item">Overview</div>
					<div className="sidebar-list-item">Dashboard</div>
					<div className="sidebar-list-item">Dashboard</div>

					{/*<a href="#" className="list-group-item list-group-item-action aaa">
						Dashboard
					</a>
					<a href="#" className="list-group-item list-group-item-action ">
						Shortcuts
					</a>
					<a href="#" className="list-group-item list-group-item-action bg-light">
						Overview
					</a>
					<a href="#" className="list-group-item list-group-item-action bg-light">
						Events
					</a>
					<a href="#" className="list-group-item list-group-item-action bg-light">
						Profile
					</a>
					<a href="#" className="list-group-item list-group-item-action bg-light">
						Status
					</a> */}
				</div>
			</div>
		);
	}
}

export default Sidebar;
