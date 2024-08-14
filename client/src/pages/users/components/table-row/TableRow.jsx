import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TableRowContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowContainer)`
	display: flex;
	margin: 0 10px 10px 0;
	${({ border }) => border && '	border: 1px solid black;'}
	padding: 5px 0;
	align-items: center;

	& > div {
		padding: 0 10px;
	}
	& .login-column {
		width: 172px;
	}
	& .registred-column {
		width: 213px;
	}
	& .role-column {
		width: auto;
	}
`;

TableRow.propTypes = {
	children: PropTypes.node.isRequired,
};
