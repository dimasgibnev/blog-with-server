import PropTypes from 'prop-types';
import { MyIcon } from '../../../../../../ui';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
	closeModal,
	openModal,
	removeCommentAsync,
} from '../../../../../../store/actions';
import { selectUserRole } from '../../../../../../selectors';
import { ROLE } from '../../../../../../constants';
import { checkAccess } from '../../../../../../utils/check-access';

const CommentContainer = ({ className, postId, id, author, content, publishedAt }) => {
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	const onCommentRemove = (commentId) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync( commentId, postId));
					dispatch(closeModal);
				},

				onCancel: () => dispatch(closeModal),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<MyIcon
							id="fa-user-circle-o"
							size="lg"
							margin="0 10px 0 0 "
							onClick={() => {}}
						/>
						{author}
					</div>
					<div className="published-at">
						<MyIcon
							id="fa-calendar-o"
							size="lg"
							margin="0 10px 0 0 "
							onClick={() => {}}
						/>
						{publishedAt && publishedAt.slice(0, 10)}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			{isAdmin && (
				<MyIcon
					id="fa-trash-o"
					size="lg"
					onClick={() => {
						onCommentRemove(id);
					}}
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	align-items: baseline;
	width: 600px;
	margin-bottom: 10px;

	& .comment {
		margin-right: 10px;
		padding: 10px;
		border: 1px solid black;
		width: 90%;
	}
	& .information-panel {
		display: flex;
		justify-content: space-between;
		margin-bottom: 5px;
	}
	& .author {
		display: flex;
		justify-content: space-between;
	}
	& .published-at {
		display: flex;
	}
`;
Comment.propTypes = {
	postId: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
};
