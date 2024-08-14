import { getWeather } from '../../../utils/get-weather';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const WeatherWidgetContainer = ({ className }) => {
	const [weather, setWeather] = useState({ temp: '', desc: '' });

	useEffect(() => {
		const fetchWeather = async () => {
			const weatherData = await getWeather();
			const roundTemp = Math.round(weatherData.temp);
			setWeather({ ...weatherData, temp: roundTemp });
		};

		fetchWeather();
	}, []);

	return (
		<div className={className}>
			<span>
				Томск {new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
			</span>
			<span>
				{weather.temp}℃ {weather.desc}
			</span>
		</div>
	);
};

export const WeatherWidget = styled(WeatherWidgetContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px;
`;
