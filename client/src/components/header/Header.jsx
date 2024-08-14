import styled from 'styled-components';
import { Logo, ControlPanel } from './components';

const Description = styled.div`
	display: flex;
	flex-direction: column;
	font-style: italic;
	padding: 10px;
`;

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<Logo />
			<Description>
				<span>Веб-технологии</span>
				<span>Написание кода</span>
				<span>Разбор ошибок</span>
			</Description>
			<ControlPanel />
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	height: 120px;
	width: 1000px;
	padding: 20px 40px;
	box-shadow: 0 -2px 15px #000;
	position: fixed;
	top: 0;
	z-index: 3;
	background-color: #fff;
`;
