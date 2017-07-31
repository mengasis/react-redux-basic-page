import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './css/Footer.css'

class Footer extends Component {
	render() {
		const { copyright = 'React Redux' } = this.props

		return (
			<div>
				<div className="Footer">
					<p>{copyright}</p>
				</div>
			</div>
		)
	}
}

Footer.propTypes = {
	copyright: PropTypes.string
}

export default Footer