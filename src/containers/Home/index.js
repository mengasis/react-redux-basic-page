import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Row, Col, Button } from 'react-bootstrap'

import * as actions from '../../actions/homeAction'

class Home extends Component {

	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e){
		e.preventDefault()

		const idiomas = 
		{
			español: 'Saludando en Español',
			ingles: 'Saying hello in English', 
			griego: 'χαιρετισμό Αγγλικά'
		}

		const key = e.target.attributes.getNamedItem('data-key').value

		switch (key) {
		case '1':
			this.props.setTitleHome(idiomas.español)
			break
		case '2':
			this.props.setTitleHome(idiomas.ingles)
			break
		case '3':
			this.props.setTitleHome(idiomas.griego)
			break
		}

	}

	render() {

		const { welcome = 'Hola Mundo...' } = this.props

		const buttonsInstance = (

			<Grid>
				<Row>
					<Col xs={4} md={4}>					
						<Button 
							bsStyle="primary"
							data-key={1}
							onClick={this.handleClick}
							block>Hola</Button>
					</Col>
					<Col xs={4} md={4}>					
						<Button 
							bsStyle="success"
							data-key={2}
							onClick={this.handleClick}
							block>Hello</Button>
					</Col>
					<Col xs={4} md={4}>					
						<Button 
							bsStyle="info" 
							data-key={3}
							onClick={this.handleClick}
							block>Γεια σας</Button>
					</Col>
				</Row>
			</ Grid>

		)
		return (
			<div>
				<h1>{welcome}</h1>
				<div>
					{buttonsInstance}
				</div>
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