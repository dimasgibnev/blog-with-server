import { request } from '../../utils/request';
import { setPostData } from './set-post-data';

export const savePostAsync = (id, newPostData) => (dispatch) => {
	const saveRequest = id
		? request(`/posts/${id}`, 'PATCH', newPostData)
		: request('/posts', 'POST', newPostData);

	return saveRequest.then((postData) => {
		dispatch(setPostData(postData.data));

		return postData.data;
	});
};
