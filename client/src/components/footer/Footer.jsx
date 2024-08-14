import styled from 'styled-components';
import { WeatherWidget } from './components/WeatherWidget';

const Description = styled.div`
	display: flex;
	flex-direction: column;
`

const FooterContainer = ({ className }) => {
	return (
		<footer className={className}>
			<Description>
				<span>Блог веб-разработчика</span>
				<span>web-developer.com</span>
			</Description>
			<WeatherWidget />
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0 2px 10px #000;
	font-weight: bold;
`;
