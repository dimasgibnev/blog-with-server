import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageContainer = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};

export const Page = styled(PageContainer)`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 780px;
	margin-bottom: 20px;
	padding: 140px 40px 40px;
`;

Page.propTypes = {
	children: PropTypes.node.isRequired,
};
