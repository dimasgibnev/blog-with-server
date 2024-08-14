import { forwardRef } from 'react';
import styled from 'styled-components';

const MyInputContainer = forwardRef (({ className, ...props }, ref) => {
	return <input type="text"  className={className} {...props} ref={ref}/>;
});

export const MyInput = styled(MyInputContainer)`
	height: 40px;
	padding: ${({padding = '10px'}) => padding};
	margin-bottom: 10px;
	border: 1px solid black;
	font-size: 20px;
	width: ${({width = '100%'}) => width};
`;
