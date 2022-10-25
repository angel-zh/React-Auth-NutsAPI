import apiUrl from '../apiConfig'
import axios from 'axios'

export const nutCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/nuts',
		data: {
			pet: data,
		},
        headers: {
            Authorization: `Token token=${user.token}`
        }
	})
}