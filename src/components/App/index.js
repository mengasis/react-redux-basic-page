import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './css/App.css'

import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'


class App extends Component {
	render() {
		const { children } = this.props

		return (
			<div className="App">
				<Header />
				<Body content={children}/>
				<Footer copyright="React Redux 2017"/>
			</div>
		)
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
}

export default App
