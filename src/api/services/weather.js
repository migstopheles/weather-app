const weatherApiFactory = (api) => ({
	getWeatherByCity: (city, countryCode = 'en', mode = 'json') => api.get(`data/2.5/forecast?q=${city},${countryCode}&mode=${mode}`)
});

export default weatherApiFactory;