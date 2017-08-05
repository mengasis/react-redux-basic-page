import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap'

import * as actions from '../../actions/homeAction'

class Home extends Component {

	constructor(props){
		super(props)
	}

	render() {

		const { welcome = 'Hola Mundo...' } = this.props

		const buttonsInstance = (

			<Grid>
				<Row>
					<Col xs={4} md={4}>					
						<Button bsStyle="primary" block>Hola</Button>
					</Col>
					<Col xs={4} md={4}>					
						<Button bsStyle="success" block>Hello</Button>
					</Col>
					<Col xs={4} md={4}>					
						<Button bsStyle="info" block>Γεια σας</Button>
					</Col>
				</Row>
			</ Grid>

		)
		return (
			<div>
				<h1>{welcome}</h1>
				{buttonsInstance}
			</div>
		)
	}
}

Home.propTypes = {
	welcome: PropTypes.string,
	setTitleHome: PropTypes.func
}

const mapStateToProps = (state) => {
	return {
		welcome: state.home.welcome
	}
}

export default connect(mapStateToProps, actions)(Home)