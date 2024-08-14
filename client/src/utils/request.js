import { BASE_URL } from '../constants/url';

export const request =  (url, method, data) => {
	return  fetch(BASE_URL + url, {
		method: method || 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			'token': localStorage.getItem('token'),
		},
		body: data ? JSON.stringify(data) : undefined,
	}).then((res) => res.json());
};
