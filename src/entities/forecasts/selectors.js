import { getCurrentLocation } from '../locations/selectors';

// here would be a good place to use a tool like reselect to cache non-trivial selectors

function groupForecastIntoDays(forecast) {
	return forecast.reduce((byDay, item) => {
		const itemDate = new Date(item.dt * 1000);
		const date = `${itemDate.getYear()}${itemDate.getMonth()}${itemDate.getDate()}`;
		byDay[date] = byDay[date] || [];
		byDay[date].push(item);
		byDay[date].sort((a, b) => a > b);
		return byDay;
	}, {});
}

export function getCurrentDailyForecast(state) {
	const currentLocation = getCurrentLocation(state);
	if (!currentLocation) return [];
	const currentForecastGrouped = groupForecastIntoDays(state.entities.forecasts.byCityId[currentLocation.id] || []);
	return Object.keys(currentForecastGrouped).map((key) => {
		const day = currentForecastGrouped[key];
		return day[Math.ceil(day.length / 2)];
	});
}