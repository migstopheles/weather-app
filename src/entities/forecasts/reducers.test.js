import { byCityId } from './reducers';

describe('#byCityId', () => {
	it('returns default state', () => {
		expect(byCityId()).toEqual({});
	});

	it('returns unmodified state', () => {
		expect(byCityId({ foo: 'bar' }, { type: 'ACTION_NAME' })).toEqual({ foo: 'bar' });
	});

	it('returns new state on "FORECAST_RECEIVE"', () => {
		const state = {};
		const action = { type: 'FORECAST_RECEIVE', payload: { list: 'foo', city: { id: '1' } } };
		expect(byCityId(state, action)).toEqual({ '1': 'foo' });
	});
});