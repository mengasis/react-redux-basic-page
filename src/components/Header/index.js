import React, { Component } from 'react'
import logo from './image/logo.svg'

import './css/Header.css'

class Header extends Component {
	render() {
		return (
			<div>
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>React</h2>
				</div>
			</div>
		)
	}
}

export default Header