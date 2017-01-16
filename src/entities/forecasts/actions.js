export const FORECAST_REQUEST = 'FORECAST_REQUEST';
export const FORECAST_RECEIVE = 'FORECAST_RECEIVE';

export function requestForecast() {
	return {
		type: FORECAST_REQUEST
	};
}

export function receiveForecast(forecast) {
	return {
		type: FORECAST_RECEIVE,
		payload: forecast
	};
}

export const getForecast = (city, country, mode) => (dispatch, getState, Api) => {
	dispatch(requestForecast());

	Api.Weather.getWeatherByCity(city, country, mode).then((response) => {
		dispatch(receiveForecast(response));
		return response;
	}).catch((response) => {
		dispatch(receiveForecast({ error: true, ...response }));
		return Promise.reject(response);
	});
}