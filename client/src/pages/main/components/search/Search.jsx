import PropTypes from 'prop-types';
import { MyIcon } from '../../../../ui';
import { MyInput } from '../../../../ui';
import styled from 'styled-components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<MyInput
				value={searchPhrase}
				onChange={onChange}
				placeholder="Поиск ..."
				padding="10px 30px 10px 10px"
			/>
			<div className="search-icon">
				<MyIcon id={'fa-search'} isIcon={true} size="lg" />
			</div>
		</div>
	);
};
export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	margin: 0 auto;
	width: 380px;
	height: 40px;
	margin-bottom: 40px;

	.search-icon {
		position: absolute;
		right: 5px;
		top: 9px;
	}
`;

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
