const CHANGE_AVATAR = 'CHANGE_AVATAR'

export function changeAvatar(endpoint){
	return {
		type: CHANGE_AVATAR,
		urlImage: endpoint
	}
}
