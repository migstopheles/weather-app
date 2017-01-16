import React from 'react';

import './Forecast.css';

import ForecastDay from '../ForecastDay/ForecastDay';

export default class Forecast extends React.Component {
	render() {
		const { location, forecast } = this.props;
		if (!forecast.length) {
			return <div className="forecast forecast--empty">No forecast data to show, please choose a location</div>;
		}

		return (
			<div className="forecast">
				<h2 className="forecast__title">Showing {forecast.length} day forecast for {location.name}, {location.country}</h2>
				<div className="forecast__list">
					<ul className="forecast__items">
						{forecast.map((day, i) => {
							return (
								<li key={i} className="forecast__item">
									<ForecastDay day={day} />
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}