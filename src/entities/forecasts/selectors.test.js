import { getCurrentDailyForecast } from './selectors';

describe('#getCurrentDailyForecast', () => {
	const state = {
		entities: {
			locations: {
				currentId: 1,
				byId: {
					'1': {
						id: 1
					}
				}
			},
			forecasts: {
				byCityId: {
					'1': [
						{ dt: 1484481600 },
						{ dt: 1484482600 },
						{ dt: 1484483600 },
						{ dt: 1484484600 }
					]
				}
			}
		}
	};

	it('returns an empty array if no forecasts available', () => {
		const emptyState = {
			entities: {
				locations: { byId: {} },
				forecasts: { byCityId: {} }
			},
		}
		expect(getCurrentDailyForecast(emptyState)).toEqual([]);
	});

	it('returns one forecast for each day', () => {
		expect(getCurrentDailyForecast(state).length).toBe(1);
	});

	it('returns the middle forecast for a day with multiple forecasts', () => {
		expect(getCurrentDailyForecast(state)).toEqual([{
			dt: 1484483600
		}]);
	});
});