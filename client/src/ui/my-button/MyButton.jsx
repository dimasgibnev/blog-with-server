import PropTypes from 'prop-types';
import styled from 'styled-components';

const MyButtonContainer = ({ children, className, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const MyButton = styled(MyButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	border: 1px solid black;
	background-color: rgb(238, 238, 238);
	width: ${({ width = '100%' }) => width};
	height: 32px;
	margin: ${({margin}) => margin};
	cursor: ${({disabled}) => disabled ? 'default' : 'pointer'};
`;

MyButton.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string
}