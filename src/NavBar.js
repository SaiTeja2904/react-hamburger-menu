import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
				<button className="btn" id="menu-toggle" onClick={() => this.props.toggleSidebar()}>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div id="navbarSupportedContent">
					<div className="navbar-nav ml-auto mt-2 mt-lg-0">
						<span className="nav-link">
							Home <span className="sr-only">(current)</span>
						</span>
						<span className="nav-link">
							Link <span className="sr-only">(current)</span>
						</span>
						<span className="nav-link">
							Dropdown <span className="sr-only">(current)</span>
						</span>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;

/* <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<a className="nav-link">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Link</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Dropdown
							</a>
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>
					</ul> */
