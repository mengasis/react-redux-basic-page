import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import App from './components/App'
import Home from './containers/Home'

//import History from './components/History'
//import Resumen from './components/Resumen'
//import Mythology from './components/Mythology'
//import Page404 from './components/Page404'

// Container
//import Home from './containers/Home'

const AppRoutes = () =>
	<App>
		<Switch>			
			<Route exact path="/" component={Home} />

			{/*
			<Route exact path="/history" component={History} />
			<Route exact path="/resumen" component={Resumen} />
			<Route exact path="/mythology/gods" component={Mythology} />
			<Route exact path="/mythology/god/:id" component={Mythology} />
			<Route component={Page404} />
			*/}

		</Switch>
	</App>

export default AppRoutes
