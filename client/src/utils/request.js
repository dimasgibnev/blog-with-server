import { BASE_URL } from '../constants/url';

export const request =  async (url, method, data) => {
	return  await fetch('/api' + url, {
		method: method || 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			'token': localStorage.getItem('token') || '',
		},
		body: data ? JSON.stringify(data) : undefined,
	}).then((res) => res.json());
};
