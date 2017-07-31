import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './css/Body.css'

class Body extends Component {
	render() {
		const { content } = this.props

		return (
			<div className="Content">
				{content}
			</div>
		)
	}
}

Body.propTypes = {
	content: PropTypes.object.isRequired
}

export default Body