import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/avatarAction'
import { Image } from 'react-bootstrap'

class Avatar extends Component {

	componentWillMount(){
		this.props.changeAvatar(Math.random())
	}

	render() {

		const { urlImage } = this.props

		return (
			<div>
				<Image src={urlImage} circle/>
			</div>
		)
	}
}

Avatar.propTypes = {
	urlImage: PropTypes.string,
	changeAvatar: PropTypes.func
}

const mapStateToProps = (state) => {
	return {
		urlImage: state.avatar.urlImage
	}
}

export default connect(mapStateToProps, actions)(Avatar)