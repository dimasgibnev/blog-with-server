import PropTypes from 'prop-types';
import { MyButton } from '../../../../ui';
import styled from 'styled-components';

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
	return (
		<div className={className}>
			<MyButton
				disabled={page === 1}
				onClick={() => setPage(1)}
				width="150px"
				margin="0 5px 0 0"
			>
				В начало
			</MyButton>
			<MyButton
				disabled={page === 1}
				onClick={() => setPage(page - 1)}
				width="150px"
				margin="0 5px 0 0"
			>
				Предыдущая
			</MyButton>
			<div className="current-page">Страница {page}</div>
			<MyButton
				disabled={page === lastPage}
				onClick={() => setPage(page + 1)}
				width="150px"
				margin="0 5px 0 0"
			>
				Следующая
			</MyButton>
			<MyButton
				disabled={page === lastPage}
				onClick={() => setPage(lastPage)}
				width="150px"
			>
				В конец
			</MyButton>
		</div>
	);
};
export const Pagination = styled(PaginationContainer)`
	position: relative;
	bottom: 20px;
	margin: 0 auto;
	display: flex;
	justify-content: center;

	& .current-page {
		margin: 0 5px 0 0;
		border: 1px solid black;
		width: 150px;
		height: 32px;
		font-weight: 500;
		line-height: 30px;
		text-align: center;
		font-size: 20px;
	}
`;

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	lastPage: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};
