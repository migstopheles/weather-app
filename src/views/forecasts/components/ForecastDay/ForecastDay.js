import React from 'react';

import './ForecastDay.css';

export default class ForecastDay extends React.Component {
	render() {
		const { day } = this.props;
		const date = new Date(day.dt * 1000);
		const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

		return (
			<div className="forecast-day">
				<div className="forecast-day__main">
					<span className="forecast-day__date">{dateString}</span>
					<span className="forecast-day__main-temp">{day.main.temp}&deg;C</span>
				</div>
				<div className="forecast-day__info">
					{day.weather.map((item, i) => {
						return <span className="forecast-day__description" key={i} title={item.description}> {item.main} </span>
					})}
					<span className="forecast-day__min-temp">min. {day.main.temp_min}&deg;C</span>
					<span className="forecast-day__max-temp">max. {day.main.temp_max}&deg;C</span>
				</div>
			</div>
		);
	}
}