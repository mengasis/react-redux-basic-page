const initialState = {
	welcome: 'Hola Mundo...'
}


export default (state = initialState, action) => {
	switch (action.type) {
	case 'CHANGE_TITLE_HOME': {
		const {title = 'Default'} = action    
		return Object.assign({}, state, {welcome: title})
	}
	default:
		return state
	}
}