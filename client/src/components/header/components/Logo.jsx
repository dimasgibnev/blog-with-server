import styled from 'styled-components';
import { MyIcon } from '../../../ui';
import { Link } from 'react-router-dom';

const LargeText = styled.div`
	font-size: 46px;
	font-weight: bold;
`;

const SmallText = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const LogoContainer = ({ className }) => {
	return (
		<Link className={className} to={'/'}>
			<MyIcon id={'fa-code'} size={'4x'} margin={'10px'}/>
			<div>
				<LargeText>Блог</LargeText>
				<SmallText>веб-разработчика</SmallText>
			</div>
		</Link>
	);
};

export const Logo = styled(LogoContainer)`
	display: flex;
	align-items: center;

`;
