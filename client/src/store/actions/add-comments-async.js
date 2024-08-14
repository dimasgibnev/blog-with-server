import { request } from '../../utils/request';
import { addComment } from './add-comment';

export const addCommentsAsync = (postId, content) => (dispatch) => {

	request(`/posts/${postId}/comments`, 'POST', { content }).then(({ data }) => {
		dispatch(addComment(data));
	});
};
