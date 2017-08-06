import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from './image/logo.svg'

import './css/Header.css'

const menu = 
[
	{
		title: 'Presentation',
		url: '/'
	}, 
	{
		title: 'Avatar',
		url: '/avatar'
	}
]

class Header extends Component {
	render() {
		return (
			<div>
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>React Redux</h2>

					<ul className="App-menu">
						{ menu.map(
							(item, key) => 
								<li key={key}>
									<Link to={item.url}>{item.title}</Link>
								</li>
						)}
					</ul>
				</div>
			</div>
		)
	}
}

export default Header