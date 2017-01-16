import { create } from 'axios';

import weatherApiFactory from './services/weather';

const HttpMethods = {
	GET: 'get',
	POST: 'post'
	// etc
};

const methodsFactory = (request) => ({
	get: (url, params, options) => request({ url, params, method: HttpMethods.GET, ...options }),
	post: (url, data, options) => request({ url, data, method: HttpMethods.POST, ...options })
});

export default function apiFactory(config) {
	const { hostname, apiKey, type, units } = config;
	const axiosInstance = create({
		baseURL: hostname
		// auth headers would go here
	});

	axiosInstance.interceptors.request.use((requestConfig) => {
		if (!requestConfig.params) requestConfig.params = {};
		requestConfig.params['appid'] = apiKey;
		requestConfig.params['units'] = units;
		requestConfig.params['type'] = type;
		return requestConfig;
	});

	function request(requestConfig) {
		return axiosInstance.request(requestConfig)
			.then((response) => response.data)
			.catch((response) => {
				console.error('API Request Failed: ', requestConfig, response);
				// global response error handling
				// e.g. reauthentication on 401
			});
	}

	const api = methodsFactory(request);

	return {
		Weather: weatherApiFactory(api)
	};
}