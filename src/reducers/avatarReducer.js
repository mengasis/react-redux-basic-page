const avatarInitialState = {
	urlImage: 'http://api.adorable.io/avatars/285/%5BRANDOM_STRING%5D.png'
}

const avatar = (state = avatarInitialState, action) => {
	switch (action.type) {
	case 'CHANGE_AVATAR':{
	
		const urlBase = 'https://api.adorable.io/avatars/'
		const urlImage = `${urlBase}${action.urlImage}.png`
		return Object.assign({}, state, { urlImage })
	}
	default:
		return state
	}
}

export default avatar