
const CHANGE_TITLE_HOME = 'CHANGE_TITLE_HOME'

export function setTitleHome(text){
	return {
		type: CHANGE_TITLE_HOME,
		title: text
	}
}