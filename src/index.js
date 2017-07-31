import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'


import AppRoutes from './routes'
import configureStore from './configureStore'
import rootReducer from './reducers'

const store = configureStore({
	initialState: window.initialState
}, rootReducer)



ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'))
	
registerServiceWorker()
