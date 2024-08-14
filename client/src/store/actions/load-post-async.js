import { request } from '../../utils/request';
import { setPostData } from './set-post-data';

export const loadPostAsync = (postId) => (dispatch) => {
	return request(`/posts/${postId}`).then(({ data }) => {
		if (data) {
			dispatch(setPostData(data));
		}
		return data;
	});
};
