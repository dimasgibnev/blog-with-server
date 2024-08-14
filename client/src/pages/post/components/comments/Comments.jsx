import PropTypes from 'prop-types';
import { useState } from 'react';
import { Comment } from './components';
import { MyIcon } from '../../../../ui';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../../../selectors';
import { addCommentsAsync } from '../../../../store/actions';
import { PROP_TYPE, ROLE } from '../../../../constants';
import styled from 'styled-components';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = (postId,  content) => {
		dispatch(addCommentsAsync( postId, content))
		setNewComment('');
	};

	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className={className}>
			{!isGuest && (
				<>
					<div className="new-comment">
						<textarea
							name="comment"
							value={newComment}
							placeholder="комментарий..."
							onChange={({ target }) => setNewComment(target.value)}
						></textarea>
						<MyIcon
							id={'fa-paper-plane-o'}
							margin="0 0 0 10px"
							onClick={() => onNewCommentAdd(postId, newComment)}
						/>
					</div>
				</>
			)}
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						postId={postId}
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	display: flex;
	flex-direction: column;
	margin: 0 15% 0 auto;

	width: 600px;

	& .new-comment {
		width: 100%;
		display: flex;
		margin-bottom: 20px;
	}

	& .new-comment textarea {
		font-size: 18px;
		resize: none;
		width: 90%;
		height: 120px;
		padding: 5px 10px;
	}
`;
Comments.propTypes = {
	comments: PROP_TYPE.COMMENT,
	postId: PropTypes.string.isRequired,
};
