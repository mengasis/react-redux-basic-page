import { combineReducers } from 'redux'
import home from './homeReducer'
import avatar from './avatarReducer'

const rootReducer = combineReducers({
	home, avatar
})

export default rootReducer
