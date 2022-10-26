import apiUrl from '../apiConfig'
import axios from 'axios'

export const nutCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/nuts',
		data: {
			nut: data,
		},
        headers: {
            Authorization: `Token token=${user.token}`
        }
	})
}

export const nutIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/nuts',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const nutShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/nuts/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const nutUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/nuts/' + id,
		data: {
			nut: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const nutDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/nuts/' + id,
        headers: {
            Authorization: `Token token=${user.token}`
        }
	})
}