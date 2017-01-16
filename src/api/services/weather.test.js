import weatherApiFactory from './weather';

const apiMock = { get: jest.fn(), post: jest.fn() };
const weatherApi = weatherApiFactory(apiMock);

describe('Weather API Factory', () => {
	it('has methods', () => {
		expect(weatherApi.getWeatherByCity).toBeInstanceOf(Function);
	});

	describe('#getWeatherByCity', () => {
		it('calls the api with a url built from the passed parameters', () => {
			weatherApi.getWeatherByCity('City', 'aa', 'xml');
			expect(apiMock.get).toBeCalledWith('data/2.5/forecast?q=City,aa&mode=xml');
		});
	});
});
