import { byId, currentId } from './reducers';

describe('#byId', () => {
	it('returns default state', () => {
		expect(byId()).toEqual({});
	});

	it('returns unmodified state', () => {
		expect(byId({ foo: 'bar' }, { type: 'ACTION_NAME' })).toEqual({ foo: 'bar' });
	});

	it('returns new state on "FORECAST_RECEIVE"', () => {
		const state = {};
		const action = { type: 'FORECAST_RECEIVE', payload: { city: { id: '1' } } };
		expect(byId(state, action)).toEqual({ '1': { id: '1' } });
	});
});

describe('#currentId', () => {
	it('returns default state', () => {
		expect(currentId()).toEqual({});
	});

	it('returns unmodified state', () => {
		expect(currentId({ foo: 'bar' }, { type: 'ACTION_NAME' })).toEqual({ foo: 'bar' });
	});

	it('returns new state on "FORECAST_RECEIVE"', () => {
		const state = {};
		const action = { type: 'FORECAST_RECEIVE', payload: { city: { id: '1' } } };
		expect(currentId(state, action)).toEqual('1');
	});
});