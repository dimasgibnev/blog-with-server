import PropTypes from 'prop-types';
import { MyIcon } from '../../../../ui';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal, removePostAsync } from '../../../../store/actions';
import { useNavigate } from 'react-router-dom';
import { selectUserRole } from '../../../../selectors';
import { checkAccess } from '../../../../utils/check-access';
import { ROLE } from '../../../../constants';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const isAdminOrModarator = checkAccess([ROLE.ADMIN, ROLE.MODERATOR], roleId);

	const onPostRemove = (postId) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(postId)).then(() => navigate('/'));
					dispatch(closeModal);
				},

				onCancel: () => dispatch(closeModal),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && (
					<MyIcon id={'fa-calendar-o'} margin="0 10px 0 0" isIcon={true} />
				)}
				{publishedAt && publishedAt.slice(0, 10)}
			</div>
			<div className="buttons">
				{isAdminOrModarator && (
					<>
						{editButton}
						{publishedAt && (
							<MyIcon
								id={'fa-trash-o'}
								margin="0  0 0 10px"
								onClick={() => onPostRemove(id)}
							/>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
	}
	& .buttons {
		display: flex;
		align-items: center;
	}
`;

SpecialPanel.propTypes = {
	id: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	editButton: PropTypes.node.isRequired,
};
